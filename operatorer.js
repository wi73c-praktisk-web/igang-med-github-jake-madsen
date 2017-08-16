////////// Øvelse 1 /////////////
console.log("------ ØVELSE 1 ------");

x = 100;
y = 20;

console.log(x, "+", y,"=", x + y);
console.log(x, "-", y,"=", x - y);
console.log(x, "*", y,"=", x * y);
console.log(x, "/", y,"=", x / y);
console.log(x, "%", y,"=", x % y);
x++
y--
console.log("x++ =", x);
console.log("y-- =", y);

////////// Øvelse 2 /////////////
console.log("------ ØVELSE 2 ------");

x = 10;
y = 3;

console.log(x, "+", y,"=", x += y);
console.log(x, "-", y,"=", x -= y);
console.log(x, "*", y,"=", x *= y);
console.log(x, "/", y,"=", x /= y);
console.log(x, "%", y,"=", x %= y);

////////// Øvelse 3 og 4 /////////////
console.log("------ ØVELSE 3 OG 4 ------");

x = 10;
y = 2;

if(x ==  10 && y == 2)
    {
        console.log("Begge statements er korrekte");
    }
else if (x == 10 || y == 2)
    {
        console.log("Et statement var korrekt");
    }
else 
    {
        console.log("Ingen statements var korrekte")
    }