////////// FIZZBUZZ ////////////

i = 0;

for(i; i <= 100;)
    {
        if (i % 3 == 0 && i % 5 == 0)
            {
                console.log("FizzBuzz")
            }
        else if(i % 3 == 0)
            {
                console.log("Fizz")
            }
        else if(i % 5 == 0)
            {
                console.log("Buzz")
            }
        else
            {
                console.log(i)
            }
        i++;
    }

// i = 0;

// for(i; i <= 100;)
//     {
//         resultat = i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") : i % 3 == 0 ? console.log("Fizz") : i % 5 == 0 ? console.log("Buzz") : console.log(i);
//         i++;
//     }