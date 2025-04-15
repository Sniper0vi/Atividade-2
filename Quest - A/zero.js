let num = parseInt(prompt("Me fale um numero, qualquer um"));

if (isNaN(num)) {

    alert("Nao é valido!")

} else {
    if (num > 0) {

        alert("O seu numero é positivo")

    } else {

        if (num == 0) {

            alert("O seu numero é igual a zero");

        } else {

            alert("O seu numero é negativo");
        }
    }
}