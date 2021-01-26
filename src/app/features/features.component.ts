import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  feature = []
  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/feature')
      .subscribe((data: any) => {
        this.feature = data
      })
  }

}
