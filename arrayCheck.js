var CentralCommittee = ["Felix", "Stalin", "Lenin", "Voroshilov", "Molotov"];

var askName = prompt("Enter you`r name, please");

var upFirstSymbol = askName[0].toUpperCase();
var askNameLen = askName.length
var downSymblos = askName.slice(1, askNameLen).toLowerCase();
var fullName = upFirstSymbol + downSymblos;

var checkArray = CentralCommittee.includes(fullName);

if (checkArray == true){
    console.log("Please, go in");
}
else{
    console.log("You`r name is absent in the list");
}
