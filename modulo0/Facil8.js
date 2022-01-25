var valorEmReal = 100

valorConvertidoEuro = (valorEmReal / 6.42).toFixed(2)
valorConvertidodolarEUA = (valorEmReal / 5.67).toFixed(2)
valorConvertidodolarCan = (valorEmReal / 4.47).toFixed(2)
valorConvertidolibra = (valorEmReal / 7.69).toFixed(2)
valorConvertidopesoAr = (valorEmReal / 0.055).toFixed(2)
valorConvertidopesoCh = (valorEmReal /0.0068).toFixed(2)

console.log("O valor convertido em euro é EUR " + valorConvertidoEuro + "\nO valor convertido em Dólar é US$ " + valorConvertidodolarEUA + "\nO valor convertido em Dólar canadense é C$ " + valorConvertidodolarCan +  "\nO valor convertido em libra é £ " + valorConvertidolibra +  "\nO valor convertido em Peso Argentino é " + valorConvertidopesoAr + "\nO valor convertido em Peso Chileno é $ " + valorConvertidopesoCh)