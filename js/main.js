
import { getData } from "./modules/dataMiner.js";
//imports always go at the top the file
//this is called a IIFE

(() => {

  // homepage
  let targetText = document.querySelector('#dynamic'),
      noLanding = document.querySelector('.header');

  function noLandingPage() {
    noLanding.classList.add('home');
  }

  noLanding.addEventListener('click', noLandingPage);

  // popover
  function randomString() {
    let stringArr = [ 'soccer', 'film direction', 'design'],
        selectString = stringArr[Math.floor(Math.random() * stringArr.length)],
        selectStringArr = selectString.split('');

    return selectStringArr;
  }

 

  let theSongs = document.querySelector('#love-section'),
      theTemplate = document.querySelector('#bio-template').content,
      faveData;

  function buildThings(data) {

    faveData = data;

    const things = Object.keys(data);
    // Object.keys creats an array

    things.forEach (thing => {

      let panel = theTemplate.cloneNode(true);
      let containers = panel.firstElementChild.children;

      containers[0].querySelector('img').src= `images/${data[thing].pict}`;
      containers[0].querySelector('img').id = thing;
      containers[0].querySelector('img').addEventListener("click", showThing);

      containers[1].textContent = data[thing].title;
      containers[2].textContent = data[thing].singer;
      containers[3].textContent = data[thing].description;

      theSongs.appendChild(panel);
    })

  }

  function showThing() {

    let currentThing = faveData[this.id]; 
    // this retrieves the object that matches the key we saved

  }

  getData(`./data.json`, buildThings);

  window.onload = function() {
    function onClick() {
      document.querySelector('.popover').style.display = 'block';
    }

    function offClick() {
      document.querySelector('.popover').style.display = 'none';
    }

    document.querySelector('.button').addEventListener('click', onClick);
    document.querySelector('.btn_close').addEventListener('click', offClick);
  }


})();