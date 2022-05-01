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
    let datiNoServera = await fetch('chatazinas.txt')
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}