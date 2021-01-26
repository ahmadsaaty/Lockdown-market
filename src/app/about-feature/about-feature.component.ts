
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-feature',
  templateUrl: './about-feature.component.html',
  styleUrls: ['./about-feature.component.css']
})
export class AboutFeatureComponent implements OnInit {



  @Input() title = ''
  @Input() Description = ''


  constructor() { }

  ngOnInit(): void {

  }

}
