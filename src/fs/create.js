import { writeFile, stat } from 'fs/promises';
import { fileURLToPath } from 'url'
import { dirname, basename } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// console.log(__filename);
console.log(__dirname);

export const create = async () => {
    // Write your code here 

    writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young');

};

create();
