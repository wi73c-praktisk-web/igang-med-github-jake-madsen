function getStarWarsApi(isClicked)
{
    var starwarsPersonArray = [];
        mit_id = document.getElementById("arrayId");
        mit_id.innerHTML = "";
        forNavn = "";
        kon = "";
        fodselsAr = "";



    fetch('https://swapi.co/api/people/')
        .then((response) => 
            {   
                if(!response.ok) // Hvis response ikke er gået igennem, stop funktion og smid fejl til catch
                    {
                        throw Error(response.statusText);
                    }
                return response.json();
            })
        .then((data) => 
            {
                starwarsPersonArray = data.results
                // console.log(starwarsPersonArray)

                starwarsPersonArray.forEach(function(element, index)
                    {
                        forNavn = starwarsPersonArray[index].name;
                        kon = starwarsPersonArray[index].gender;
                        fodselsAr = starwarsPersonArray[index].birth_year;

                        mit_id.innerHTML += "<li>" + "Fornavn: " + forNavn + " Køn: " +  kon + " Fødsels År: " + fodselsAr + "</li>";
                        // console.log("Fornavn:", forNavn, "Køn:", kon, "Fødsels År:", fodselsAr,)
                    }, 
                this);
            })
        .catch((error) =>   
            {
                mit_id.innerHTML = "Der skete en fejl: " + error;
                console.log(error)
            });
    
        
    
    document.getElementById("hent_knap").style.visibility = "hidden";
    isClicked = true;

        
}