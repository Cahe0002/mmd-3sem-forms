# Opgaven

I denne opgave skal du oprette en server action i en separat fil i `src/actions/action.js`.

Det betyder, at du skal lave en ny fil i `actions`-mappen, og i den fil skal du placere `"use server"` i toppen. Derefter skal du eksportere en funktion, som håndterer data fra formularen.

Se dokumentationen her for inspiration:
https://nextjs.org/docs/13/app/api-reference/functions/server-actions#with-client-components

## Instruktioner

1. Opret en ny fil (action.js) i `src/actions/`
2. Sæt `"use server"` i toppen af filen
3. Opret en server action med navnet `postRecipe`
4. Hent værdien fra input-feltet, der indeholder opskriftens navn
5. Udskriv værdien i konsollen med `console.log()`
6. Importér server actionen ind i din client-komponent (RecipeForm)
7. Knyt server actionen til formularen
8. Submit formularen og observer resultatet i terminalen

## Vigtigt

Det er vigtigt at forstå, at server actions kører på serveren. Derfor vises `console.log()`-beskeden i terminalen, ikke i browserens udviklerværktøj.

Formålet med øvelsen er, at den studerende lærer at:

- oprette en server action i en separat fil
- arbejde med `formData`
- få adgang til værdien fra et input-felt
- bruge `console.log()` til at verificere, at data bliver modtaget korrekt

Når brugeren klikker på submit:

- formularen sender data til server actionen
- server actionen læser værdien af opskriftens navn
- værdien udskrives i terminalen

Dette er første trin i at arbejde med server-side håndtering af form data i Next.js.
