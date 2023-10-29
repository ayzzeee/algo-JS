
alert("ui")

class Personne {                                                                                            // Initialisation de la classe (utilisation de la même classe pour le tueur et les survivants)
    constructor (nom, caracteristique, hp, probaMort, probaDegats, probaMortCombat) {                       
        this.nom = nom
        this.caracteristique = caracteristique
        this.hp = hp
        this.probaMort = probaMort
        this.probaDegats = probaDegats
        this.probaMortCombat = probaMortCombat
        this.vivant = true                                                                                  // this.vivant : permet d'éviter qu'un personnage continue d'interagir alors qu'il est mort
        this.actionRealisee = false                                                                         // this.actionRealisee : permet d'éviter qu'un personnage effectue plusieurs actions en une fois (ex : s'il a attaqué, il ne peut pas mourir pendant la même "boucle")
    }

    attaque(victime) {                                                                                      // Méthode attaque différente en fonction de la caractéristique de chaque survivant et suivant ce tableau :
        if (victime.caracteristique == 'blagueur.euse') {                                                   //    ______________________________________________________________
            if (Math.random() * 1.2 > this.probaMort) {                                                     //    |  sportif      |    probaDégats * 1.2                        |
                victime.vivant = false                                                                      //    |  nerd         |    probaDegats / 1.2                        |
                console.log(victime.nom + " se fait tuer")                                                  //    |  fêtard       |    probaMortCombat * 1.2                    |
                victime.actionRealisee = true                                                               //    |  intello      |    probaDegats * 1.5 mais dégats = 5        |
            }                                                                                               //    |  mysterieux   |    degatsMortCombat = 30                b   |
        }                                                                                                   //    |  blagueur     |    probaMort * 1.2                          |
        else if (victime.caracteristique == 'timide') {                                                     //    |  timide       |    probaMort // 1.2 et probaDegats // 1.2   |
            if (Math.random() / 1.2 > this.probaMort) {                                                     //    \____________________________________________________________/
                victime.vivant = false
                console.log(victime.nom + " se fait tuer")
                victime.actionRealisee = true
            }
        }
        else if (Math.random() > this.probaMort) {                                                          // les "Math.random()" sont les probas (aléatoires à chaque boucle) de mourir / de contre-attaquer / de mourir en attaquant, des survivants
            victime.vivant = false                                                                          // elles sont comparées aux "this.proba" du tueur
            console.log(victime.nom + " se fait tuer")
            victime.actionRealisee = true
        }

        if (victime.actionRealisee == false && victime.vivant == true) {                                    // IF supplémenataire pour éviter qu'un survivant ne fasse 2 "actions" (mourir / attaquer / mourir en attaquant) 
            if (victime.caracteristique == 'sportif.ve') {
                if (Math.random() * 1.2 > this.probaDegats) {
                    this.hp -= 10
                    console.log(victime.nom + " esquive l'attaque et inflige 10 dégats à Jason")
                    console.log("Jason a maintenant " + Tueur.hp + " HP")
                    victime.actionRealisee = true
                }
            }
            else if (victime.caracteristique == 'nerd' || victime.caracteristique == 'timide') {
                if (Math.random() / 1.2 > this.probaDegats) {
                    this.hp -= 10
                    console.log(victime.nom + " esquive l'attaque et inflige 10 dégats à Jason")
                    console.log("Jason a maintenant " + Tueur.hp + " HP")            
                    victime.actionRealisee = true
                }
            }
            else if (victime.caracteristique == 'intello') {
                this.hp -= 5
                console.log(victime.nom + " esquive l'attaque inflige 5 dégats à Jason")
                console.log("Jason a maintenant " + Tueur.hp + " HP")
                victime.actionRealisee = true                                                               
            }
            else if (Math.random() > this.probaDegats) {
                this.hp -= 10
                console.log(victime.nom + " esquive l'attaque et inflige 10 dégats à Jason")
                console.log("Jason a maintenant " + Tueur.hp + " HP")
                victime.actionRealisee = true
            }   
        
        }
        if (victime.actionRealisee == false && victime.vivant == true) {                                    // pareil
                if (victime.caracteristique == 'fetard.e') {
                if (Math.random() * 1.2 > this.probaMortCombat) {
                    this.hp -= 15
                    victime.vivant = false
                    console.log(victime.nom + " se sacrifie et inflige 15 dégats à Jason")
                    console.log("Jason a maintenant " + Tueur.hp + " HP")
                    victime.actionRealisee = true
                }
            } 
            else if (victime.caracteristique == 'mysterieux.se') {
                if (Math.random() > this.probaMortCombat) {
                    this.hp -= 30
                    victime.vivant = false
                    console.log(victime.nom + " se sacrifie et inflige 30 dégats à Jason")
                    console.log("Jason a maintenant " + Tueur.hp + " HP")
                    victime.actionRealisee = true
                }
            } 
            else if (Math.random() > this.probaMortCombat) {
                this.hp -= 15
                victime.vivant = false
                console.log(victime.nom + " se sacrifie et inflige 15 dégats à Jason")
                console.log("Jason a maintenant " + Tueur.hp + " HP")
                victime.actionRealisee = true
            }
            else {                                                                                          // si aucune action n'est possible (en raison des probas aléatoires), il ne se passe rien et la boucle recommence
                console.log("Jason attaque " + victime.nom + ", se rate, et aucun survivant ne parvient à riposter : personne ne perd de vie")
            }
        }
    }
}


