

export const RAW_NAMES = [
    "Lucas", "Mateo", "Hugo", "Leo", "Daniel", "Alejandro", "Pablo", "Álvaro", "Adrián",
    "David", "Mario", "Enzo", "Diego", "Marcos", "Izan", "Javier", "Bruno", "Oliver",
    "Thiago", "Álex", "Carlos", "Antonio", "Manuel", "José", "Juan", "Miguel", "Pedro",
    "Samuel", "Nicolás", "Gabriel", "Gael", "Dylan", "Eric", "Sergio", "Víctor", "Martín",
    "Jorge", "Raúl", "Rubén", "Iván", "Óscar", "Héctor", "Andrés", "Joel", "Adam", "Ian",
    "Nil", "Pol", "Arnau", "Marc", "Axel", "Biel", "Jan", "Unai", "Aitor", "Iker", "Asier",
    "Gorka", "Jon", "Eneko", "Luca", "Rafael", "Alberto", "Fernando", "Gonzalo", "Jaime",
    "Ignacio", "Rodrigo", "Emilio", "Félix", "Tomás", "Agustín", "César", "Ismael",
    "Abel", "Elías", "Noah", "Aaron", "Saúl", "Guillermo", "Esteban", "Cristian",
    "Jonathan", "Kevin", "Brian", "Fran", "Jesús", "Ángel", "Santiago", "Simón",
    "Matías", "Sebastián", "Valentín", "Benjamín", "Teo", "Liam", "Max", "Dario",
    "Samuel", "Néstor", "Ramón", "Pau", "Oriol", "Aleix", "Quim", "Ferran", "Xavi",
    "Vicente", "Salvador", "Lucas", "Adolfo", "Bernardo", "Camilo", "Domingo",
    "Eugenio", "Fabián", "Leandro", "Mauricio", "Renato", "Ulises", "Víctor",
    "Walter", "Yago", "Zacarías"
]

// Mezcla Fisher-Yates (correcta y eficiente)
export const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

// Convertimos a objetos con id
export const NAMES = shuffleArray(
    RAW_NAMES.map((name, index) => ({
        id: index + 1,
        name,
    }))
)

