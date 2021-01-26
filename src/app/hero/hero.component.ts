import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router) { }

  scrollToElement() {
    this.router.navigate(['/test'])
  }

  ngOnInit(): void {


  }

}
