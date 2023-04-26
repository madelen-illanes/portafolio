import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/app/models/tracks.model';



@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {
@Input () mode: 'small' | 'big' = 'small';
@Input () track: TrackModel = {_id: 1 , name:'', album: '', url:'',cover:''};
  constructor() { }

  ngOnInit(): void {
  }

}
