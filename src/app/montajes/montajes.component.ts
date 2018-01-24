import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-montajes',
  templateUrl: './montajes.component.html',
  styleUrls: ['./montajes.component.css']
})
export class MontajesComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
