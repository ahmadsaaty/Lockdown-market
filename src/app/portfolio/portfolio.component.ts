import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = []
  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/portfolio')
      .subscribe((data: any) => {
        this.portfolio = data
      })
  }

}
