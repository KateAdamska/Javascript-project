'use strict';
const email = document.querySelector('#email').value;
let btnSend = document.querySelector('.btn_send');
const warnEmail = document.querySelector('span');
let vypocetCeny = document.querySelector('.input_suma');
let carBrn;
let sum = 0;
let zaklad = 0;
let priplatek = 0;

document.querySelector('.vypocitej_sumu').addEventListener('click', function() {
    carBrn = document.querySelector('#carBrand').value;
    if (carBrn === 'mercedes') {
        zaklad = 1500000;
        sum = 1500000; 
     } else if (carBrn === 'volvo') {
        zaklad = 1200000;
        sum = 1200000; 
     } else if (carBrn === 'audi'){
        zaklad = 1350000;
        sum = 1350000; 
     } else if (carBrn === 'BMW'){
        zaklad = 1400000;
        sum = 1400000; 
     };
    if (document.querySelector('.lak').checked) {
        priplatek = (sum/100)*5
        sum += priplatek;
    } else if (document.querySelector('.barvy').checked) {
        priplatek = (sum/100)*7
        sum += priplatek;
    };

    if (document.querySelector('.kamery').checked) {
        sum += 10000;
    };
    if (document.querySelector('.kola').checked) {
        sum += 20000;
    };
    if (document.querySelector('.sedacky').checked) {
        sum += 50000;
    };
    if (document.querySelector('.tuning').checked) {
        zaklad = (zaklad/100)*20;
        sum += zaklad;
    };
    vypocetCeny.value = sum;
    console.log(carBrn);
});

document.querySelector('#castka').addEventListener('click', function() {
    const dostupnaCastka = document.querySelector('#suma').value;
    console.log(dostupnaCastka);
    document.querySelector('#castka').value = dostupnaCastka > sum ? 'Ano' : 'Ne';
});