var forrige = 0 
    nuvaerende = 1
    resultat = 0
    i = 0;
do
    {
        resultat = forrige + nuvaerende;
        console.log(forrige, "+", nuvaerende, "=", resultat);

        forrige = nuvaerende;
        nuvaerende = resultat;

        i++
    }

while (i <= 10)