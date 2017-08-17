////////// Øvelse 1 /////////////
// console.log("Øvelse 1")

// console.log("A")

// var person = [0,1,2]

// person = hvemErJeg(person)

// console.log(person);

// console.log("B")

// var tal = [50,25];

// calc(tal)

// ////////// Øvelse 1 - Functions /////////////
// function hvemErJeg(person)
//     {
//         var forNavn = "Jake";
//             efterNavn = "Madsen";
//             fødselsDag = "090396";
//             i = 0;

//         for(i; i<person.length; i++)
//             {
//                 if(person[i] == 0)
//                     {
//                         person[i] = forNavn;
//                     }
//                 else if (person[i] == 1)
//                     {
//                         person[i] = efterNavn;
//                     }
//                 else if (person[i] == 2)
//                     {
//                         person[i] = fødselsDag;
//                     }
//             }

//         return person;
//     }
// function calc(tal)
//     {
//         var i = 0;
//             resultat = 0;
//         calcPlus(tal,i, resultat)
//         calcMinus(tal,i, resultat)
//         calcGange(tal,i, resultat)
//         calcDivider(tal,i, resultat)
//     }
// function calcPlus(tal,i, resultat)
//     {
//         for(i; i<tal.length; i++ )
//             {
//                 resultat = resultat + tal[i]
//             }
//         console.log("resultat af plus:", resultat)
//     }
// function calcMinus(tal,i, resultat)
//     {
//         resultat = resultat + tal[i]
//         for(i++; i<tal.length; i++ )
//             {
//                 resultat = resultat - tal[i]
//             }
//         console.log("resultat af Minus:", resultat)
//     }
// function calcGange(tal,i, resultat)
//     {
//         resultat = resultat + tal[i]
//         for(i++; i<tal.length; i++ )
//             {
//                 resultat = resultat * tal[i]
//             }
//         console.log("resultat af Gange:", resultat)
//     }
// function calcDivider(tal,i, resultat)
//     {
//         resultat = resultat + tal[i]
//         for(i++; i<tal.length; i++ )
//             {
//                 resultat = resultat / tal[i]
//             }
//         console.log("resultat af Divider:", resultat)
//     }

////////// Øvelse 2 ///////////// 
// console.log("Øvelse 2 Under opbyggelse")
// var stringTest = "En god tekst generator? LoremIpsum.com er god";
//     pos = stringTest.indexOf('LoremIpsum.com')
//     lastPos = stringTest.lastIndexOf('LoremIpsum.com')
//     console.log(pos, lastPos)

////////// Øvelse 3 ///////////// 
console.log("Øvelse 3")

var specifik = 0;
    profiler = 
        [
            ["Jake","The","Brandon"],
            ["Madsen","Doctor","Cornel"],
            ["1996-03-09","0017-01-01","1982-10-22"],
        ];

printProfil(profiler);

function printProfil(profiler)
    {
        var forNavn = "";
            efterNavn = "";
            fodselsAr = "";
            alder = 0;
            i = 0;

        for(i; i < profiler[0].length; i++)
            {
                forNavn = profiler[0][i];
                efterNavn = profiler[1][i];
                fodselsAr = profiler[2][i];
                alder = udregnAlder(fodselsAr, alder)
                console.log("Fornavn:", forNavn, "Efternavn:", efterNavn, "Fødsels År:", fodselsAr, "Alder", alder)
            }
    }
function udregnAlder(fodselsAr)
    {
        var i = 0;
        var datoSplit = fodselsAr.split('-')

            dagsDato = new Date().toJSON().slice(0,10);

            dagsDato = dagsDato.split('-')

            // for (i; i < datoSplit.length; i++)
            //     {
            //         alder = dagsDato[i] - datoSplit[i]
            //     }

            alder = datoSplit[1] - dagsDato[1] 
        
        console.log(datoSplit, dagsDato)
        return alder
    }
