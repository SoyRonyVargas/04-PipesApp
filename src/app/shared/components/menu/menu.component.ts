import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  public items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        // routerLink: '/',
        items: [
          {
            label: 'Textos y fechas',
            routerLink: '/',
            icon: 'pi-align-justify pi'
          },
          {
            label: 'Numeros',
            routerLink: '/numbers',
            icon: 'pi-dollar pi'
          },
          {
            label: 'No comunes',
            routerLink: '/uncommon',
            icon: 'pi-globe pi'
          }
        ]
      },
      // {
      //   label: 'Edit',
      //   icon: 'pi pi-fw pi-pencil',
      //   items: [
      //     { label: 'Delete', icon: 'pi pi-fw pi-trash' },
      //     { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
      //   ]
      // }
    ];
  }

}
