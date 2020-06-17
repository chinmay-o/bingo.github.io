
var cell = $("table#bingoTable td");

var bingo = $("table.bingo td");

var num = 1;
var box = 0;

var a = [];
var b = [];
var c = [];
var d = [];

function reset() {

  $(cell).text("")
  $("#reset").text("Reset")
  $('.alert').text("Fill in Numbers");
  $(cell).css("background-color", "white")
  $(cell).on("click", function() {

    $(this).css("background-color", "white")
    $(this).css("color", "black")
  });
  $(bingo).css("background-color", "white");
  $(bingo).css("color", "black");
  num = 1;
  box = 0;
  a = [];
  b = [];
  c = [];
  d = [];
}

function start(condition) {

  if (condition === 26){

    $("#reset").text("End")

    for (var i = 0; i < cell.length; i++){

      $(cell[i]).on("click", function() {

        $(this).css("background-color", "black")
        $(this).css("color", "white")
        winA();
        winB();
        winC();
        winD();
        winAlert()
      });
    }
  }
}

function bingoBox() {

  if ($(bingo[box]).css("background-color") !== "rgba(0, 0, 0)"){

    $(bingo[box]).css("background-color", "black");
    $(bingo[box]).css("color", "white");
    box += 1;
  }
}

function winA() {

  x = 0;

  while(x < 20){

    if ( $(cell[x]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+1]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+2]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+3]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+4]).css("background-color") === "rgb(0, 0, 0)"){

      if (a.indexOf(x) === -1) {

        a.push(x);
        bingoBox();
      }
    }

    x += 5;
  }
}

function winB() {

  y = 0;

  while(y < 5){

    if ( $(cell[y]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+5]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+10]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+15]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+20]).css("background-color") === "rgb(0, 0, 0)"){

      if (b.indexOf(y) === -1) {

        b.push(y);
        bingoBox();
      }
    }

    y += 1;
  }
}

function winC() {

  x = 0;

  if(x === 0){

    if ( $(cell[x]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+6]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+12]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+18]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+24]).css("background-color") === "rgb(0, 0, 0)"){

      if (c.indexOf(x) === -1) {

        c.push(x);
        bingoBox();
      }
    }
  }
}

function winD() {

  y = 4;

  if(y === 4){

    if ( $(cell[y]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+8]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+12]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+16]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+20]).css("background-color") === "rgb(0, 0, 0)"){

      if (d.indexOf(y) === -1) {

        d.push(y);
        bingoBox();
      }
    }
  }
}

function winAlert(){

  if (box === 5) {

    $('.alert').text("You Won");
    $("#reset").text("New Game")
  }
}

// GAME

for (var i = 0; i < cell.length; i++) {

  $(cell[i]).on("click", function() {

    var content = $(this).text()
    if ((content.length) === 0) {

      $(this).append(num);
      num += 1;
      if (num === 26){

        start(num);
        $('.alert').text("Play")
      }
    }
  });
}

$("#reset").click(function() {

  reset();
});
