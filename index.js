`use strict`

/*

 * Berisso, Paula Daniela 
 */

let discografia = [];

// Discos:
const Cargar = () => {
    let disco = {
        nombre: ``,
        autor: ``, 
        codigoNumerico: ``,
        pistas: [],
        constructor() {
            return alert(`Nuevo disco creado`);
        },
        obtenerNombre() {
             
            let alerta = false;
            do {
                if (alerta) {
                    alert(`Error, debe ingresar el nombre del disco`);
                }
                disco.nombre = prompt(`Ingrese el nombre del disco`);
               alerta = true;
            } while (!(disco.nombre === ''))  /* NO VALIDA*/ 
            alerta = false;
            

           /*
           do {
            disco.nombre = prompt(`Ingrese el nombre del disco`);
            var flagNombreDisco = true;
            if (disco.nombre === '') {
                flagNombreDisco = false;
                alert (`Error, debe ingresar el nombre del disco`);
            }

           } while (!flagNombreDisco);
           
           
            */
        },
        obtenerAutor() {
            let alerta = false;
            do {
                if (alerta) {
                    alert(`Error, debe ingresar el nombre del autor`);
                }
                disco.autor = prompt(`Ingrese el nombre del autor`);
                alerta = true;
            } while (!isNaN(disco.autor))  /* ver validacion*/
            alerta = false;      
        },
        obtenerCodigoNumerico() {
            let alerta = false;  
            do {
                if (alerta) {
                    alert(`Error, debe ingresar el codigo numerico`);
                }
                do {
                disco.codigoNumerico = parseInt(prompt(`Ingrese el código numérico (entre 1 y 999)`));
                } while (isNaN(disco.codigoNumerico));
                alerta = true;
            } while (!(disco.codigoNumerico >= 1 && disco.codigoNumerico <= 999));   
            alerta = false;    
        },
        agregarDisco() {
            discografia.push(disco)
        },
        agregarPista() {
            do {
                let pista = {
                    nombre: ``,
                    duracion: ``,
                    constructor() {
                        console.log(`nueva pista creada`);
                    }
                }
                do {
                    pista.nombre = prompt(`ingrese el nombre de la pista`);
                } while (!pista.nombre === 0) /* ACA SE DEBE VALIDAR QUE NO TENGA ESPACIO*/ 
                do {
                    pista.duracion = parseInt(prompt(`ingrese la duracion de la pista (entre 0 y 7200 s)`));
                } while (!(pista.duracion > 0 && pista.duracion <= 7200))
                disco.pistas.push(pista)
            } while (confirm(`desea ingresar otra pista`));
        },
        duracionTotal() {
            let acum = 0;
            for (let pista of this.pistas) {
                acum += pista.duracion
            }
            return acum
        },
        promedio() {
            let promedio = this.duracionTotal() / this.pistas.length;
            return promedio.toFixed(2);
        },
        mayorDuracion() {
            let cont = 0;
            let max;
            for (let pista of this.pistas) {
                cont++;
                if (cont === 1) {
                    max = pista.duracion
                } else {
                    max = pista.duracion > max ? pista.duracion : max;
                }
            }
            return max;
        },

    }
    disco.obtenerNombre();
    disco.obtenerAutor();
    disco.obtenerCodigoNumerico();
    disco.agregarPista();
    disco.agregarDisco();  
}

// Función Mostrar:
const Mostrar = () => {

    let html = ``;
    html += `<h2>Cantidad de discos: ${discografia.length}</h2>` 

    for (let disco of discografia) {
        
        html += `<p>Nombre: ${disco.nombre}</p>`
        html += `<p>Autor: ${disco.autor}</p>`
        html += `<p>Codigo Numérico: ${disco.codigoNumerico}</p>`
        html += `<p>Duracion Total: ${disco.duracionTotal()}</p>`
        html += `<p>Promedio: ${disco.promedio()}</p>`
        html += `<p>Pista de mayor duracion: ${disco.mayorDuracion()}</p>`
        html += `<p>Cantidad de pistas: ${disco.pistas.length}</p>`
        html += `<ul>`
        for (let pista of disco.pistas) {
            html += `<li class="${pista.duracion > 180 ? "pistaLarga" : ``}">Nombre: ${pista.nombre} - Duracion: ${pista.duracion}</li>`
        }
        html += `</ul>`
        html += `<br>`
    }

    document.querySelector(`#info`).innerHTML = html;

}

