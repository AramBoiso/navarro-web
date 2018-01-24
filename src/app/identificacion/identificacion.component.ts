import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
