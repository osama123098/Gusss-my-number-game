'use strict';

let secret_number = Math.trunc(Math.random()*20)+1;
let score = 20;
let high_score = 0;
const display_message = function(message) {
        document.querySelector('.message').textContent= message;
}

document.querySelector(".check").addEventListener('click',()=>{
        const guess=Number( document.querySelector(".guess").value)
        console.log(guess,typeof guess);
        //when the input is Null
        if(!guess){
                display_message("🚫 No Input!")
        }
        // when player is wins 
        else if(guess===secret_number){

                display_message( "🎉 Correct Number!")
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = secret_number;
                if(high_score<score){
                        high_score = score;
                        document.querySelector('.highscore').textContent = high_score;
                }
        }
        //when player is guessing
        else if(score-->0){
                document.querySelector('.score').textContent = score
                display_message(guess<secret_number?"📈 Guess is Low!":"📉 Guess is High!")
             
        }
        //when played lose the game
        else {
                display_message("🚫 You Lost!")
                document.querySelector('.score').textContent = '0'

        }
});

document.querySelector('.again').addEventListener('click', function(){
        score = 20;     
        secret_number = Math.trunc(Math.random()*20)+1;

        document.querySelector('.score').textContent = score
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        display_message('Start guessing...')
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
})
