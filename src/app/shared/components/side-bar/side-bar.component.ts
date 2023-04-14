import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

mainMenu: {
  defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []
  
  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'start']
      },
      {
        name: 'About me',
        icon: 'uil uil-search',
        router: ['/', 'history'],
      },
      {
        name: 'Proyectos',
        icon: 'uil uil-chart',
        router: ['/', 'projects']
      },
      {
        name: 'Skills',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites'],
      }
    
    ]

  }

}
