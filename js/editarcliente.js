import { obtenerCliente } from "./API.js";

(function () {
  // Campos del formulario
  const nombreInupt = document.querySelector("#nombre");
  const emailInupt = document.querySelector("#email");
  const empresaInupt = document.querySelector("#empresa");
  const telefonoInupt = document.querySelector("#telefono");
  const idInupt = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt(parametrosURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInupt.value = nombre;
    emailInupt.value = email;
    empresaInupt.value = empresa;
    telefonoInupt.value = telefono;
    idInupt.value = id;
  }
})();
