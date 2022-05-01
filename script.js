const API = "https://Chat2022.irinaorlova3.repl.co"
let zina = document.querySelector('.manaZina').value;
let zinas = document.querySelector('.chataZinas');

function sutitZinu()
{
    console.log('sutitZinu() darbojas');
   let zina = document.querySelector('.manaZina');
   let zinas = document.querySelector('.chataZinas');
   
   zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;
}
async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}

setInterval(ieladetChataZinas, 1000)