function helloWorld()
{
    mit_id = document.getElementById("helloWorld");
    
    mit_id.innerHTML = "Hello World";
    
    console.log("JEG VIKRER")
}



function gemBruger()
{
    minBruger = 
    [
       /* forNavn */    [],
       /* efterNavn */  [],
       /* brugerNavn */ [],
       /* password */   []
    ]
    var forNavnId = document.getElementById("forNavn");
        efterNavnId = document.getElementById("efterNavn");
        brugerNavnId = document.getElementById("brugerNavn");
        passwordId = document.getElementById("password");
        passwordGentagId = document.getElementById("passwordGentag");
    
    if (passwordId == passwordGentagId)
        {

        }
    else
        {
            fejl_id = document.getElementById("fejl");
            fejl_id.innerHTML = "Fejl! Password matcher ikke";
        }
}