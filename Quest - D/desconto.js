let valor = parseFloat(prompt("Quanto voce pretende gastar na nossa loja"))
let total = valor * 0.1

if (isNaN(valor)) {

    alert("Isso nao é um numero!")

} else {

    if (valor >= 100) {

        alert("Hmmm interessante, gostei desse valor, vou ter que dar um descontinho!")
        alert("Acho que o desconto vai ser de R$" + total)

    } else {

        alert("Ok, qual vai ser a forma de pagamento")

    }

}
