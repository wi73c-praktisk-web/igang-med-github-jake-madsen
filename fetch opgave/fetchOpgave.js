fetch('https://swapi.co/api/people/')
.then((response) => {
   // grib svarets indhold (body) og send det som et json objekt til næste .then()
   return response.json();
})
.then((data) => {
   // nu er json objektet lagt ind i data variablen, udskriv data
   console.log(data);
})