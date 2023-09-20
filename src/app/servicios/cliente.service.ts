import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { Cliente } from "../modelos/cliente.model";
import { map } from "rxjs";
import { CollectionReference, DocumentReference, addDoc, deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
@Injectable()
export class ClienteService{
    
    firestore: Firestore = inject(Firestore)
    clientes: Observable<Cliente[]>
    clientesCollection : CollectionReference
    

    constructor(){
        this.clientesCollection = collection(this.firestore, 'clientes');
        this.clientes= collectionData(this.clientesCollection ,{idField: 'id'}) as Observable<Cliente[]>
        
    }

    getClientes(){
        
        return this.clientes
    }

    agregarCliente(cliente:Cliente){
        addDoc(this.clientesCollection,cliente)
    }

    async getCliente(id:string){
        let docRef= doc(this.firestore,'clientes',id)
        return await getDoc(docRef)
    }

    modificarCliente(cliente:Cliente){
        let docRef= doc(this.firestore,'clientes',cliente.id!)
        setDoc(docRef,cliente)
     
    }

    eliminarCliente(cliente:Cliente){
        let docRef= doc(this.firestore,'clientes',cliente.id!)
        deleteDoc(docRef)
    
    }

   
}