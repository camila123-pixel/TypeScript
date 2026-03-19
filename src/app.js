"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_js_1 = require("./usuario.js");
var serviciosusuario_js_1 = require("./serviciosusuario.js");
var servicios = new serviciosusuario_js_1.serviciosUsuario();
servicios.agregar(new usuario_js_1.Usuario(1, "Camila"));
servicios.agregar(new usuario_js_1.Usuario(2, "Maria"));
console.log(servicios.listar());
