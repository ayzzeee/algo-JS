class Pokemon {                                                                                                                 // Initialisation classe Pokemon
    constructor (name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {                                                                                                                 // Méthode isLucky pour tester si les attaques ratent ou non
        let rdmLuck = Math.random()
        return rdmLuck < this.luck                                                                                              // luck = nombre aléatoire
        }
    

    attackPokemon(enemy) {
        console.log(this.name + " attaque !")
        if (this.isLucky()) {                                                                                                   // si l'attaque touche            
            if (this.attack > enemy.defense) {                                                                                  // si l'attaque fait des dégats
                if (enemy.hp - (this.attack - enemy.defense) > 0) {                                                             // si l'attaque ne tue pas
                    console.log(enemy.name + " perd " + (this.attack - enemy.defense) + " HP")                                      
                    console.log(enemy.name + " a maintenant " + enemy.hp + " HP !")
                } else {                                                                                                        // si l'attaque tue
                    console.log(enemy.name + " perd ses " + enemy.hp + " derniers HP")
                }
                enemy.hp -= (this.attack - enemy.defense)                                                                       // enlever les HP
            }
        }
        else {                                                                                                                  // si l'attque rate
            console.log(this.name + " rate son attaque !")
        }
    }
}


let Pokemon1 = new Pokemon('Absol', Math.floor(Math.random()*20), Math.floor(Math.random()*10), 100, Math.random())             // création des pokémons selon le modèle :
let Pokemon2 = new Pokemon('Magicarpe', Math.floor(Math.random()*20), Math.floor(Math.random()*10), 50, Math.random())          // nom défini, attaque random entre 0 et 20, défense random entre 0 et 10, HP définis, luck random

while (Pokemon1.hp > 0 && Pokemon2.hp > 0) {                                                                                    // tant que les 2 pokémons sont vivants
    Pokemon1.attackPokemon(Pokemon2)                                                                                            // pokémon1 attaque Pokémon 2
    if (Pokemon2.hp == 0) {                                                                                                     // si pokémon2 est mort
       break                                                                                                                    // arrêter le combat
    } else {                                                                                                                    // si pokémon2 est toujours vivant
        Pokemon2.attackPokemon(Pokemon1)                                                                                        // pokémon2 attaque pokémon1
    }
}

if (Pokemon1.hp <= 0) {                                                                                                         // si pokémon1 est mort 
    console.log(Pokemon1.name + " n'est plus capable de se battre, " + Pokemon2.name + " a gagné !")                            // afficher la mort de pokémon1
}
else {
    console.log(Pokemon2.name + " n'est plus capable de se battre, " + Pokemon1.name + " a gagné !")                            // afficher la mort de pokémon2
}
