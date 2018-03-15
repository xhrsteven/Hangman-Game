
var playerWin = 0;
var aiWin = 0;
var draws = 0;
var PlayerRoll;
var gamesMessage = $('#game-message');
var scoreBoard = $('#scoreboard');

//reset score
$('#reset-scores').click(function() {
    $('#wins').html('0');
    $('#draws').html('0');
    $('#losses').html('0');
})

//rock click

$('#rock').click(function(){
    PlayerRoll =1;
    var computerRoll = Math.floor(Math.random()*3 +1);

    //draw case
    if(computerRoll === PlayerRoll){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-draw">'+'Draw'+'</p>'+'<p class="computer-message">The Computer chose rock too!</p>').fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
        //rock vs paper
    } else if(PlayerRoll ===1 && computerRoll ===2){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-lose">You Lost!</p>'+'<p class="computer-message">The Computer chose paper!</p>').fadeIn(300);
            aiWin++;
            $('#losses').html('').append(aiWin);
        });
        //rock vs scissors
    } else{
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-won">You Won!</p>'+'<p class="computer-message">The Computer chose scissors!</p>').fadeIn(300);
            playerWin++;
            $('#wins').html('').append(playerWin);
        });
    }
    $("#reset-scores").click(function() {
      $("#wins").html("0");
      $("#draws").html("0");
      $("#losses").html("0");
    });
    //reset();
});

//paper click
$('#paper').click(function(){
    PlayerRoll =2;
    var computerRoll = Math.floor(Math.random()*3+1);

    //draw
    if(computerRoll ===PlayerRoll){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-draw">Draw!</p>'+'<p class="computer-message">The Computer chose paper too!</p>').fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
    //paper vs rock
    } else if(PlayerRoll ===2 && computerRoll ===1){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-won">You Won!</p>'+'<p class="computer-message">The Computer chose rock!</p>').fadeIn(300);
            playerWin++;
            $('#won').html('').append(playerWin);
        });
    //paper vs scissors
    }else{
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-lose">You Lost!</p>'+'<p class="computer-message">The Computer chose scissors!</p>').fadeIn(300);
            aiWin++;
            $('#losses').html('').append(aiWin);
        });
    }
    $("#reset-scores").click(function() {
      $("#wins").html("0");
      $("#draws").html("0");
      $("#losses").html("0");
    });
    //reset();
});

//scissors click
$('#scissors').click(function(){
    PlayerRoll =3;
    var computerRoll = Math.floor(Math.random()*3+1);
    //draw
    if(computerRoll ===PlayerRoll){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-draw">Draw!</p>'+'<p class="computer-message">The Computer chose scissors too!</p>').fadeIn(300);
            draws++;
            $('#draws').html('').append(draws);
        });
        //scissors vs paper
    }else if(PlayerRoll ===3 && computerRoll ===2){
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-won">You Won!</p>'+'<p class="computer-message">The Computer chose paper!</p>').fadeIn(300);
            playerWin++;
            $('#wins').html('').append(playerWin);
        });
        //scissors vs rock
    } else{
        gamesMessage.fadeOut(300, function(){
            gamesMessage.html('').append('<p class="game-lose">You Lost!</p>'+'<p class="computer-message">The Computer chose rock!</p>').fadeIn(300);
            console.log(gamesMessage);
            aiWin++;
            $('#losses').html('').append(aiWin);
        });
    }
    $("#reset-scores").click(function() {
      $("#wins").html("0");
      $("#draws").html("0");
      $("#losses").html("0");
    });
    //reset();
})


    // console.log(;
    // playerWin =0;
    // $('#wins').html(playerWin);
    // draws =0;
    // $('#draws').html(draws);
    // aiWin =0;
    // $('#losses').html(aiWin);    



