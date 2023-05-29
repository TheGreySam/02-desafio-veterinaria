import { writeFile, readFile } from "node:fs/promises";
import { argv } from "node:process";

//const { operacion } = require('./operaciones.js')

const elementos = argv.slice[2];
console.log(elementos);
const citas = [
    {
        nombre: "Benito",
        edad: "2 años",
        animal: "perro",
        color: "blanco",
        enfermedad: "vomitos"
    }
]

try {
    await writeFile("citas.json", JSON.stringify(citas));
    //const texto = await readFile("citas.json")
    console.log("archivo creado: ");
    //console.log(texto.toString());
    const texto = await readFile("citas.json", 'utf-8');
    //console.log(texto)
    /* JSON.parse(texto).forEach((texto) => {
        console.log(texto)
    }) */
} catch (error) {
    console.log(error);
}