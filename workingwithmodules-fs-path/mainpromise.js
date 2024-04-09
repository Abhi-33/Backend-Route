import { readFile, writeFile } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("Abhishek2.txt");
console.log(a.toString());

let b = await fs.writeFile("Abhishek.txt" , "\n\n\n\nthis is amazing promise");
console.log(b);