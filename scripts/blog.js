highlights = [
    {
        photo: "carro1.jpg",
        title: "Um slogan qualquer aqui"
    },


    {
        photo: "carro2.jpg",
        title: "Prazer em Dirigir"
    },

    {
        photo: "carro3.jpg",
        title: "Ofertas de Fim de ano"
    },

    {
        photo: "carro4.jpg",
        title: "Inconfundivel"
    },

    {
        photo: "carro5.jpg",
        title: "Lazer para toda família"
    }

];

var pos = 0;

function next() {

    if (pos < highlights.length - 1) {
        pos = pos + 1;
    }

    else {
        pos = 0;
    }

    return pos;
};

function activeBullet(pos) {
    document.querySelector(".active").classList.remove("active")
    var bullet = document.querySelector('[data-id="' + pos + '"]');
    bullet.classList.add("active")

}

function changeHighlight(pos) {

    var highlight = highlights[pos];

    document.getElementById("photo").src = "images/" + highlight.photo;
    document.getElementById("title").textContent = highlight.title;

    activeBullet(pos);

}

var control = setInterval(function(){changeHighlight(next())}, 2000);


var nav = document.querySelector(".site-main__highlight nav");
nav.onclick = function (event) {
    clearInterval(control);
    var pos = event.target.dataset.id;

    if (pos) {
        changeHighlight(pos);
    }

}




