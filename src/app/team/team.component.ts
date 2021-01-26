import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team = []
  constructor(private http1: HttpClient) { }

  ngOnInit(): void {
    this.http1.get('https://excelserver.herokuapp.com/team')
      .subscribe((data: any) => {
        this.team = data
      })
  }

}
