import { Component, OnInit } from '@angular/core';
import {UsuarioService, User} from '../../SERVICES/usuario.service'
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

interface Options {
  view:string;
  value:string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

user: User ={
  id_person: '',
  number_identification:'',
  full_name:'',
  full_last_name:'',
  birthdate:'',
  sex:''
}

options : Options[] = [
  {view:"Femenino", value:"F"},
  {view:"Masculino", value:"M"}
]



  constructor(private UsuarioService:UsuarioService, 
              private router:Router, 
              private fb: FormBuilder) { 

                

              }

  ngOnInit(): void {
  }


testForm = this.fb.group({
  idPerson : [null,Validators.nullValidator],
  numberIdentification: [null,Validators.nullValidator],
  fullName: [null,Validators.nullValidator],
  fullLastName: [null,Validators.nullValidator],
  birthdate: [null,Validators.nullValidator],
  sex: [null,Validators.nullValidator]

})

agregar(){
  this.UsuarioService.addUser(this.user).subscribe()
  this.router.navigate(['/inicio'])

}
}
