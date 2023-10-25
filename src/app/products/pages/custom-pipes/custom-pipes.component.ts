import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../types/hero.interface';

export type HeroTypeKey = keyof Hero | null;

@Component({
  selector: 'page-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  public isUpperCased: boolean = false;
  public orderBy?: HeroTypeKey = null;

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
    },
    {
      name: 'Black Panter',
      color: Color.black,
      canFly: false
    },
    {
      name: 'Doctor Strange',
      color: Color.red,
      canFly: true
    },
    {
      name: 'Joker',
      color: Color.red,
      canFly: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleUpperCase():void
  {
    this.isUpperCased = !this.isUpperCased
  }

  changeOrder( value: HeroTypeKey ){
    this.orderBy = value
  }

}
