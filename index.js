const busqueda = document.querySelector('#busqueda');
const caja = document.querySelector('.cajaNombres');
const nombres = ["Antonella","Yasmin","Malena","Euguenia","Maria"];

insertNames();
selectNames();

function insertNames(){
    nombres.forEach( n => {
        const fragment = document.createDocumentFragment();
        const parrafo = document.createElement('p');
        parrafo.textContent = n ;
        fragment.appendChild(parrafo)
        caja.appendChild(fragment)
         
    } )
}

function selectNames(){
    nombres.forEach( n => {
        const option = document.createElement('option');
        option.textContent = n ;
        busqueda.appendChild(option)
    } )
}


 busqueda.addEventListener('change', (e)=> {
    if( e.target.value === '"Todos los nombres"' ){
        caja.textContent = ""; 
        insertNames();
    }else {
        caja.textContent = "";
        const parrafo = document.createElement('p');
        parrafo.textContent = e.target.value;
        caja.appendChild(parrafo)
    }


    
 })

