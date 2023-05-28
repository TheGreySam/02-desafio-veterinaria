/* import {writeFile} from "fs";

writeFile("citas.json", "Hello from node", (e) => {
    if (e) {
        console.log("Error: El archivo no pudo ser creado");
    } else {
        console.log("archivo creado")
    }
}); */

import { writeFile, readFile } from "node:fs/promises";

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
    const texto = await readFile("citas.json")
    console.log("archivo creado: ", texto.toString());
} catch (error) {
    console.log(error);
}