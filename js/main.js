let paragraf = document.getElementById('tekst');
let buttonAdd = document.getElementById('dodaj');
let buttonDele = document.getElementById('usun')

 document.querySelector('#dodaj').onclick = function (){
    paragraf.textContent = 'Ala ma kota'
}

document.querySelector('#usun').onclick = function (){
    paragraf.textContent = ''
}

