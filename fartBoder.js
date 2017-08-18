
/////////// FARTBoDEN ////////////
console.log("Opgave - Fartboden")

var hastighedsBegreansninger = [50,80,110,130];
    hastighedsBegreansing = hastighedsBegreansninger [1]
    kortHastighed = 90;
    vejArbejde = false;
    
    bodeUdregner(kortHastighed,vejArbejde,hastighedsBegreansing);

function bodeUdregner(kortHastighed,vejArbejde,hastighedsBegreansing)
{
    var i = 0;
        bode = 0;
        straf = "";
        hastighedGraense50kmt = [[101,100,95,90,85,81,80,70,66,65,60,51],[6000,6000,5500,4500,4000,3500,3500,3000,2500,2500,1500,1000],["Ubetinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Klip i kørekort","Klip i kørekort","Klip i kørekort","Ingen Straf","Ingen Straf","Ingen Straf"]];
        hastighedGraense80kmt = [[161,160,152,150,144,140,136,129,128,112,105,104,86,81],[8000,8000,7000,6000,5500,5000,4000,3500,3500,3000,2500,2500,1500,1000],["Ubetinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Betinget frakendelse","Klip i kørekort","Klip i kørekort","Klip i kørekort","Ingen Straf","Ingen Straf","Ingen Straf"]];
        
    if (hastighedsBegreansing == 50)
        {
            hastighedGraense50kmt[0].forEach(function(element,index) 
                {
                    if(kortHastighed >= hastighedGraense50kmt[0][index] && bode == 0)
                        {
                            bode = (hastighedGraense50kmt[1][index])
                            straf = (hastighedGraense50kmt[2][index])
                        }
                }, 
            this);
        }
    else if (hastighedsBegreansing == 80)
        {
            for(i; i < hastighedGraense80kmt[0].length; i++)
                {
                    if(kortHastighed >= hastighedGraense80kmt[0][i])
                        {
                            bode = (hastighedGraense80kmt[1][i])
                            straf = (hastighedGraense80kmt[2][i])
                            break;
                        }
                }
        }
    else if (hastighedsBegreansing == 110)
        {
            
        }
    else if (hastighedsBegreansing == 130)
        {
            
        }
    

    if(vejArbejde == true)
        {
            console.log("Du har kørt for hurtigt i et område med vejarbejde, din bøde er derfor:",bode * 2,"kr")
            console.log("Følgende sker", straf)
        }
    else
        {
            console.log("Du har kørt for hurtigt, din bøde er derfor:",bode,"kr")
            console.log("Følgende sker", straf)
        }
    
   

    var hastighedGraense110kmt = 
        [
            [],
            [],
            []
        ];
    var hastighedGraense130kmt = 
        [
            [],
            [],
            []
        ];
}
    
