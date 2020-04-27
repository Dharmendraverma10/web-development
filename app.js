var scores,roundScore,activePlayer;

start();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    //Randomnumber
    var dice =  Math.floor(Math.random() * 6) + 1;
    
    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display ='block';
    diceDom.src = 'dice-'+dice+'.png';
    
    
    
    //update the results if the dice not equal to 1
    if(dice!==1){
        roundScore +=dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
        
    } else{
        //next player
        nextPlayer();
        
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  console.log(10);
  //Add current score to global score
  scores[activePlayer] += roundScore;
  
  //update ui
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
  
  //check if player won or not
  if(scores[activePlayer] >=20){
      document.querySelector('#name-'+activePlayer).textContent = '   Winner! ';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-'+activePlayer+'-panel ').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel ').classList.remove('active');
  } else {
   nextPlayer();   
  }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click',start);



function start(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
};















