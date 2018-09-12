import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { GiphyImages } from './giphy-images';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { switchMap, map } from 'rxjs/operators';
import { startWith } from 'rxjs/internal/operators/startWith';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GiphyDataService {
  private images: Array<GiphyImages> = [];
  private GIPHY_API_KEY = 'KCGMLdo04R07wLqhpKL8GiOPywaSurDh';
  private host = '//api.giphy.com/v1/gifs/search';
  private q: string;
  private timer = interval(600000).pipe(startWith(0));

  private offsetMax = 100;
  constructor(private http: HttpClient) {}
  public getImages(q: string): Observable<GiphyImages[]> {
    // return this.getGiphyImages(q)
    return this.timer.pipe(switchMap(() => this.getGiphyImages(q)));
  }

  getGiphyImages(q: string): Observable<GiphyImages[]> {
    this.q = q;
    console.log(q);
    const params = new HttpParams()
      .set('q', q)
      .set('limit', '100')
      .set('rating', 'g')
      .set('offset', (Math.floor(Math.random() * this.offsetMax) + 1).toString())
      .set('api_key', this.GIPHY_API_KEY);

    return this.http.get(this.host, { params: params, responseType: 'json' }).map(response => this.success(response));
  }
  success(response) {
    this.offsetMax = response.pagination.total_count - 100;
    if (response.data.length === 0) {
      this.getImages(this.q);
    }
    const images = [];
    for (let i = 0; i < response.data.length; i++) {
      const image: GiphyImages = response.data[i].images.fixed_height;
      images.push(image);
    }
    return images;
  }
}
