
const http = require('node:http');

//la request (req) es todo lo que se esta solicitando en el url en el sitio web
//la respond es lo que responde el servidor
http.createServer((req, res)=>{

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('Hola mundo');
    res.end();
    
})
.listen( 8080 );//se especifica el puesro en donde se va a ejecutar la aplicación

console.log('Escuchando en el puerto', 8080);