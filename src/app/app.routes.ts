import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {HomeComponent} from './home/home.component';
import { PaquetesEscolaresComponent } from './paquetes-escolares/paquetes-escolares.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { MontajesComponent } from './montajes/montajes.component';


const appRoutes:Routes = [
    {path: '', component:HomeComponent },
    {path: 'paquetes-escolares', component:PaquetesEscolaresComponent},
    {path: 'identificacion', component:IdentificacionComponent},
    {path: 'sesiones', component:SesionesComponent},
    {path: 'montajes', component:MontajesComponent}
  ];

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);