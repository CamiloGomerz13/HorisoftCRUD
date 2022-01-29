import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export interface User {
  id_person:string,
  number_identification?:string,
  full_name?:string;
  full_last_name?:string;
  birthdate?:string,
  sex?:string

}


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  // Rutas

  url='/usuarios/obtenerusuarios'
  url2 = '/usuarios/borrarusuario'
  url3 = '/usuarios/crearusuario'
  url4 = '/usuarios/obtenerunusuario'
  url5 ='/usuarios/actualizarusuario'
  
  constructor(private http: HttpClient) { }

   // Método de conexión para agregar un usuario
   addUser(user:User){
    return this.http.post(this.url3,user)
  }

  //Método de conexión para listar usuarios registrados
  getUsuarios()
  {
    return this.http.get(this.url);
  }

  // Método de conexión para obtener la informacion de un usuario registrado
  getUnUsuario(id:String){
    return this.http.get(this.url4+'/'+id)
  }

  // Método de conexión para editar un usuario
  editUser(id:string, user:User){
  return this.http.put(this.url5+'/'+id, user)
  }
  
  // Método de conexión para eliminar un usuario
  deleteUser(id:string){
    return this.http.delete(this.url2+'/'+id)

  }


}

