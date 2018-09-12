import { Component, OnInit, Input } from '@angular/core';
import { GiphyImages } from '../widgetGiphy/giphy-images';
import { GiphyDataService } from '../widgetGiphy/giphy-data.service';
import { DashingGridsterItem } from '../../interfaces/dashing-gridster-item';

@Component({
  selector: 'app-widget-giphy',
  template: `<small>&copy;Giphy</small>
  <img *ngIf="image" [src]="image.url"/>`,
  styleUrls: ['./widget-giphy.component.scss'],
  providers: [GiphyDataService]
})
export class WidgetGiphyComponent implements OnInit {
  private currentImageIndex = 0;
  @Input()
  data: DashingGridsterItem;
  private timer: any;
  private images: Array<GiphyImages> = [];
  public image: GiphyImages;

  private setImage(): any {
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.preLoadImage();
  }

  constructor(private g: GiphyDataService) {}

  ngOnInit() {
    this.getImages();
  }
  private preLoadImage(): void {
    const nextImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    const image = new Image();
    image.src = this.images[nextImageIndex].url;
  }
  private getImages() {
    this.g.getGiphyImages(this.data.widget.params.q).subscribe(data => {
      this.images = data;
      this.timer = setInterval(() => this.setImage(), 15000);
    });
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
    console.log(this.data.widget.params.q);
  }
}
