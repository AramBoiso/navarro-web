import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-paquetes-escolares',
  templateUrl: './paquetes-escolares.component.html',
  styleUrls: ['./paquetes-escolares.component.css']
})
export class PaquetesEscolaresComponent implements OnInit {

  packageSchool:Array<any>;
  
  constructor(public images:ImagesService) { 
    this.packageSchool = this.images.thumbnails;
  }

  ngOnInit() {
  }

}
