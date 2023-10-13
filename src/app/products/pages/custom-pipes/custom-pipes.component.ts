import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../types/hero.interface';

@Component({
  selector: 'page-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  public isUpperCased: boolean = false;

  public heroes : Hero[] = [
    {
      name: 'Superman',
      color: Color.blue,
      canFly: true
    },
    {
      name: 'Spiderman',
      color: Color.red,
      canFly: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleUpperCase():void
  {
    this.isUpperCased = !this.isUpperCased
  }

}
