import { UsuarioService } from './../service/usuario-service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = "";
  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  constructor(private service: UsuarioService) {
  }

  ngOnInit() {
    this.listar();
  }

  public cadastrar() {
    this.service.resgister(this.usuario).subscribe(res => {
      if (res == null) {
        console.log("erro na gravacao");
      }

      console.log("gravou")
      this.msg = "gravados os dados" + res;
      this.usuario = new Usuario();
      this.listar();

    }, error => {
      console.log('nao gravou');
      this.msg = 'erro na gravacao' + error;
    });
  }
  public listar() {
    this.service.listAll().subscribe(res => {
      this.usuarios = res;
    });
  }

}
