import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featuress-feature',
  templateUrl: './featuress-feature.component.html',
  styleUrls: ['./featuress-feature.component.css']
})
export class FeaturessFeatureComponent implements OnInit {
  @Input() title = ''
  @Input() description = ''

  constructor() { }

  ngOnInit(): void {
  }

}
