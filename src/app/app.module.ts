import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './extra-components/navbar.component';
import { CoruselComponent } from './extra-components/corusel.component';
import { PaquetesEscolaresComponent } from './paquetes-escolares/paquetes-escolares.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { MontajesComponent } from './montajes/montajes.component';

import { routes } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './extra-components/modal.component';

import {AngularFireModule} from 'angularfire2';
import{AngularFirestoreModule}  from 'angularfire2/firestore';

import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FooterComponent } from './extra-components/footer.component';
import { LoginService } from './services/login.service';
import { Sucursal2Component } from './admin/sucursal-2/sucursal-2.component';




var config = {
  apiKey: "AIzaSyAqOG8IyavjBDut2qTMyMj8wRCAQ-nXL2s",
  authDomain: "navarro-web.firebaseapp.com",
  databaseURL: "https://navarro-web.firebaseio.com",
  projectId: "navarro-web",
  storageBucket: "navarro-web.appspot.com",
  messagingSenderId: "1073866254692"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoruselComponent,
    PaquetesEscolaresComponent,
    IdentificacionComponent,
    SesionesComponent,
    MontajesComponent,
    AdminComponent,
    ModalComponent,
    FooterComponent,
    Sucursal2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
