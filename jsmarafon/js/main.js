const player1 = {
    name: 'Andry',
    hp:100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['AK-47'],
    attack: function() 
    {
        console.log(this.name + 'fight')
    } 
}


const player2 = {
    name: 'Yura',
    hp:100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon:['magnum'],
    attack: function()
    {
         console.log(this.name + 'fight')
    } 
}

function createPlayer(player, objectHero ) {
    let player1 = document.createElement("div");
    player1.classList.add(player);
     
     let arenas = document.querySelector('.arenas');
      arenas.appendChild(player1);

     let progressbar = document.createElement('div');
     progressbar.classList.add('progressbar');
     player1.appendChild(progressbar);

     let character = document.createElement('div'); 
     character.classList.add('character');
     player1.appendChild(character);

     let life = document.createElement('div');
     life.classList.add('life');
     progressbar.appendChild(life);
     life.style.width = `${objectHero.hp}%`

     let name = document.createElement('div');
     name.classList.add('name');
     progressbar.appendChild(name);
     name.innerText = objectHero.name;

     let img = document.createElement('img');
     img.src = objectHero.img;
     character.appendChild(img);
}


createPlayer('player1', player1 );
createPlayer('player2', player2 );

