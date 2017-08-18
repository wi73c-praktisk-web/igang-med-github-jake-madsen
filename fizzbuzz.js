////////// FIZZBUZZ ////////////
var fizzBuzz = "FizzBuzz"
    fizz = "Fizz"
    buzz = "Buzz"
    i = 0;

for(i; i <= 50;)
    {
        if (i % 3 == 0 && i % 5 == 0)
            {
                console.log(fizzBuzz)
            }
        else if(i % 3 == 0)
            {
                console.log(fizz)
            }
        else if(i % 5 == 0)
            {
                console.log(buzz)
            }
        else
            {
                console.log(i)
            }
        i++;
    }

for(i; i <= 100;)
    {
        resultat = i % 3 == 0 && i % 5 == 0 ? console.log(fizzBuzz) : i % 3 == 0 ? console.log(fizz) : i % 5 == 0 ? console.log(buzz) : console.log(i);
        i++;
    }