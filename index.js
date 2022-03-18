const busqueda = document.querySelector('.busqueda');
const busquedaImg = document.querySelector('.busqueda-img');
const caja = document.querySelector('.box');
const cajaImg = document.querySelector('.box-img');

const nombres = ["Antonella","Yasmin","Malena","Euguenia","Maria"];
const pictures = ["paisaje1.jpg","paisaje2.jpg","paisaje3.jpg","paisaje4.jpg","paisaje5.jpg","paisaje6.jpg","paisaje7.jpg"]

insertNames();
insertImages();
selectNames();
selectImages()

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

function insertImages(){
    pictures.forEach( pic => {
        const fragment = document.createDocumentFragment();
        const img = document.createElement('img');
        img.src = pic ;
         
        fragment.appendChild(img) 
        cajaImg.appendChild(fragment)  
    } ) 
}
 function selectImages(){
     pictures.forEach( pic => {
         const option = document.createElement('option');
         const fragment = document.createDocumentFragment();
         option.textContent = pic.slice(0, -4 );
         fragment.appendChild(option)
         busquedaImg.appendChild(fragment)
     } )

 }
 

 busqueda.addEventListener('change', (e)=> {
    if( e.target.value === '"Todos los nombres"' ){
         
        insertNames();
    }else {
        caja.textContent = "";
        const parrafo = document.createElement('p');
        parrafo.textContent = e.target.value;
        caja.appendChild(parrafo)
    }
 })

 busquedaImg.addEventListener('change',(e) => {
     if( e.target.value === '"Todas las imagenes"' ){
         insertImages()
     }else {
        cajaImg.textContent = ""; 
        const img = document.createElement('img');
        img.src = e.target.value + ".jpg"

        cajaImg.appendChild(img)
     }
     
 })
