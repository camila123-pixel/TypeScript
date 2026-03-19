import{ Usuario } from "./usuario.js"
export class serviciosUsuario{
    private usuarios: Usuario[] = [];
    agregar(usuario: Usuario){
        this.usuarios.push(usuario);
    }
    listar(): Usuario[] {
        return this.usuarios;
    }
}