const fs = require('node:fs') // A partir de Node 16, se recomieda poner node:

const stats = fs.statSync('./archivo.txt')


console.log(
    stats.isFile(),  // si es un fichero
    stats.isDirectory(),  // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, //tamaño en bytes
)