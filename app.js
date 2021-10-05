class Comprador {
  constructor(nombre, apellido, edad, dni, sexo, direccion) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.dni = dni),
      (this.sexo = sexo),
      (this.direccion = direccion);
  }

  comprar() {
    console.log("Estoy comprando");
  }

  solicitarDevolucion() {
    console.log("Necesito hacer una devolución");
  }

  consultar() {
    console.log("Tengo una consulta");
  }
}

class Vendedor {
  constructor(nombre, apellido, edad, dni, sexo, direccion) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.dni = dni),
      (this.sexo = sexo),
      (this.direccion = direccion);
  }

  vender() {
    console.log("Realicé una venta");
  }

  cargarProducto() {
    console.log("Voy a publicar un nuevo producto");
  }

  realizarDevolucion() {
    console.log("Voy a aceptar la devolución de una compra");
  }
}

let usuario1 = new Comprador(
  "Lucas",
  "Gutierrez",
  30,
  35939891,
  "masculino",
  "calle1234"
);

usuario1.comprar();
usuario1.solicitarDevolucion();
usuario1.consultar();

let vendedor1 = new Vendedor(
  "Nestor",
  "Acerbo",
  28,
  38598754,
  "masculino",
  "calle5784"
);

vendedor1.vender();
vendedor1.cargarProducto();
vendedor1.realizarDevolucion();