let lNoms = ['Robin', 'Eden', 'Lyam', 'Amber', 'Lily', 'Diana', 'Owen', 'Abby']                                     // liste des noms possibles
let lCaracteristiques = ['sportif.ve', 'nerd', 'fetard.e', 'intello', 'timide', 'mysterieux.se', 'blagueur.euse']   // liste des caractéristiques que les survivants peuvent avoir


let Tueur = new Personne('Jason', 'tueur', 100, Math.random(), Math.random(), Math.random())                // création du tueur avec des probas aleatoires
let Survivants = []                                                                                         // création de la liste (vide) des survivants

for (let i = 0; i < 5; i++) {                                                                               // boucle FOR pour "créer" les 5 survivants :
    let nom = lNoms[Math.floor(Math.random()*lNoms.length)]                                                 // tirage aléatoire d'un nom
    let carac = lCaracteristiques[Math.floor(Math.random()*lCaracteristiques.length)]                       // tirage aléatoire d'une caractéristique

    Survivants[i] = new Personne(nom, carac, 1, Math.random(), Math.random(), Math.random())                // création du survivant dans la liste

    lNoms.splice(lNoms.indexOf(nom), 1)                                                                     // suppression du nom de la liste (pour éviter les doublons)
    lCaracteristiques.splice(lCaracteristiques.indexOf(carac), 1)                                           // suppression de la caractéristique de la liste (pareil)
}
console.log("Les survivants sont : " + Survivants[0].nom + ", " + Survivants[1].nom + ", " + Survivants[2].nom + ", " + Survivants[3].nom + " et " + Survivants[4].nom)

//console.log(Survivants)
//console.log(lNoms, lCaracteristiques)

while (Survivants.length != 0 && Tueur.hp > 0) {                                                            // boucle WHILE d'action tant qu'il y a des survivants et que le tueur n'est pas mort
    let cible = Survivants[Math.floor(Math.random()*Survivants.length)]                                     // tirage d'une cible aléatoire dans la liste Survivants                               
    Tueur.attaque(cible)
    cible.actionRealisee = false                                                                            // reset de actionRealisée pour que le personnage puisse à nouveau faire une action lors de la prochaine boucle
    if (cible.vivant == false) {
        Survivants.splice(Survivants.indexOf(cible), 1)                                                     // si la cible est morte, la supprimer de la liste Survivants
    }
}


if (Tueur.hp <= 0) {                                                                                        // si le tueur est mort
    let nomsVivants = []                                                                                    
    for (let i = 0; i < Survivants.length; i++) {                                                           
        nomsVivants.push(Survivants[i].nom)                                                                 // récupérer les noms des survivants encore vivants
    }
    if (nomsVivants > 1) {                                                                                  // afficher un message de victoire en fonction du nombre de survivants :
        let dernierSurvivant = nomsVivants.pop()
        console.log(nomsVivants.join(', ') + " et " + dernierSurvivant + " réussissent à tuer Jason !")
    } else if (nomsVivants == 1) {
        console.log(nomsVivants[0] + " réussit à tuer Jason !")
    } else {
        console.log("Dans un ultime effort, le dernier survivant parvient à tuer Jason avant de mourir")
    }
}
else {                                                                                                      // si le tueur n'est pas mort
    console.log("Tous les survivants sont morts, Jason gagne avec " + Tueur.hp + " hp")                     // afficher qu'il a gagné avec son nombre d'hp
}
