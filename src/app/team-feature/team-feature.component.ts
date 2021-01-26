import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-feature',
  templateUrl: './team-feature.component.html',
  styleUrls: ['./team-feature.component.css']
})
export class TeamFeatureComponent implements OnInit {

  @Input() name = ''
  @Input() title = ''

  constructor() { }

  ngOnInit(): void {
  }

}
