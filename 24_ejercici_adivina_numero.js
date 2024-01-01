function adivinarNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 10 + 1);

    const numeroJugador = parseInt(
        prompt('Adivina el número secreto entre 1 y 10')
    );

    console.log(`Ingresaste el número ${numeroJugador}`);

    if (numeroJugador === numeroSecreto) {
        alert(`¡Felicidades! Ganaste. El número es ${numeroSecreto}`);
    } else {
        alert(`Incorrecto, el número es ${numeroSecreto}. ¡Inténtalo de nuevo!`);
        location.reload();
    }
}

adivinarNumeroSecreto();