import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {

  chocolate = [];


  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/steps')
      .subscribe((data: any) => {
        this.chocolate = data;

      })
  }

}
