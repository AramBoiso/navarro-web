import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  thumbnails:Array<any>;
  thumbnailsCustom:Array<any>;
  restauracionesImages:Array<any>;
  packagesSchoolImages:any;
  identificationImages:any;
  coruselImages:any;
 

  constructor() {
    
    this.thumbnails = [
      {
      title:'CBTIS 226', description:'Paquetes CBTis 226', alt:'CBTis 226 logo', route:'/cbtis',
      imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Fcbtis.jpg?alt=media&token=986d5345-c8cc-4600-9fe5-7f38bf80ce5b'
      },
      {
        title:'ITG', description:'Paquetes ITG', alt:'ITG logo',  route:'/tec',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Ftec.png?alt=media&token=9bbcd587-bcdc-4788-a58f-aca8e7164304'
      },
      {
        title:'CuSur', description:'Paquetes  CuSur', alt:'CuSur logo',  route:'/cus',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Fcus.jpg?alt=media&token=457e99c4-94d5-4fc5-b9fa-d83ae98a0683'
      },
       {
        title:'Univer', description:'Paquetes Univer', alt:'Univer logo',  route:'/univer',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/thumbnailsSchool%2Funiver.jpg?alt=media&token=5b80fdcb-e45f-43ad-ae54-f4a8bccfc1eb'
      }
      
    ];

    this.thumbnailsCustom = [
      {title:'Bodas', description:'Sesiones de Boda', alt:'Boda',
       imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/Sesiones%2Fboda.jpg?alt=media&token=ee8ddc65-d1a3-4acc-9bcf-6e03705da490'
      },
      {
       title:'XV años', description:'Xv años', alt:'Xv años',
       imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/Sesiones%2Fxv2.jpg?alt=media&token=eacfc11b-d6d3-48ae-8553-c0c35f358276'
    },
      {
        title:'Sesiones', description:'Sesiones Personalizadas', alt:'Sesiones',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/Sesiones%2Fsesion.jpg?alt=media&token=58be26ce-bc66-45fb-b7ad-0dabc78ce35b'
      },
      {
        title:'Bautizos', description:'Bautizos', alt:'Bautizos',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/Sesiones%2Fbautizo.jpg?alt=media&token=a95b3321-6159-4cfd-bf89-19c4c13389a5'
        },
      {
        title:'Primera Comunión', description:'Primera Comunion', alt:'Primera Comunion',
        imgUrl:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/Sesiones%2Fprimera.jpg?alt=media&token=696c09ad-bd3d-4a7f-8466-f78fc3272c0a'
        }
    ];

    this.packagesSchoolImages = {
      cb:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2Fmuestrario-cbtis.jpg?alt=media&token=0664e25e-b803-414a-b477-b41d5d748c94',
      tec:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2Fmuestrario-tec.jpg?alt=media&token=39e1a090-30af-4f88-a3e2-141a15c1c6fb',
      cusCard:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2FCredencial.jpg?alt=media&token=ad7f0a65-dd49-41b9-b848-1a27b67859cc',
      cusIn:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2FInfantil.jpg?alt=media&token=9d10cd22-e217-4a37-8b55-0df7c4f050c4',
      cusTitle:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2FTitulo.jpg?alt=media&token=37df5038-2aed-44ee-9c11-6d84ef8d2749',
      cusPackage:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2FPaquete.jpg?alt=media&token=bf036089-6cd2-46b0-adda-41e584c1bd1f',
      cusPackageCus:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2FPaquetes-Cusur.jpg?alt=media&token=6e9f94fb-9c50-4dd1-a536-df8e90631ac1',
      uni:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/packageSchoolImage%2Fmuestrario-univer.jpg?alt=media&token=baf253e4-b680-4958-aed6-db427b9a68dd'
    };

    this.identificationImages = {
      card1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FCredencial-01.jpg?alt=media&token=d7151f02-e982-4ed2-8b30-679450cf2edc',
      card2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FCredencial-02.jpg?alt=media&token=1fa12790-7dd3-48b2-9834-ad3d5f51ae02',
      cardOval1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FCredencial-Oval-01.jpg?alt=media&token=f1e1ef3c-8311-4354-a16c-d73164d6b535',
      cardOval2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FCredencial-Oval-02.jpg?alt=media&token=622bdd9a-ce17-4545-97e0-e8cb5bd7a28d',
      diploma:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FDiploma-01.jpg?alt=media&token=efa865ea-65b1-44aa-b087-0d5c868045d8',
      infantil1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FInfantil-01.jpg?alt=media&token=ac46ad0b-dc8e-4940-b266-13f8143d069b',
      infantil2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FInfantil-02.jpg?alt=media&token=8c4762be-22f1-41f4-9d05-35c5416e57f2',
      pasaporte1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FPasaporte-01.jpg?alt=media&token=89fb1fef-14d1-4f92-afc4-1863ec9152ff',
      pasaporte2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FPasaporte-02.jpg?alt=media&token=2d8cbb08-a8f7-40c5-a28c-d715beb3fbca',
      titulo1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FTitulo-01.jpg?alt=media&token=63ce5fed-a197-4b6e-a73c-212155183309',
      titulo2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FTitulo-02.jpg?alt=media&token=9b476844-e9f7-4741-8320-9412c6d22e87',
      titulo3:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FTitulo-03.jpg?alt=media&token=806e5459-ca75-4820-a182-89d6d7610a58',
      tituloOval1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FTitulo-Oval-01.jpg?alt=media&token=592b11e7-6f39-440c-84d8-ad9fffe10f9d',
      tituloOval2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FTitulo-Oval-02.jpg?alt=media&token=9030c120-92e4-4dad-a0ce-ecb4bfdfd466',
      visa:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/IdentificationImages%2FVISA-01.jpg?alt=media&token=e1793128-ec4d-46f3-b3ae-cd7952797d6e'
    };
    this.restauracionesImages = [
      {
        original:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-1.jpg?alt=media&token=f91ff2d0-116a-4528-9dee-d371286e2074' , 
        restaurada:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-1-copy.jpg?alt=media&token=1828057a-e3f5-4607-9abc-f5e63d14a7ae' 
      },
      {
        original:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-2.jpg?alt=media&token=df841890-edf4-4d32-88db-e0bf00f5dac1' , 
        restaurada:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-2-copy.jpg?alt=media&token=8963436f-2314-48b6-99b2-a3227871e172' 
      },
      {
        original:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-3.jpg?alt=media&token=6b5e3f52-6fb8-4fde-968c-eaa1aa1e9d13' , 
        restaurada:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/restauraciones%2FUntitled-3-copy.jpg?alt=media&token=492acbae-1f8e-432f-a9e9-1a2e7da0f201' 
      }
  ];

  this.coruselImages = {
    image1:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/home%2FImagen-07.jpg?alt=media&token=851a2f7f-14c4-42f4-8e95-825a1f996f38',
    image2:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/home%2FImagen-01.jpg?alt=media&token=8d154004-cc40-4277-aaaf-b7e93fb1ae43',
    image3:'https://firebasestorage.googleapis.com/v0/b/navarro-web.appspot.com/o/home%2FImagen-08.jpg?alt=media&token=6288d209-b928-47bd-9ee2-f64cbbb2a113'
  }

    
   }

  

}
