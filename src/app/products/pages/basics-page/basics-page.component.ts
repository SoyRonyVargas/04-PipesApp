import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower = 'pipes app';
  public nameUpper = 'PIPES APP';
  public fullName = 'pIpeS aPP';

  public fechaActual = new Date();

  constructor() { }

  ngOnInit(): void {

  }

}
