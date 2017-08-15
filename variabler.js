///var navn = prompt("Tast dit navn:  ");
///var humør = prompt("Hvordan har din dag været?:  ");
var readline = require('readline')
var navn
var humør

var tal1
var tal2
var resultat

var rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
/*
rl.question("Kunne du tænke dig at plusse 2 tal? ", function(answer)
    {
        if(answer.toUpperCase == "JA")
            {
                rl.question("Indtast første tal: ", function(answer)
                {
                    tal1 = answer;
                    rl.question("Indtast andet tal: ", function(answer)
                        {
                            tal2 = answer;
                            console.log("Her er dit resultat", resultat(resultat = tal1 + tal2))
                        }
                    );
                }
                );
            }

        Else (answer.toUpperCase == "NEJ")
        {
            rl.close();
        }
    }
);
*/
rl.question("Indtast Navn: ", function(answer) 
{
    navn = answer;
    
    rl.question("Indtast Humør: ", function(answer) 
    {
        humør = answer;

        console.log("Hey", navn, "jeg kan se din dag har været", humør)
        rl.close;
    }
    );
}
);

/// console.log("Hey", navn, "jeg kan se din dag har været", humør)