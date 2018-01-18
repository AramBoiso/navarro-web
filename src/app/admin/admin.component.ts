import { Component} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import {LoginService} from '../services/login.service';





@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

    // OTROS
    title:string; 
    showTable:boolean;
    

    // BOTONES  
    buttonOcultTable:boolean;
    buttonViewTable:boolean;
    buttonToUpDate:boolean;
    buttonAdd:boolean;

    // Registros
    compras: any;
    compra:any;
    editing:boolean;

    // Fecha
    day:any;
    month:any;
    year:any;
    months:any[];
    date:any;

    // LOGIN
    email:any;
    password:any;

  constructor(public afDB: AngularFireDatabase, public lS:LoginService) { 

            // EXTRAS
        this.title = "Agregar Compra";
        this.showTable = true;
        this.editing = false;
     
           //  BOTONES
      this.buttonOcultTable = true;
      this.buttonViewTable = false;
      this.buttonAdd = false;
      this.buttonToUpDate = true;

         // Registros
    //  this.compras = [];
      this.compra = {
                      id:null, fecha: null, nombre: null, telefono: null, 
                      paquete: null, costo: null, abono: null, tipo: null,
                      sucursal:null
      };

      this.getCompras()
          .subscribe(
           compras => {
              this.compras = compras;
          }
        );
      
      // OBTENER FECHA
      this.getDate();
      
  }

    // METODOS DEL LOGIN

        logIn(){
          this.lS.email = this.email;
          this.lS.password = this.password;
          this.lS.login();
        }

    //  OBTENER FECHA  
       getDate(){
        this.months = ['01', '02', '03', '04', '05',, '06', '07', '08', '09', '10', '11', '12'];
        this.day = new Date().getDate();
        this.month= this.months[new Date().getMonth()];
        this.year = new Date().getFullYear();
        this.date = (this.day+' / '+this.month+' / '+this.year);

        return this.date;
       }

      // METODOS DEL REGISTRO  

        getCompras(){
          return this.afDB.list('/registros').valueChanges();
        }
      
        add(){
           this.compra.id = Date.now();
           this.compra.fecha = this.getDate();
           this.afDB.database.ref('registros/'+this.compra.id).set(this.compra);
           this.clean();
        }

        edit(c){
            this.title = 'Editar Compra';
            this.buttonAdd = true;
            this.buttonToUpDate = false;
            this.compra = c;
            this.editing = true;
        }

        toUpDate(){
          if(this.editing){
            this.afDB.database.ref('registros/'+this.compra.id).set(this.compra);
          }
          this.buttonToUpDate = true;
          this.buttonAdd = false;
          this.title = 'Agregar Compra';
          this.clean();
        }

        remove(i){
          var answer = confirm('Estas seguro de eliminar el registro?');
          if(answer){
            this.afDB.database.ref('registros/'+this.compras[i].id).remove();
           //this.compras.splice(i,1);
          }
        }
     

    
    // METODOS DE INTERACCION

      viewTable(){
            this.showTable= false;
            this.buttonOcultTable = false;
            this.buttonViewTable = true;
      }
      
      downTable(){
          this.showTable= true;
          this.buttonOcultTable = true;
          this.buttonViewTable = false;
      }

      cancel(){
        this.title = "Agregar Compra";
        this.buttonAdd = false;
        this.buttonToUpDate = true;
        this.clean();
      }

      clean(){
        this.compra = {
          fecha: null, nombre: null, telefono: null, 
          paquete: null, costo: null, abono:null, tipo:null,
          sucursal:null
        }; 
      }

}
