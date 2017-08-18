////////// fizz,buzz ////////////
var fizz = "Fizz"
    buzz = "Buzz"
    i = 0;
    fizzAt = 3;
    buzzAt = 5;
    countTo = 100

for(i; i <= countTo; i++)
    {
        if (i % fizzAt == 0 && i % buzzAt == 0)
            {
                console.log(fizz,buzz)
            }
        else if(i % fizzAt == 0)
            {
                console.log(fizz)
            }
        else if(i % buzzAt == 0)
            {
                console.log(buzz)
            }
        else
            {
                console.log(i)
            }
    }

// for(i; i <= countTo;)
//     {
//         resultat = i % fizzAt == 0 && i % buzzAt == 0 ? console.log(fizz,buzz) : i % fizzAt == 0 ? console.log(fizz) : i % buzzAt == 0 ? console.log(buzz) : console.log(i);
//         i++;
//     }