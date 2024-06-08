var tecla =document.querySelectorAll('button');
var baru = document.getElementById('barulho')

tecla.forEach(som =>{
    tecla.addEventListener('click',e=>{
        e.preventDefault();
        baru.src ="notas/"+tecla.dataset.nota+".mp3";
        baru.onplay();
    })
});