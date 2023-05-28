import {writeFile} from "fs";

writeFile("citas.json", "Hello from node", (e) => {
    if (e) {
        console.log("Error: El archivo no pudo ser creado");
    } else {
        console.log("archivo creado")
    }
});