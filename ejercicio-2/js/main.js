const tarjetas = [
    {
        titulo: "Python",
        img : "./css/images/archivo.png",
        descripcion: "Python es un lenguaje de programación de propósito general, multiparadigma y multiplataforma"
    },
    {
        titulo:"JavaScript",
        img:"./css/images/js.png",
        descripcion: "JavaScript es un lenguaje de programación de alto nivel, dinámico e interpretado"
    },
    {
        titulo:"Ruby",
        img:"./css/images/ruby.png",
        descripcion: "JavaScript es un lenguaje de programación de alto nivel, dinámico e interpretado"
    }

]

let cards = document.getElementById("cardContainer");

tarjetas.map((x)=> { 
    cards.innerHTML += `<div class="col">
    <div class="card shadow-sm">
    <h4>${x.titulo}</h4>
    <img src="${x.img}" alt="">
      <div class="card-body">
        <p class="card-text">${x.descripcion}</p>
        </div>
    </div>`;
});