import { Component, OnInit } from '@angular/core';
import { DashingGridsterItem } from '../../interfaces/dashing-gridster-item';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `Hello World !! c:{{data.cols}} r: {{data.rows}}`
})
export class HelloWorldComponent implements OnInit {
  @Input()
  data: DashingGridsterItem;
  constructor() {}

  ngOnInit() {}
}
