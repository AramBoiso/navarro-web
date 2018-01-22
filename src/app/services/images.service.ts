import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  thumbnails:Array<any>;
  thumbnailsCustom:Array<any>;

  constructor() {
    this.thumbnails = [
      {
      title:'CBTIS 226', description:'Paquetes de CBTis 226', alt:'CBTis 226 logo',
      imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Fcbtis.jpg?alt=media&token=986d5345-c8cc-4600-9fe5-7f38bf80ce5b'
      },
      {
      title:'UDG', description:'Paquetes de UDG', alt:'UDG logo', 
      imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Fprepa.png?alt=media&token=db64f73b-066f-4406-a733-8df5020ad648'
      },
      {
        title:'ITG', description:'Paquetes del ITG', alt:'ITG logo', 
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Ftec.png?alt=media&token=9bbcd587-bcdc-4788-a58f-aca8e7164304'
      },
      {
        title:'CUSur', description:'Paquetes del CuSur', alt:'CuSur logo', 
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Fcus.jpg?alt=media&token=457e99c4-94d5-4fc5-b9fa-d83ae98a0683'
      }
    ];

    this.thumbnailsCustom = [
      {title:'Bodas', description:'Sesiones de Boda', imgUrl:'../assets/boda.jpg'},
      {title:'XV años', description:'Xv años', imgUrl:'../assets/xv.jpg'},
      {title:'Sesiones Personalizadas', description:'Sesiones Personalizadas', imgUrl:'../assets/personalizadas.jpg'},
      {title:'Bautizos', description:'Bautizos', imgUrl:'../assets/bautizo.jpg'},
      {title:'Primera Comunion', description:'Primera Comunion', imgUrl:'../assets/primeraC.jpg'}

    ];

   }

  

}
