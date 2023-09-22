// 1 prendo tutti gli elementi 
// 2 creo una lista con tutte le foto (array)
// 3 creo un ciclo per generare le foto dinamicamente
// 4 creo dei trigger al click delle freccette
// 5 stabilisco le condizioni secondo le quali i bottoni spariscono

const itemsWrapper = document.querySelector('.items-wrapper');
const nextBtn = document.querySelector('.up');
const prevBtn = document.querySelector('.down');

const imgCollection = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


let imgCounter = 0;


// CICLO DELL'ES PRECENDENTE
// for(let i = 0 ; i < imgCollection.length ; i++){
//   const image = imgCollection[i];
//   itemsWrapper.innerHTML += `<img src="${image}" class="item hide" >`;
// };

for(let slide of imgCollection){
  
    console.log(imgCollection);

  
  itemsWrapper.innerHTML += `<img src="${slide.image}" alt="" class="item hide">
  <div class="didascalia item hide m-5 ">
   <h2>${slide.title}</h2>
   <p>
     ${slide.text}
   </p>
  </div>`
  }


const itemCollection = document.getElementsByClassName('item')
itemCollection[imgCounter].classList.remove('hide');



nextBtn.addEventListener('click' , function(){
  itemCollection[imgCounter].classList.add('hide');
  imgCounter++;
  itemCollection[imgCounter].classList.remove('hide');

  prevBtn.classList.remove('hide'); 
  if(imgCounter === itemCollection.length - 1){
    nextBtn.classList.add('hide');
  }
})

prevBtn.addEventListener('click' , function(){
  itemCollection[imgCounter].classList.add('hide');
  imgCounter--;
  itemCollection[imgCounter].classList.remove('hide');


  nextBtn.classList.remove('hide');

  if(imgCounter === 0){
    prevBtn.classList.add('hide');
  }
})