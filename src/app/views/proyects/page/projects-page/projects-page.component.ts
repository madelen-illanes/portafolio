import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/models/tracks.model';

import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> =[
  
  ]

  constructor() { }

  ngOnInit(): void {
    const { data }  : any =(dataRaw as any).default
   this.mockTracksList = data;
  }

}
