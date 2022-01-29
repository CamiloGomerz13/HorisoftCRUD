import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioService, User} from '../../SERVICES/usuario.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarUsuarios: User[] | undefined;

  constructor(private UsuarioService:UsuarioService, 
              private router:Router) {
                
                this.refresh();
   }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  refresh(){
    this.router.navigate(['/inicio'])
  }

listarUsuarios(){
  this.UsuarioService.getUsuarios().subscribe(
    res=> {console.log(res)
      this.ListarUsuarios=<any>res;
    },
    err => console.log(err)
  );
}

eliminar(id:string)
{
  this.UsuarioService.deleteUser(id).subscribe(
    res=>{
      this.listarUsuarios();
    },
    err=> console.log(err)
    );
}

modificar(id:string){
  this.router.navigate(['/edit/'+id]);
}

}
