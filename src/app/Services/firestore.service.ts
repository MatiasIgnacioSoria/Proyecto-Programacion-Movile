import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }
  //creamos funcion creatDoc para ingresar coleccion a pacientes.
    creatDoc() {
    this.firestore.collection('Pacientes')
  }
  //get collection lee la informacion en la coleccion
    getCollection(){
      
      console.log('estoy por leer una coleccion');

      this.firestore.collection('Pacientes').get().subscribe( (res) =>{} );
    }


  }
