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
        query: { hola: 'mundo' }
      },
      {
        name: 'Proyectos',
        icon: 'uil uil-chart',
        router: ['/', 'tracks']
      },
      {
        name: 'Skills',
        icon: 'uil-heart-medical',
        router: ['/', 'favorites'],
      }
    
    ]

    this.mainMenu.accessLink = [
     /* {
        name: 'Skills',
        icon: 'uil-heart-medical',
        router: ['/', 'history'],
      }*/
    ]
    this.customOptions = [
       /* {
        name: ' º1',
        router: ['/']
      },
      {
        name: ' º2',
        router: ['/']
      },
      {
        name: ' º3',
        router: ['/']
      },
      {
        name: 'º4',
        router: ['/']
      }*/
    ]
  }

}
