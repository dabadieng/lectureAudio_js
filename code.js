//declaration des variables
let liste=[
    {
    "titre" : "Bruit d'une vache",
    "fichier" : "mur.mp3"
    },
    {
    "titre" : "Bruit de pas",
    "fichier" : "pas.mp3"
    },
    {
    "titre" : "Musique accoustique",
    "fichier" : "kalon.mp3" 
    }
];  

let index=0;
let monAudio=document.getElementById("monAudio");
let titrecourant=document.getElementById("titrecourant");
let listelecture=document.getElementById("listelecture");
let btprecedent=document.getElementById("btprecedent");
let btsuivant=document.getElementById("btsuivant");

//initialisation
monAudio.src=liste[index].fichier;
titrecourant.innerHTML=liste[index].titre;
for(let i=0; i<liste.length; i++) {
    let x=document.createElement("li");
    x.innerHTML=liste[i].titre;
    if (i==index)
        x.innerHTML += " +";

    listelecture.appendChild(x);
}

//Gestion des click sur boutons
btprecedent.addEventListener("click",precedent);
btsuivant.addEventListener("click",suivant);

function precedent() {
    //liste des balise li
    let lis=document.querySelectorAll("li");
    //retire le +
    lis[index].innerHTML=liste[index].titre;
    index--;
    if (index<0)
        index=liste.length-1;
    //ajoute un +
    lis[index].innerHTML=liste[index].titre + " +";
    //maj le titre courant
    titrecourant.innerHTML=liste[index].titre;
    //change le source du lecteur audio
    monAudio.src=liste[index].fichier;
    monAudio.play();
}

function suivant() {
   //liste des balise li
   let lis=document.querySelectorAll("li");
   //retire le +
   lis[index].innerHTML=liste[index].titre;
   index++;
   if (index>=liste.length)
       index=0;
   //ajoute un +
   lis[index].innerHTML=liste[index].titre + " +";
   //maj le titre courant
   titrecourant.innerHTML=liste[index].titre;
   //change le source du lecteur audio
   monAudio.src=liste[index].fichier;
   monAudio.play();
}

