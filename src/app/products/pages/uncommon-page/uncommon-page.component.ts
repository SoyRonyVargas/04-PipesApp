import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {


  // i18nSelect

  public name: string = "Maximiliano"
  public gender: string = "Male"

  public invitationMap = {
    'Male': 'invitarlo',
    'Female': 'invitarla'
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeGender()
  {
    debugger
    this.name = 'Mariana'
    this.gender = "Female"
  }

}
