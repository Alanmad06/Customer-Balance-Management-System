import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{

  id: string
  cliente : Cliente ={
    Nombre: '',
    Apellido : '',
    Email : '',
    Saldo :0
  }
  
  constructor(private clienteService : ClienteService, private toastr: ToastrService ,private router : Router ,private route : ActivatedRoute){
    

  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id']
    this.clienteService.getCliente(this.id).then(cliente=>{
      this.cliente=cliente.data()!
    })

  }

  guardarCliente({value,valid} : NgForm){

    if(!valid){
      this.toastr.error('Favor de llenar los campos correctamente','',{
        timeOut:4000,
        positionClass: 'toast-top-right',
        
      })
    }else{
      value.id= this.id
      this.clienteService.modificarCliente(value)
      this.router.navigate(['/'])
      

    }

  }

  eliminarCliente(){
    if(confirm("Eliminar Cliente?")){
      this.clienteService.eliminarCliente(this.cliente)
      this.router.navigate(['/'])
    }
 
  }

}
