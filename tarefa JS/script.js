let maisAlto = 0;
let menosAlto = Infinity;
let totalAlturaHomem = 0;
let totalMulher = 0;
let totalHomem = 0;


for (let i = 1; i <= 15; i++) {
    const altura = parseInt(prompt(`Digite altura da pessoa ${i}:`));
    const sexo = prompt(`Digite o sexo da pessoa ${i} (M/F):`).toUpperCase();


    if (altura > maisAlto) {
        maisAlto = altura;
    }
    if (altura < menosAlto) {
        menosAlto = altura;
    }


    if (sexo === 'M') {
        totalAlturaHomem += altura;
        totalHomem++;
    } else {
        totalMulher++;
    }
}


const mediaAlturaHomem = totalAlturaHomem / totalHomem;


console.log(`O maior tem: ${maisAlto}`);
console.log(`O menor tem: ${menosAlto}`);
console.log(`A média de altura é: ${mediaAlturaHomem}`);
console.log(`O número de mulheres é: ${totalMulher}`)