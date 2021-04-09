const url = "http://localhost:4000/clientes";

// Enviar nuevos clientes
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

// Obtener todos los clientes
export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(url);
    const clientes = await resultado.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};

// Elimina el cliente seleccionado
export const eliminarCliente = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

// Obtener un cliente por su ID
export const obtenerCliente = async (id) => {
  try {
    const resultado = await fetch(`${url}/${id}`); // GET by default
    const cliente = await resultado.json();
    return cliente;
  } catch (error) {
    console.log(error);
  }
};
