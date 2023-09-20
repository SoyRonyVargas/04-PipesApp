import { Component, OnInit } from '@angular/core';

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
