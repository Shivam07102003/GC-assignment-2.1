function rps() {
var P_choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
if (P_choice !== "rock" && P_choice !== "paper" && P_choice !== "scissors") {
  alert("Invalid input. Please enter 'Rock', 'Paper', or 'Scissors'.");
  return;
}
  var Comp_choice = Math.floor(Math.random() * 3);
    if (Comp_choice === 0) {
      Comp_choice = "rock";
    } else if (Comp_choice === 1) {
      Comp_choice = "paper";
    } else {
      Comp_choice = "scissors";
    }
    
  if (Comp_choice === "rock") {
    if (P_choice === "rock") {
      alert("The computer chose rock and you chose rock...it's a tie!");
    } else if (P_choice === "paper") {
      alert("The computer chose rock and you chose paper...you win!");
    } else {
      alert("The computer chose rock and you chose scissors...you lose!");
    }
  } else if (Comp_choice === "paper") {
    if (P_choice === "rock") {
      alert("The computer chose paper and you chose rock...you lose!");
    } else if (P_choice === "paper") {
      alert("The computer chose paper and you chose paper...it's a tie!");
    } else {
      alert("The computer chose paper and you chose scissors...you win!");
    }
  } else {
    if (P_choice === "rock") {
      alert("The computer chose scissors and you chose rock...you win!");
    } else if (P_choice === "paper") {
      alert("The computer chose scissors and you chose paper...you lose!");
    } else {
      alert("The computer chose scissors and you chose scissors...it's a tie!");
    }
}
}