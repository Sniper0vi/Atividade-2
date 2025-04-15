let idade = parseFloat(prompt("Me fale a sua idade!"))

if (isNaN(idade)) {

    alert("Esse algarismo nao é um numero!")

} else {

    if (idade >= 18) {

        alert("Voce é maior de idade!")

    } else {

        alert("Voce é menor de idade!")
    }
}