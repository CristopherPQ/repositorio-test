const edadTexto = "33";
const precioTexto = "89.90";
const disponibleTexto = "true";

const edadNumero = Number(edadTexto);
const precioNumero = parseFloat(precioTexto);
const disponibleBooleano = Boolean(disponibleTexto);

console.log(`${edadNumero} -> ${typeof(edadNumero)}`);
console.log(`${precioNumero} -> ${typeof(precioNumero)}`);
console.log(`${disponibleBooleano} -> ${typeof(disponibleBooleano)}`);