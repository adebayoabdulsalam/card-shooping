let openshooping = document.querySelector('.shooping');
let closeshooping = document.querySelector('.closeshooping');
let list = document.querySelector('.list');
let listCard = document.querySelector('listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document .querySelector('.quantity');

openshooping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeshooping.addEventListener('click' ,()=>{
    body.classList.remove('active');
})
 
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Screenshot (3).png',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Screenshot (1).png',
        price: 130000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Screenshot (4).png',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Screenshot (5).png',
        price: 1250000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Screenshot (6).png',
        price: 1500000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Screenshot (6).png',
        price: 160000
    },
];
let listcards = [];
function initApp(){
        products.forEach((value, key)=>{
            let newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            `;
            list.appendChild(newDiv);
        })
}
initApp();
