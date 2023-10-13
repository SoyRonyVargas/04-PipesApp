import { Component, OnInit } from '@angular/core';
import { interval , tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {

  public name: string = "Maximiliano"
  public gender: string = "Male"
  public clientes: string[] = [
    "Juan Pérez",
    "María García",
    "Carlos López",
    "Ana Rodríguez",
    "Luisa Martínez",
  ];

  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  public invitationMap = {
    'Male': 'invitarlo',
    'Female': 'invitarla'
  }

  public person = {
    name: 'Edison',
    age: 18,
    gender: 'Male'
  }

  // async pipe

  public myObservableTimer = interval(2000).pipe( tap( value => console.log(value)) );

  public index = 0;
  public myPromise : Promise<number> = new Promise( (res , rej) => {
    setTimeout( () => {
      res(this.index)    
    }, 2000)
  })
  constructor() { }

  ngOnInit(): void {
  }

  handleEliminarCliente(){
    this.clientes.pop()
  }

  handleChangeGender()
  {
    this.name = 'Mariana'
    this.gender = "Female"
  }

}
