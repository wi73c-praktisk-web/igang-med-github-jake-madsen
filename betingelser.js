////////// Øvelse 1 /////////////
console.log("------ ØVELSE 1 ------");
var value = true;
/* var value = false; */

if(value = true)
    {
        console.log("Værdien er sand!");
    }
else {
    console.log("Værdien er falsk!")
}

////////// Øvelse 2 /////////////
console.log("------ ØVELSE 2 ------");

value = Math.floor(Math.random() * 11);

if( value > 5 )
    {
        console.log("Værdien er højere end 5!");
        console.log("Værdien var:", value);
        value = true;
    }
else if(value == 5)
    {
        console.log("Værdien er lig med 5!");
        console.log("Værdien var:", value);
        value = true;
    }
else
    {
        console.log("Værdien er mindre end 5!");
        console.log("Værdien var:", value);
        value = false;
    }

////////// Øvelse 3 /////////////
console.log("------ ØVELSE 3 ------");

var resultat = value ? "Ternary operator siger tallet er lig med eller større end 5" : "Ternary operator siger tallet er mindre end 5 ";

console.log(resultat);

////////// Øvelse 4 /////////////
console.log("------ ØVELSE 4 ------");

var læskedrikke = ["Cola","Faxe","Fanta","Mountain Dew"];
value = Math.floor(Math.random() * 4);
resultat = læskedrikke[value];

if(resultat == "Cola")
    {
        console.log("Yaaaay, jeg fik en", resultat);
    }
else if(resultat == "Faxe")
    {
        console.log("jeg fik en", resultat, "men det er også okay nok");
    }
else if(resultat == "Fanta")
    {
        console.log("Meeeeh, fik en", resultat, "det kunne godt havde været bedre");
    }
else
    {
        console.log("Fy for HELVEDE jeg fik en", resultat);
    }

////////// Øvelse 5 /////////////
console.log("------ ØVELSE 5 ------");

switch (resultat) {
    case "Cola":
        console.log("Yaaaay, jeg fik en", resultat);
        break;
    case "Faxe":
        console.log("jeg fik en", resultat, "men det er også okay nok");    
        break;
    case "Fanta":
        console.log("Meeeeh, fik en", resultat, "det kunne godt havde været bedre");
        break;
    case "Mountain Dew":
        console.log("Fy for HELVEDE jeg fik en", resultat);
        break;

}
