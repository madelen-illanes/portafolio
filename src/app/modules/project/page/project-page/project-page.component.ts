import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  mockTracksList: Array<TrackModel> =[]
  constructor() { }

  ngOnInit(): void {
    const { data }  : any =(dataRaw as any).default
   this.mockTracksList = data;
  }

}
