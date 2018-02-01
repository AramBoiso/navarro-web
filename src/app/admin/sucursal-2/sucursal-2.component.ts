import { Component} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './sucursal-2.component.html',
  styleUrls: ['./sucursal-2.component.css']
})
export class Sucursal2Component {

    // OTHERS
    title:string; 
    showTable:boolean;
    showInput:boolean;
    

    // BUTTONS  
    buttonOcultTable:boolean;
    buttonViewTable:boolean;
    buttonToUpDate:boolean;
    buttonAdd:boolean;

    // REGISTER
    compras: any;
    compra:any;
    editing:boolean;

    // DATE
    day:any;
    month:any;
    year:any;
    months:any[];
    date:any;



  constructor(public afDB: AngularFireDatabase, public lS:LoginService) { 

            // OTHERS
        this.title = "Agregar Compra";
        this.showTable = true;
        this.editing = false;
        this.showInput = true;
     
           //  BUTTONS
      this.buttonOcultTable = true;
      this.buttonViewTable = false;
      this.buttonAdd = false;
      this.buttonToUpDate = true;

         // REGISTERS

      this.compra = {
           id:null, date: null, name: null, phone: null, 
           package: null, cost: null, payment: null, type: null,
           subsidiary: '2',residuary: null, newPayment: null, s:'$',
           file: null
      };

      this.getCompras()
          .subscribe(
           compras => {
              this.compras = compras;
          }
        );
      
      // GET DATE
      this.getDate();
      
  }

    //  METHOD FOR DATE GET 
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
          return this.afDB.list('/sucursal2').valueChanges();
        }
      
        add(){
          if(this.compra.name == null || this.compra.phone == null || this.compra.cost == null){
            alert("ACCION INVALIDA, asegurese de llenar los siguintes campos del formulario: 'Nombre, Telefono, Precio'")
         }else{
           this.compra.id = Date.now();
           this.compra.date = this.getDate();

           this.compra.residuary = this.compra.cost - this.compra.payment;
           if(this.compra.residuary == 0){
             this.compra.residuary = 'Pagado';
             this.compra.s = '';
           }else{
            this.compra.s = '$';
           }

           this.afDB.database.ref('sucursal2/'+this.compra.id).set(this.compra);
           this.clean();
          }
        }

        edit(c){
            this.title = 'Editar Compra';
            this.buttonAdd = true;
            this.buttonToUpDate = false;
            this.compra = c;
            this.editing = true;
            this.showInput = false;
        }

        toUpDate(){
          if(this.editing){      

            var me = this;
            this.compras.forEach((el,i) => {
            if(el.id === me.compra.id){
              
              if(me.compra.newPayment == null){
                me.compra.newPayment = 0;
                me.compra.payment += me.compra.newPayment;
              }else{
                me.compra.payment += me.compra.newPayment;
              }
              
              me.compra.residuary = me.compra.cost - me.compra.payment;
              if(me.compra.residuary == 0){
                me.compra.residuary = 'Pagado';
                me.compra.s = '';
              }else{
                this.compra.s = '$';
              }
            } 
            });

            this.compra.newPayment = null;
            this.afDB.database.ref('sucursal2/'+this.compra.id).set(this.compra);
          }
          this.showInput = true;
          this.buttonToUpDate = true;
          this.buttonAdd = false;
          this.title = 'Agregar Compra';
          this.clean();
        }

        remove(i){
          var answer = confirm('Estas seguro de eliminar el registro?');
          if(answer){
            this.afDB.database.ref('sucursal2/'+this.compras[i].id).remove();
          }
          this.title = 'Agregar Compra';
          this.buttonAdd = false;
          this.buttonToUpDate = true;
          this.showInput = true;
          this.clean();
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
        this.showInput = true;
        this.clean();
      }

      clean(){
        this.compra = {
          id:null, date: null, name: null, phone: null, 
          package: null, cost: null, payment: null, type: null,
          subsidiary: '2',residuary: null, newPayment: null,
          file: null
        }; 
      }

}
