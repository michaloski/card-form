let cvc = document.querySelector('.cvc');
let number = document.querySelector('.number');
let nameCard = document.querySelector('.name'); 
let mmyy = document.querySelector('.mmyy');

const btn = document.querySelector('.button');
btn.addEventListener('click', function(m){
    m.preventDefault();

    let formCvc = document.querySelector('.form-cvc');
    let formNumber = document.querySelector('.form-number');
    let name = document.querySelector('.form-name');
    let month = document.querySelector('.mm');
    let year = document.querySelector('.yy');

    const nameArr = name.value.split(' ');
    const numberArr = formNumber.value.split(' ')

    if(!name.value){
        alert('Type your name');
        return;
    }
    if(nameArr.length < 2){
        alert('type your name and surrname');
        return;
    }
    if(numberArr.length < 4){
        alert('Type all numbers');
        return;
    }

    if(numberArr[0].length < 4 || numberArr[1].length < 4 || numberArr[2].length < 4 || numberArr[3].length < 4){
        alert('type all numbers');
        return;
    }
    if(+month.value.length < 2 || +month.value.length > 2){
        alert('type your month');
        return;
    }
    if(+year.value.length < 2 || +year.value.length > 2){
        alert('type your year');
        return;
    }
    if(+formCvc.value.length > 3 || +formCvc.value.length < 3){
        alert('Cvc code must have 3 number');
        return;
    };
    cvc.textContent = formCvc.value;
    number.textContent = formNumber.value;
    nameCard.textContent = name.value;
    mmyy.textContent = `${month.value}/${year.value}`;

    formCvc.value = '';
    formNumber.value = '';
    name.value ='';
    month.value ='';
    year.value = '';
})