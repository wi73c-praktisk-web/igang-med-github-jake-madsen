////////// Øvelse 1 /////////////
console.log("------ ØVELSE 1 ------");

personer = ["Rachel","Shaun","Ajay","Selena","Payton","Dan","Adele","Murray"];

personer.forEach(function(person) 
{
    console.log(person);
});

////////// Øvelse 2 /////////////
console.log("------ ØVELSE 2 ------");
i = 0;
personer.forEach(function(person) 
{
    console.log(person, "position i array", i);
    i++;
});

////////// Øvelse 3 /////////////
console.log("------ ØVELSE 3 ------");

talRækker = [1, 10, 5, 25, 20, 45, 35, 50, 15, 5];
// talRækker = [1];

// var antal = talRækker.length;
// console.log("længden af array",antal)

// var test = talRækker[30];

// console.log(test);

i = 0;
talRækker.forEach(function(talRække)
{
    /// Nuværende position ///
    tal = talRækker[i]
    /// Findes næste position? ///
    if(typeof talRækker[i+1] == 'undefined')
        {
            console.log("Færdig")
            
        }
    
    else {

        if(tal > talRækker[i+1])
            {
                console.log("Større");
            }
        else if (tal < talRækker[i+1])
            {
                console.log("Mindre");
            }
        else
            {
                console.log("Gik ikke ind i if or else if");
            }
        }
    i++;

});