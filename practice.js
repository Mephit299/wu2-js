export function setupPractice (element) {
  // följande funktioner körs i ordning
  // se output i console.log()
  // du ska i varje del arbeta med att visa vad du lärt dig
  // i slutändan ska projektet köras och inte innehålla fel och
  // du ska kunna förklara vad, hur varför PM

  // Samtliga delar finns förklarade/beskrivna https://webbutveckling.jensa.dev/tekniker/javascript/
  varsAndTypes(element)
  operators(element)
  controlStructures(element)
  arraysAndObjects(element)
  domAndEvents(element)
  domManipulation(element)

}

// du kan använda kontrollstrukturer och variabler etc. i 
// andra moment än där funktionen heter så såklart
function varsAndTypes(element) {
  let nummer = 69;
  const txt = "Trevlig";
  var gratisF = true; //ska inte användas i vår kurs
  console.log(nummer, typeof(nummer))
  console.log(txt, typeof(txt))
  console.log(gratisF, typeof(gratisF))
  // kod för att visa vad du lärt dig om variabler och typer
  let varsAndTypes = 'varsAndTypes'
  console.log(varsAndTypes, typeof(varsAndTypes))
}

function operators(element) {
  for (let i = 0; i < 2; i++) {
    console.log(i === 1)
  }
  let negativNummer = 0;
  negativNummer -= 69
  console.log(negativNummer)
  console.log(negativNummer === -69)
  // kod för att visa vad du lärt dig om operatorer
  console.log('operators === ', 1 === 1)
}

function controlStructures(element) {
  let trevligt = new Array("69",'1337',`420`,404,true)
  for (let i = 0; i < trevligt.length; i++) {
    if(typeof(trevligt[i]) === typeof(i))
      console.log("På platsen " + i + " finns det ett nummer i arrayen.")
  }
  // kod för att visa vad du lärt dig om kontrollstrukturer
  // if och loopar
  let controlStructures = 'controlStructures'
  console.log(controlStructures, controlStructures ? 'if' : 'loopar')
}

function arraysAndObjects (element) {
  let pog = new Array("I","exist","i","suppose",'but',`i`, 'do',"not","know","why",`.`);
  pog.forEach(element => {
    console.log(element)   
  });

  // kod för att visa vad du lärt dig om arrays och objekt
  console.log(['arrays', {and: 'objects'}])
}

function domAndEvents (element) {
  const knapp = document.createElement("button");
  console.log(knapp)
  element.appendChild(knapp);
  let i = 0;
  knapp.textContent = 'Pog'
  knapp.addEventListener("click", (e)=>{
    i++
    if (i> 1)
    knapp.textContent = "Pog^" + i
    if(e.altKey)
      console.log(knapp.textContent)
  });
  // kod för att visa vad du lärt dig om DOM och events
  // använd med html och listeners
  console.log(element, 'lyssna efter event för att ändra element')
}

function domManipulation (element) {
  const divider = document.createElement("div")
  element.appendChild(divider)
  divider.textContent = "Se tidigare uppgift"
  divider.addEventListener("click", (e) => {
    if(e.altKey && e.ctrlKey)
      divider.remove()
    
  })
  // kod för att visa vad du lärt dig om DOM-manipulation
  // skapa element och lägga till och ta bort
  // element.textContent = 'dom manipulation, ändra och lägg till element'
}