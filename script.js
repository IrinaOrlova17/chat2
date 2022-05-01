//console.log(2)
function sutitZinu()
{
    console.log('sutitZinu() darbojas');
   let zina = document.querySelector('.manaZina').value;
   let zinas = document.querySelector('.chataZinas');
   
   zinas.innerHTML = zinas.innerHTML + zina.value;
}