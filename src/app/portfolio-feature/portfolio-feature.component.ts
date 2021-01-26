import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-feature',
  templateUrl: './portfolio-feature.component.html',
  styleUrls: ['./portfolio-feature.component.css']
})
export class PortfolioFeatureComponent implements OnInit {
  portfolio = []
  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/portfolio')
      .subscribe((data: any) => {
        this.portfolio = data
      })
  }

}
