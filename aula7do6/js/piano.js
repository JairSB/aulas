var tecla =document.querySelectorAll('button');

tecla.forEach(som =>{
    tecla.addEventListener('click',e=>{
        e.preventDefault();
    })
});