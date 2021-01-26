import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps-feature',
  templateUrl: './steps-feature.component.html',
  styleUrls: ['./steps-feature.component.css']
})
export class StepsFeatureComponent implements OnInit {
  @Input() id = ''
  @Input() title = ''
  @Input() Description = ''
  constructor() { }

  ngOnInit(): void {
  }

}
