// select card information
let cvc = document.querySelector('.cvc');
let number = document.querySelector('.number');
let name = document.querySelector('.name');
let monthYear = document.querySelector('.mmyy');

const btn = document.querySelector('.button');

btn.addEventListener('click', function(m){
    m.preventDefault();

    const formCvc = document.querySelector('.form-cvc').value;
    const formNumber = document.querySelector('.form-number').value;
    const name = document.querySelector('.form-name').value;
    const month = document.querySelector('.mm').value;
    const year = document.querySelector('.yy').value;

    const nameArr = name.split(' ');
    const numberArr = formNumber.split(' ')

    if(!name){
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
    if(+month.length < 2 || +month.length > 2){
        alert('type your month');
        return;
    }
    if(+year.length < 2 || +year.length > 2){
        alert('type your year');
        return;
    }
    if(+formCvc.length > 3 || +formCvc.length < 3){
        alert('Cvc code must have 3 number');
        return;
    };
    document.querySelector('.cvc').textContent = formCvc;
    document.querySelector('.number').textContent = formNumber;
    document.querySelector('.name').textContent = name;
    document.querySelector('.mmyy').textContent = `${month}/${year}`;

})