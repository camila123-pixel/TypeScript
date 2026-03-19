import { Usuario } from "./usuario.js"

import { serviciosUsuario } from "./serviciosusuario.js"

const servicios = new serviciosUsuario();

servicios.agregar(new Usuario(1, "Camila"));
servicios.agregar(new Usuario(2, "Maria"));

console.log(servicios.listar());

