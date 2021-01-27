import { Usuario } from './../model/usuario';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const URLREGISTER = "http://localhost:1237/api/register";
const URLLOGAR = "http://localhost:1237/api/login";
const URLLISTA = "http://localhost:1237/api/listall";

@Injectable()
export class UsuarioService {
    
    constructor(private http: HttpClient) {
    }

    //POST
    public resgister(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`${URLREGISTER}`, usuario);
    }

    //POST
    public logar(usuario: Usuario): Observable<any> {
        return this.http.post<any>(`${URLLOGAR}`, usuario);
    }

    //GET
    public listAll(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${URLLISTA}`);
    }

}