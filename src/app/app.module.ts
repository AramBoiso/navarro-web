import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './extra-components/navbar.component';
import { CoruselComponent } from './extra-components/corusel.component';
import { PaquetesEscolaresComponent } from './paquetes-escolares/paquetes-escolares.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { MontajesComponent } from './montajes/montajes.component';

import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoruselComponent,
    PaquetesEscolaresComponent,
    IdentificacionComponent,
    SesionesComponent,
    MontajesComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
