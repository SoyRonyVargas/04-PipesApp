import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent implements OnInit {

  public numero:number = Math.PI
  public porcentaje:number = 0.50

  constructor() { }

  ngOnInit(): void {
  }

}
