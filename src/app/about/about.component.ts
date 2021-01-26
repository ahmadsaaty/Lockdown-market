import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  chocolate = [];
  // @Input() title = 'Mars Chocolate';
  // @Input() Description = 'Providing what you need, when you need'

  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/about')
      .subscribe((data: any) => {
        this.chocolate = data;
        console.log(this.chocolate)
      })
  }

}
