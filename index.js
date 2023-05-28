//import { writeFileSync } from 'fs';

//fs.writeFileSync("texto.txt", "soy un string en ese txt");
//writeFileSync('texto2.json', "texto del documento3")

//console.log("el archivo se creó");

import fs from "fs";

fs.writeFile("citas.json", "Hello from node", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("archivo creado")
    }
});