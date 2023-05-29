import { writeFile, readFile } from "node:fs/promises";
import { argv } from "node:process";

//const { operacion } = require('./operaciones.js')

const [elementos] = argv.slice(2);
//console.log(elementos);

const addCita = async (elementos) => {
    try {
        const todos = JSON.parse(await readFile('citas.json'))
        await writeFile("citas.json", JSON.stringify({
            nombre: elementos, edad: 2, animal: "perrito", color: "blanco", enfermedad: "vomitos"
        }))
    } catch (error) {
        console.log(first)
    }
}

addCita(elementos)