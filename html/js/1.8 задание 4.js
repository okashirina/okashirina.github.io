const amountYuan = parseInt( prompt('Введите количество Юань:'));
const exchangeRate = 13;
const amountRuble = amountYuan * exchangeRate;
alert(`${amountYuan} Юань равняется ${amountRuble} Рублей`);