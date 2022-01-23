## Voorwaarden

Naast de voorwaarden die de training zelf voorschrijft moet je een aantal basis concepten van React die in de vorige opdrachten behandeld hebben begrepen:

- Wat is een React component
- Wat zijn React component props
- Wat zijn React component state
- Wat zijn React hooks
- Dat een React component een lifecycle heeft

## Benodigdheden (Opdracht specifiek)

- Repository from Github (Classroom) **react-use-effect-and-use-layout-effect**

## Startpunt

… bestaande component die wat props binnen krijgt en state bevat

## Voorbereiding

Trainer:

- Iedereen toegang geven tot de opdracht via Github classroom
- Uitgebreide uitleg geven over useEffect en component lifecycle
- Eventueel sheet, video&#39;s en ander begeleidend materiaal beschikbaar stellen

Deelnemer:

- Repository downloaden
- &#39;npm install&#39; uitvoeren en controleren of het werkt met &#39;npm start&#39;
- Eventueel voorgaande opdrachten bekijken
- Code die al in de repository zit bekijken
- Begeleidend materiaal binnenhalen

## Leerdoel

Leren wat een React component lifecycle is, wat het belang van de useEffect en useLayoutEffect hooks daarin zijn en hoe je die kunt gebruiken en waarvoor.

Kort oude lifecycle methodes gezien (didMount, didUpdate, and willUnmount) maar daarna ook weer vergeten 

## Korte omschrijving

We hebben gezien hoe de &#39;signature&#39; van een component eruit ziet: Een component is een functie / class die props ontvangt en een react/jsx element returned. Daarnaast heeft een component een zogenaamde lifecycle (mount, update, unmount) en een functie waarmee je kan inhaken (vandaar hook) op specifieke momenten in die lifecycle en daarmee &#39;side-effects&#39; kunt uitvoeren (vandaar use **Effect** ).

Side-effects zijn acties die niet in de &#39;normale topdown render flow&#39; van de React component passen of uitgevoerd kunnen worden. Hierbij kun je b.v. denken aan iets simpels als het aanpassen van de document.title (tekst in browser tabblad), maar ook asynchrone calls naar de server om data op te halen, een timer instellen om een actie later uit te voeren of een andere belangrijke: een actie uitvoeren omdat/nadat de state van een component is veranderd. React heeft daarvoor twee hooks, useEffect en useLayoutEffect die allebei hetzelfde werken en dezelfde signature hebben maar op een net iets ander moment worden aangeroepen en daarom voor verschillende zaken gebruikt worden.

&quot;_Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run._ _That&#39;s the sole purpose of useEffect()_&quot;

_Note: je kunt meerdere useEffect en useLayoutEffect hooks gebruiken in een component._

_Reminder: Als je state kunt berekenen op basis van andere props of state dan hoort het geen state te zijn._

## Eindresultaat

Aan het einde van de opdracht hebben we de useEffect en useLayoutEffect verschillende keren gebruikt om de volgende &#39;side-effects&#39; uit te voeren:

- Actie uitvoeren wanneer de component is geïnitialiseerd / gemount
- Reageren op het feit dat er iets is veranderd in de props die we binnen krijgen
- Lokale state veranderen op basis van een verandering in andere lokale state
- Code vertraagd uitvoeren (asynchroone) met een timeout EN deze weer opruimen
- De DOM updaten buiten React om

## Libraries

- React

## Begeleidend materiaal

- Component lifecycle diagram van een class component
- useEffect diagram

## Links

- [https://dmitripavlutin.com/react-useeffect-explanation/](https://dmitripavlutin.com/react-useeffect-explanation/)
- [https://blog.bhanuteja.dev/the-lifecycle-of-react-hooks-component](https://blog.bhanuteja.dev/the-lifecycle-of-react-hooks-component)
- [https://kentcdodds.com/blog/useeffect-vs-uselayouteffect](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
- [https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect](https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect)
- [https://melvingeorge.me/blog/focus-input-tag-using-hooks-reactjs](https://melvingeorge.me/blog/focus-input-tag-using-hooks-reactjs)
