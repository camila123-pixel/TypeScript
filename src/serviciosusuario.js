"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosUsuario = void 0;
var serviciosUsuario = /** @class */ (function () {
    function serviciosUsuario() {
        this.usuarios = [];
    }
    serviciosUsuario.prototype.agregar = function (usuario) {
        this.usuarios.push(usuario);
    };
    serviciosUsuario.prototype.listar = function () {
        return this.usuarios;
    };
    return serviciosUsuario;
}());
exports.serviciosUsuario = serviciosUsuario;
