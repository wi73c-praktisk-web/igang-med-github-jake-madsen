/////////// BMI Udregner ////////////
console.log("Opgave - BMI Udregner");

var højde = 193;
    vægt = 70;
    bmi = bmiUdregner(højde,vægt)

function bmiUdregner(højde,vægt)
    {
        bmi = (vægt / højde / højde) * 10000;

        if(bmi < 18.5)
            {
                console.log("Din BMI er:", bmi, "Det betyder du er undervægtig")
            }
        else if (bmi > 18.5 && bmi < 24.9)
            {
                console.log("Din BMI er:", bmi, "Det betyder du er normalvægtig")
            }
        else if (bmi > 25 && bmi < 29.9)
            {
                console.log("Din BMI er:", bmi, "Det betyder du er overvægtig")
            }
        else if (bmi > 30 && bmi < 39.9)
            {
                console.log("Din BMI er:", bmi, "Det betyder du er meget overvægtig")
            }
        else
            {
                console.log("Din BMI er:", bmi, "Det betyder du er ekstremt overvægtig")
            }
    }

/////////// FARTBØDEN ////////////
console.log("Opgave - Fartbøden")