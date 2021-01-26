import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServiceComponent implements OnInit {
  service = []
  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/service')
      .subscribe((data: any) => {
        this.service = data;
        console.log(this.service)
      })
  }

}
