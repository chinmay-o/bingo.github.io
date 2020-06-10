
var cell = $("table#bingoTable td")

var num = 1;

function numbers(cellNumber){


}

function reset() {

  $(cell).text("")
  $(cell).css("background-color", "white")
  $(cell).on("click", function() {

    $(this).css("background-color", "white")
    $(this).css("color", "black")
  });
  num = 1;
}

function start(condition) {

  if (condition === 26){

    for (var i = 0; i < cell.length; i++){

      $(cell[i]).on("click", function() {

        $(this).css("background-color", "black")
        $(this).css("color", "white")
      });
    }
  }
}

function activateStart(){

  $("#start").removeClass("disabled");
}

function win() {

  x = 0;
  y = 0;
  zA = 0;
  zB = 0;

  while(x < 20){

    if ( $(cell[x]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+1]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+2]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+3]).css("background-color") === "rgb(0, 0, 0)" && $(cell[x+4]).css("background-color") === "rgb(0, 0, 0)"){

      console.log("1 Horizontal Line");
    }

    x += 5;
  }

  while(y < 4){

    if ( $(cell[y]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+5]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+10]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+15]).css("background-color") === "rgb(0, 0, 0)" && $(cell[y+20].css("background-color") === "rgb(0, 0, 0)")){

      console.log("1 Vertical Line");
    }

    y += 1;
  }

  while(zA < 2){

    if ( $(cell[zA]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zA+6]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zA+12]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zA+18]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zA+24].css("background-color") === "rgb(0, 0, 0)")){

      console.log("1A Dioganal Line");
    }
  }

  while(zB < 6){

    if ( $(cell[zB+4]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zB+8]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zB+12]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zB+16]).css("background-color") === "rgb(0, 0, 0)" && $(cell[zB+20].css("background-color") === "rgb(0, 0, 0)")){

      console.log("1B Dioganal Line");
    }
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

        activateStart();
      }
    }
  });
}

$("#start").click(function() {

  start(num);
});

$("#reset").click(function() {

  reset();
});

setInterval("win()", 1000);
