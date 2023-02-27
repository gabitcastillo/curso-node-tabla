const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

            
        let salida =  '';


        for(let i=1; i<=hasta; i++) {
        
        salida += `${base} * ${i} = ${base * i}\n`;
        }
            if(listar) {
                console.log('==================================='.green);
                console.log('Tabla del', colors.blue(base));
                console.log('==================================='.green);

            console.log(colors.trap(salida.trap));
            }
        
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            return(`tabla.${base}.txt`);
        
        

    } catch (err) {

        throw err;

    }
    
    
}

module.exports = {
    crearArchivo
}