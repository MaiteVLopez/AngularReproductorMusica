import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
  @Input() title:string = '';
  @Input() mode: 'small' | 'big' = 'small' //que sea small o big y que por defecto sea small
  @Input() dataTracks: Array<TrackModel> = []

  constructor() {}

  
  ngOnInit(): void {
  }

}
