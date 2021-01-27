export class Usuario {

    uuid: string;
    username: string;
    email: string;
    password: string;
    foto: string;

    constructor(uuid?: string, username?: string, email?: string, password?: string, foto?: string) {
        this.uuid = uuid;
        this.username = username;
        this.email = email;
        this.password = password;
        this.foto = foto;
    }

    public ToString(): string {
        return this.uuid + ", " + this.username + ", " + this.email + ", " + this.foto;
    }


}

