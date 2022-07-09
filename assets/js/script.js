// const arrow1 = document.querySelector('#arrow1');
// const menu = document.querySelector('menu');
// const hide = ()=>{
//     menu.style.display = 'none';
// }
// document.querySelector('#arrow1').addEventListener('click',hide);

const text = document.querySelector('.menu12');
const arrow1 = document.querySelector('#arrow1');

const events = () =>{
  if (arrow1.innerHTML === '<i class="fa-solid fa-angle-down text-light"></i>') {
    text.attributes[0].value = 'menu';
    arrow1.innerHTML = '<i style="color: #f0deba;" class="fa-solid fa-arrow-up"></i>'     
  }else{
    text.attributes[0].value = 'a';
    arrow1.innerHTML = '<i class="fa-solid fa-angle-down text-light"></i>'
  }
}
arrow1.addEventListener('click',events);

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

const picture1 =()=>{
   document.querySelector('#pctr1').src = 'assets/img/pctr2(2).jpg'
}
const picture2 =()=>{
    document.querySelector('#pctr1').src = 'assets/img/pctr2(1).jpg'
 }
btn1.onclick = picture1;
btn2.onclick = picture2;



const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');


const picture3 =()=>{
   document.querySelector('#pctr2').src = 'assets/img/pctr3(1).jpg'
}
const picture4 =()=>{
    document.querySelector('#pctr2').src = 'assets/img/pctr3(2).jpg'
 }
const picture5 =()=>{
    document.querySelector('#pctr2').src = 'assets/img/pctr3(3).jpg'
 }
const picture6 =()=>{
    document.querySelector('#pctr2').src = 'assets/img/pctr3(4).jpg'
 }
btn3.onclick = picture3;
btn4.onclick = picture4;
btn5.onclick = picture5;
btn6.onclick = picture6;


const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');

const picture7 =()=>{
   document.querySelector('#pctr3').src = 'assets/img/pctr6(1).jpg'
}
const picture8 =()=>{
    document.querySelector('#pctr3').src = 'assets/img/pctr6(2).jpg'
 }
btn7.onclick = picture7;
btn8.onclick = picture8;



const btn9 = document.querySelector('#btn9');
const btn10 = document.querySelector('#btn10');

const picture9 =()=>{
   document.querySelector('#pctr4').src = 'assets/img/pctr7(1).jpg'
}
const picture10 =()=>{
    document.querySelector('#pctr4').src = 'assets/img/pctr7(2).jpg'
 }
btn9.onclick = picture9;
btn10.onclick = picture10;



const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');

const picture11 =()=>{
   document.querySelector('#pctr5').src = 'assets/img/pctr8(1).jpg'
}
const picture12 =()=>{
    document.querySelector('#pctr5').src = 'assets/img/pctr8(2).jpg'
 }
btn11.onclick = picture11;
btn12.onclick = picture12;


// const modeBtn = document.querySelector('#mode');
// const header = document.querySelector('header');

// const MODE = () =>{
// if (modeBtn.innerHTML === ('DARK')) {
//     header.attributes[0].value = ('#header-2');  
//     modeBtn.innerHTML = ('LIGHT') 
// }else{
//     header.attributes[0].value = ('#header');
// }
//   }
//   modeBtn.addEventListener('click',MODE);



document.querySelector('#mode12').onclick =()=>{
    if (document.querySelector('#mode').className == 'light') {
        document.querySelector('#nav').className = 'mynav navbar navbar-black navbar-expand-lg bg-black';
        document.querySelector('#mode').className = 'dark';
        document.querySelector('#hero').className = 'dark1';
        document.querySelector('#secOne').className = 'dark2';
        document.querySelector('#secTwo').className = 'dark3';
        document.querySelector('#modeBtn').innerHTML = ('LIGHT');        
    }else{
        document.querySelector('#nav').className = 'mynav navbar navbar-light navbar-expand-lg bg-white';
        document.querySelector('#mode').className = 'light'; 
        document.querySelector('#hero').className = 'light1'; 
        document.querySelector('#secOne').className = 'light2';
        document.querySelector('#secTwo').className = 'light3';
        document.querySelector('#modeBtn').innerHTML = ('DARK');        
    }
}












