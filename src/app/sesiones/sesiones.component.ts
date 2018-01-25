import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {

  sessionsCustom:Array<any>;
  title:string;
  vistaPrevia:boolean;
  image:any;

  constructor(public images:ImagesService) { 
    this.title = 'SESIONES';
    this.sessionsCustom = images.thumbnailsCustom;
    this.vistaPrevia = true;
  }

  vista(index){
     this.image = this.images.thumbnailsCustom[index].imgUrl;
    this.vistaPrevia = false;
  }

  ocultar(){
    this.vistaPrevia = true;
  }

  ngOnInit() {
  }

}
