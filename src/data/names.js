/* =============================
   NOMBRES CLÁSICOS
============================= */
const CLASSIC_NAMES = [
    "Lucas", "Mateo", "Hugo", "Leo", "Daniel", "Alejandro", "Pablo", "Álvaro", "Adrián",
    "David", "Mario", "Enzo", "Diego", "Marcos", "Izan", "Javier", "Bruno", "Oliver",
    "Thiago", "Álex", "Carlos", "Antonio", "Manuel", "José", "Juan", "Miguel", "Pedro",
    "Samuel", "Nicolás", "Gabriel", "Gael", "Dylan", "Eric", "Sergio", "Víctor", "Martín",
    "Jorge", "Raúl", "Rubén", "Iván", "Óscar", "Héctor", "Andrés", "Joel", "Ian",
    "Nil", "Pol", "Arnau", "Marc", "Axel", "Biel", "Jan", "Unai", "Aitor", "Iker", "Asier",
    "Gorka", "Jon", "Eneko", "Luca", "Rafael", "Alberto", "Fernando", "Gonzalo", "Jaime",
    "Ignacio", "Rodrigo", "Emilio", "Tomás", "Agustín", "César", "Ismael",
    "Abel", "Elías", "Noah", "Aaron", "Saúl", "Guillermo", "Esteban", "Cristian",
    "Kevin", "Brian", "Jesús", "Ángel", "Santiago", "Simón",
    "Matías", "Sebastián", "Valentín", "Benjamín", "Teo", "Liam", "Max", "Darío",
    "Néstor", "Ramón", "Pau", "Oriol", "Aleix", "Quim", "Ferran", "Xavi",
    "Vicente", "Salvador", "Bernardo", "Camilo", "Leandro", "Mauricio", "Renato",
    "Ulises", "Yago", "Alonso", "Bautista", "Ciro", "Conrado", "Damián",
    "Eloy", "Emiliano", "Enrique", "Federico", "Fermín", "Gaspar", "Genaro",
    "Gerardo", "Germán", "Gregorio", "Horacio", "Humberto", "Isidoro",
    "Jacinto", "Jerónimo", "Josué", "Julián", "Leonardo", "Lisandro",
    "Luciano", "Octavio", "Orlando", "Pascual", "Sancho", "Teodoro",
    "Tobías", "Tristán", "Valerio", "Vidal", "Virgilio"
]


/* =============================
   NOMBRES MODERNOS / TRENDY
============================= */
const MODERN_NAMES = [
    "Axel", "Kai", "Milo", "Enzo", "Nico", "Eli", "Aron", "Rayan", "Ciro",
    "Bastian", "Elian", "Lucio", "Kairo", "Orion", "Leon", "Dante",
    "Ezio", "Neo", "Elio", "Timo", "Ronan", "Xander", "Aiden",
    "Cruz", "Dario", "Fabian", "Magnus", "Niko", "Odin",
    "Wesley", "Xavi", "Yanis", "Felix", "Milan", "Jasper",
    "Remy", "Pax", "Sawyer", "Ulises", "Vito",
    "Brais", "Breogán", "Eder", "Egoi", "Ekaitz", "Eñaut", "Gaizka",
    "Hodei", "Iago", "Ibai", "Imanol", "Iñaki", "Iñigo", "Julen",
    "Kepa", "Lander", "Markel", "Miquel", "Oier", "Oihan",
    "Peio", "Roc", "Roi", "Sergi", "Urko", "Xabier"
]

/* =============================
   NOMBRES NOVEDOSOS / INTERNACIONALES
============================= */
const NOVEL_NAMES = [
    "Arlo", "Caspian", "Falco", "Kael", "Tobias", "Viggo", "Yanis",
    "Alaric", "Drake", "Eldon", "Griffin", "Harlan", "Lucien",
    "Nikolai", "Phineas", "Sylas", "Valerian", "Wilder",
    "Stellan", "Uriah", "Vincenzo", "Amias", "Calix",
    "Darwin", "Evren", "Lucan", "Neo", "Oren", "Soren"
]

/* =============================
   MEZCLAMOS Y CREAMOS ARRAY FINAL
============================= */
const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

/* =============================
   NOMBRES CLÁSICOS - NIÑAS
============================= */
const CLASSIC_NAMES_GIRLS = [
    "María", "Carmen", "Isabel", "Rosa", "Antonia", "Dolores",
    "Violeta", "Aurora", "Teresa", "Valentina", "Lucía", "Martina",
    "Eloísa", "Eugenia", "Fátima", "Florencia", "Gabriela",
    "Helena", "Hortensia", "Abigaíl", "Ada", "Adelaida",
    "Adele", "Adelina"
]

/* =============================
   NOMBRES MODERNOS - NIÑAS
============================= */
const MODERN_NAMES_GIRLS = [
    "Sofía", "Emma", "Olivia", "Mia", "Isabella", "Amelia",
    "Camila", "Aria", "Luna", "Sara", "Valentina", "Aurora",
    "Stella", "Emilia", "Iris", "Vera", "Noa", "Clara",
    "Aitana", "Laia", "Nora", "Blanca", "Julia", "Carlota",
    "Elena", "Inés", "Alba", "Mara", "Lía"
]

/* =============================
   NOMBRES NOVEDOSOS - NIÑAS
============================= */
const NOVEL_NAMES_GIRLS = [
    "Arya", "Athena", "Adara", "Adeline", "Amaia",
    "Alina", "Amina", "Amira", "Amora", "Anabel",
    "Anaís", "Ariana", "Arabella", "Azura",
    "Kiara", "Nahia", "Naia", "Zoe", "Livia"
]

/* =============================
   EXPORTS - BOYS AND GIRLS
============================= */
const NAMES_BOYS = shuffleArray([
    ...CLASSIC_NAMES,
    ...MODERN_NAMES,
    ...NOVEL_NAMES
]).map((name, index) => ({
    id: index + 1,
    name
}))

const NAMES_GIRLS = shuffleArray([
    ...CLASSIC_NAMES_GIRLS,
    ...MODERN_NAMES_GIRLS,
    ...NOVEL_NAMES_GIRLS
]).map((name, index) => ({
    id: index + 1,
    name
}))

export const NAMES = NAMES_BOYS
export { NAMES_BOYS, NAMES_GIRLS }
