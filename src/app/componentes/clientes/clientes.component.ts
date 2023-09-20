import { Component, ElementRef, Input, OnInit, ViewChild, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Cliente[]
  cliente : Cliente ={
    Nombre: '',
    Apellido : '',
    Email : '',
    Saldo :0
  }
  

  @ViewChild("clienteForm") clienteForm : NgForm
  @ViewChild("botonCerrar") botonCerrar : ElementRef

  

  constructor(private clienteService : ClienteService, private toastr: ToastrService){
    

  }
  ngOnInit(): void {
    

   


      this.clienteService.getClientes().subscribe(
      clientes => this.clientes=clientes)

   

  }
  getSaldoTotal(){
    let saldoTotal:number=0
    if(this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.Saldo!
        })
    }
    return saldoTotal
  }

  agregarCliente({value,valid} : NgForm): void{
    if(!valid){
      this.toastr.error('Favor de llenar los campos correctamente','',{
        timeOut:4000,
        positionClass: 'toast-top-right',
        
      })
    }else{
      this.clienteService.agregarCliente(value)
      this.clienteForm.resetForm()
      this.cerrarModal()

    }

  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }

 

}
