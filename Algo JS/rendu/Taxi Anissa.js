let musiques = ['Anissa - Wejdene', 'Perdus - Angèle', 'Navajo - Masego', 'Be Honest - Jorja Smith', 'Lonely Nights - Rilès']
let nbFeux = 1
let nbTaxis = 1
let santeMentale = 10
while (nbFeux <= 30 && santeMentale > 0) {
    let musique = musiques[Math.floor(Math.random()*musiques.length)]
    console.log("Titre joué : " + musique)
    if (musique == 'Anissa - Wejdene') {
        santeMentale -= 1
        nbTaxis += 1
        console.log("Santé mentale : " + santeMentale)
    }
    if (santeMentale == 0) {
        console.log("Santé mentale à 0... EXPLOSION")
        break
    }

    console.log((30 - nbFeux) + " feux restants")   // --> vérifier le nombre de feux rouges passés
    nbFeux += 1

}
if (santeMentale > 0) {
    console.log("Il a fallu " + nbTaxis + " taxis pour arriver à destination")
}