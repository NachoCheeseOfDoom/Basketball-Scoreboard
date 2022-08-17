pointsHome = 0;
pointsGuest = 0;

let homePoint = document.getElementById("homePoints");
let guestPoint = document.getElementById("guestPoints");

//Home Points
function plus1Home(){
  pointsHome += 1;
  homePoint.innerHTML = pointsHome; 
}
function plus2Home(){
  pointsHome += 2;
  homePoint.innerHTML = pointsHome; 
}
function plus3Home(){
  pointsHome += 3;
  homePoint.innerHTML = pointsHome;
  
}

//-----------------------------------------------------------
//Guest Points

function plus1Guest(){
  let resultado = pointsGuest += 1;
  guestPoint.innerHTML = resultado; 
}
function plus2Guest(){
  pointsGuest += 2;
  guestPoint.innerHTML = pointsGuest; 
}
function plus3Guest(){
  pointsGuest += 3;
  guestPoint.innerHTML = pointsGuest;
}

//-----------------------------------------------------------
//Reset Scores
function ResetScore(){
  pointsHome = 0
  homePoint.innerHTML = pointsHome;
  pointsGuest = 0
  guestPoint.innerHTML = pointsGuest;
}

//-----------------------------------------------------------

