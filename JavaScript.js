//Dá as boas vindas ao site em um pop-up ao abrir o mesmo
alert("Welcome :3");

//Variável curtida para contador
let curtidas = 0;

//Função botão ao clicar
function curtir() {

    //Contador de curtida
    curtidas++;
    document.getElementById("likeCount").innerText = "Likes : " + curtidas;

    //Agradecer o like
    do {
        alert("Thank you for the like <3");
    }
    while (!curtidas >= 2);

    if ((curtidas == 2) && (curtidas <= 4)) {
        alert("You're Awesome!");
    } else if ((curtidas >= 5) && (curtidas < 7)) {
        alert("MiauMiau?");
    } else if ((curtidas >= 7) && (curtidas < 9)) {
        alert("MiauMiau is that you?");
    } else if (curtidas == 10) {
        alert("I knew it was you!");
    } else if (curtidas == 11) {
        alert("purrrrrrrrrrrr");
    } else if (curtidas >= 12) {
        alert("Going to sleep...ZZzz...");
    }

}





