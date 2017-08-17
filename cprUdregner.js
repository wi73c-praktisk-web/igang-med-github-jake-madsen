tjek = [4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
input = "0412971418";
cprNr = [0,0,0,0,0,0,0,0,0,0];
res = [0,0,0,0,0,0,0,0,0,0];
sum = 0;
i = 0;
result = false;

if(input.length == 10)
    {
        result = parseCprNr();           

        if(result == true)
            {
                console.log("Dit CPR nr. er ægte:", cprNr)
            }
        else
            {
                console.log("Dit CPR nr. er falsk", input)     
            }
    }
else
    {
        console.log("Fejl dit cpr nummer er for langt eller kort?:", input)
    }

function parseCprNr ()
    {
        console.log("Vi kom ind i parseCprNr");
        i = 0;

        for(i; i<cprNr.length; i++) 
            {
            if (isNaN(input[i]) == true)
                    {
                        console.log("Der er forkerte symboler i dit cpr nr", input[i]);
                        result = false;
                        break;
                    }
                cprNr[i] = parseInt(input[i], 10);
                
            }
            result = sumUdregner();
        return result;
    }


function sumUdregner ()
    {
        i = 0;
        console.log("Vi kom ind i sumUdregner");
        for(i; i<tjek.length; i++)
            {
                res[i] = cprNr[i] * tjek[i];
                sum = sum + res[i];
                // console.log(sum)
            }

            if(sum % 11 == 0)
                {
                    result = true;
                }
            else
                {
                    result = false
                }

            return result;
    }