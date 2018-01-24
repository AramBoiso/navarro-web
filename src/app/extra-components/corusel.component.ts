import { Component, OnInit } from '@angular/core';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-corusel',
  templateUrl: './corusel.component.html',
  styleUrls: ['./corusel.component.css']
})
export class CoruselComponent implements OnInit {

  constructor(public images:ImagesService) { }

  ngOnInit() {
  }

}
