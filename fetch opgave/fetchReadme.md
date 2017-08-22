# Hvad bruger vi fetch(); til?

Det skal vi finde ud af nu! :octocat:

Vores fetch() command bruges til at hente noget information andetsteds fra. 

Det kunne være en api fra en anden hjemme side. 
(Bruger klassens eksempel her)

``` javascript 
fetch('https://swapi.co/api/people/')
```

Hvad gør vi nu med den data vi har skaffet fra denne api?

Det kan jeg godt fortælle dig, vi skal bruge

``` javascript
.then((response) => 
            {
            })
                