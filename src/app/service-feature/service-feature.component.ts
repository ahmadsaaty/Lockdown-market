import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-feature',
  templateUrl: './service-feature.component.html',
  styleUrls: ['./service-feature.component.css']
})
export class ServiceFeatureComponent implements OnInit {
  @Input() title = ""
  @Input() description = ""
  // @Input() imgclass = "bx bxl-dribbble"

  constructor() { }

  ngOnInit(): void {
  }

}
