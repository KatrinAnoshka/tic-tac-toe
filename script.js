$(document).ready(function() {
  var user,
			computer,
			wait = false,
			one, two, three, four, five, six, seven, eight, nine;

  $(".prompt").slideDown();

  $("button").on("click", function() {

  $(".prompt").slideUp();

    user = $(this).html();

    if (user == "X") {
      computer = "O";
    } else {
      $(".cell5").html("X");
      computer = "X";
    }

  });

  $("td").on("click", function() {

    var pick = $(this).html();

    getCurrent();

    if ($(".prompt").is(":hidden") &&
      pick !== "X" &&
      pick !== "O" &&
      wait == false) {

      $(this).html(user);
      wait = true;
      setTimeout(computerTurn, 500);
    }

  });

  function computerTurn() {
    getCurrent();
    checkForTie();
    var gameOver = cpuWinAttempt();

    if (!gameOver) {
      
      if (five !== "X" && five !== "O") {
        $(".cell5").html(computer);
      }

      // Checks for top left
      else if (two == user && three == user &&
        one !== "X" && one !== "O") {
        console.log(user);
        $(".cell1").html(computer);
      } else if (four == user && seven == user &&
        one !== "X" && one !== "O") {
        console.log("hi");
        $(".cell1").html(computer);
      } else if (five == user && nine == user &&
        one !== "X" && one !== "O") {
        $(".cell1").html(computer);
      }

      // Checks for top mid
      else if (one == user && three == user &&
        two !== "X" && two !== "O") {
        $(".cell2").html(computer);
      } else if (five == user && eight == user &&
        two !== "X" && two !== "O") {
        $(".cell2").html(computer);
      }

      // Checks for top right
      else if (two == user && one == user &&
        three !== "X" && three !== "O") {
        $(".cell3").html(computer);
      } else if (six == user && nine == user &&
        three !== "X" && three !== "O") {
        $(".cell3").html(computer);
      } else if (five == user && seven == user &&
        three !== "X" && three !== "O") {
        $(".cell3").html(computer);
      }

      // Checks for mid left
      else if (five == user && six == user &&
        four !== "X" && four !== "O") {
        $(".cell4").html(computer);
      } else if (one == user && seven == user &&
        four !== "X" && four !== "O") {
        $(".cell4").html(computer);
      }

      // Checks for mid right
      else if (three == user && nine == user &&
        six !== "X" && six !== "O") {
        $(".cell6").html(computer);
      } else if (four == user && five == user &&
        six !== "X" && six !== "O") {
        $(".cell6").html(computer);
      }

      // Checks for bottom left
      else if (eight == user && nine == user &&
        seven !== "X" && seven !== "O") {
        $(".cell7").html(computer);
      } else if (one == user && four == user &&
        seven !== "X" && seven !== "O") {
        $(".cell7").html(computer);
      } else if (five == user && three == user &&
        seven !== "X" && seven !== "O") {
        $(".cell7").html(computer);
      }

      // Checks for bottom mid
      else if (two == user && five == user &&
        eight !== "X" && eight !== "O") {
        $(".cell8").html(computer);
      } else if (nine == user && seven == user &&
        eight !== "X" && eight !== "O") {
        $(".cell8").html(computer);
      }

      // Checks for winning strategy as X's by user
      else if (two == user && four == user && one !== user && one !== computer) {
        $(".cell1").html(computer);
      } else if (two == user && six == user && three !== user && three !== computer) {
        $(".cell3").html(computer);
      } else if (six == user && eight == user && nine !== user && nine !== computer) {
        $(".cell9").html(computer);
      } else if (eight == user && four == user && seven !== user && seven !== computer){
        $(".cell7").html(computer);
    }

      // Checks for bottom right
      else if (nine !== "X" && nine !== "O") {
        $(".cell9").html(computer);
      }

      // Computer makes move on first open space
      else {
        var done = false,
            i = 1;
        do {

          if ($(".cell7").html() !== "X" &&
             $(".cell7").html() !== "O"){
             $(".cell7").html(computer);
             done = true;
          }
          
          if ($(".cell" + i).html() !== "X" &&
            $(".cell" + i).html() !== "O" && !done) {

            $(".cell" + i).html(computer);
            done = true;
          }

          i++;
        } while (done == false)
      }

      wait = false;

    } else {
      setTimeout(reset, 2000);
      gameOver = false;
      wait = false;
    }

    getCurrent();
    checkForTie();
  }

  function getCurrent() {
    one = $(".cell1").html(),
      two = $(".cell2").html(),
      three = $(".cell3").html(),
      four = $(".cell4").html(),
      five = $(".cell5").html(),
      six = $(".cell6").html(),
      seven = $(".cell7").html(),
      eight = $(".cell8").html(),
      nine = $(".cell9").html();
  }

  function cpuWinAttempt() {

    // Top left horizontal win
    if (three == computer && two == computer &&
      one !== user && one !== computer) {
      $(".cell1").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".top").css("color", "#f21d27");
      return true;
    }
    // Top left vertical win
    else if (four == computer && seven == computer &&
      one !== user && one !== computer) {
      $(".cell1").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".left").css("color", "#f21d27");
      return true;
    }
    // Top left diagonal win
    else if (five == computer && nine == computer &&
      one !== user && one !== computer) {
      $(".cell1").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".diagL").css("color", "#f21d27");
      return true;
    }

    // Top mid horizontal win
    else if (three == computer && one == computer &&
      two !== user && two !== computer) {

      $(".cell2").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".top").css("color", "#f21d27");
      return true;
    }
    // Top mid vertical win
    else if (five == computer && eight == computer &&
      two !== user && two !== computer) {
      $(".cell2").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".vert").css("color", "#f21d27");
      return true;
    }

    // Top right horizontal win
    else if (one == computer && two == computer &&
      three !== user && three !== computer) {
      $(".cell3").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".top").css("color", "#f21d27");
      return true;
    }
    // Top right vertical win
    else if (six == computer && nine == computer &&
      three !== user && three !== computer) {
      $(".cell3").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".right").css("color", "#f21d27");
      return true;
    }
    // Top right diagonal win
    else if (five == computer && seven == computer &&
      three !== user && three !== computer) {
      $(".cell3").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".diagR").css("color", "#f21d27");
      return true;
    }

    // Mid left horizontal win
    else if (five == computer && six == computer &&
      four !== user && four !== computer) {
      $(".cell4").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".mid").css("color", "#f21d27");
      return true;
    }
    // Mid left vertical win
    else if (one == computer && seven == computer &&
      four !== user && four !== computer) {
      $(".cell4").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".left").css("color", "#f21d27");
      return true;
    }

    // Mid right horizontal win
    else if (four == computer && five == computer &&
      six !== user && six !== computer) {
      $(".cell6").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".mid").css("color", "#f21d27");
      return true;
    }
    // Mid right vertical win
    else if (three == computer && nine == computer &&
      six !== user && six !== computer) {
      $(".cell6").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".right").css("color", "#f21d27");
      return true;
    }

    // Bottom left horizontal win
    else if (eight == computer && nine == computer &&
      seven !== user && seven !== computer) {
      $(".cell7").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".bot").css("color", "#f21d27");
      return true;
    }
    // Bottom left vertical win
    else if (one == computer && four == computer &&
      seven !== user && seven !== computer) {
      $(".cell7").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".left").css("color", "#f21d27");
      return true;
    }
    // Bottom left diagonal win
    else if (three == computer && five == computer &&
      seven !== user && seven !== computer) {
      $(".cell7").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".diagR").css("color", "#f21d27");
      return true;
    }

    // Bottom mid horizontal win
    else if (seven == computer && nine == computer &&
      eight !== user && eight !== computer) {
      $(".cell8").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".bot").css("color", "#f21d27");
      return true;
    }
    // Bottom mid vertical win
    else if (two == computer && five == computer &&
      eight !== user && eight !== computer) {
      $(".cell8").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".vert").css("color", "#f21d27");
      return true;
    }

    // Bottom right diagonal win
    else if (one == computer && five == computer &&
            nine !== user && nine !== computer) {
      $(".cell9").html(computer);
      $(".result").html("Computer '" + computer + "' wins!").show();
      $(".diagL").css("color", "#f21d27");
      return true;
    }

  }

  function reset() {
    $("td").html("");
		$("td").css("background", "#0A2116").css("color", "white");
    $(".prompt").slideDown();
		$('.welcome').html('Play again');
    $(".result").html('Go on');
  }

  function checkForTie() {
    if ((one == "X" || one == "O") &&
      (two == "X" || two == "O") &&
      (three == "X" || three == "O") &&
      (four == "X" || four == "O") &&
      (five == "X" || five == "O") &&
      (six == "X" || six == "O") &&
      (seven == "X" || seven == "O") &&
      (eight == "X" || eight == "O") &&
      (nine == "X" || nine == "O")
    ) {

      $(".result").html("It's a tie!").show();

      setTimeout(reset, 2000);
      gameOver = false;
      wait = false;
    }
  }

});

