let btn1=document.querySelector('.account-btn');
let account1=document.querySelector('.account');
let inaccount1=document.querySelector('.in-account');
let account1bg = document.querySelector('.account-img');
btn1.addEventListener('click', () => {
    if(account1.style.display== 'none') {
        account1.style.display='grid';
        account1bg.style.display='none';
        inaccount1.style.height='300px';
    }
    else {
        account1.style.display='none';
        account1bg.style.display='';
        inaccount1.style.height='600px';
    }
});

let btn2=document.querySelector('.galerry-btn');
let account2=document.querySelector('.galerry');
let inaccount2=document.querySelector('.in-galerry');
btn2.addEventListener('click', () => {
    if(account2.style.display== 'none') {
        account2.style.display='grid';
        inaccount2.style.height='300px';
    }
    else {
        account2.style.display='none';
        inaccount2.style.height='600px';
    }
});


let btn3=document.querySelector('.service-btn');
let service=document.querySelector('.service');
let inservice=document.querySelector('.in-service');
let service1bg = document.querySelector('.service-img');
btn3.addEventListener('click', () => {
    if(service.style.display== 'none') {
        service.style.display='grid';
        service1bg.style.display='none';
        inservice.style.height='300px';
    }
    else {
        service.style.display='none';
        service1bg.style.display='';
        inservice.style.height='600px';
    }
});