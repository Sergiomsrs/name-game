/* =============================
   NOMBRES CLÁSICOS
============================= */
const CLASSIC_NAMES = [
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
    "Néstor", "Ramón", "Pau", "Oriol", "Aleix", "Quim", "Ferran", "Xavi",
    "Vicente", "Salvador", "Adolfo", "Bernardo", "Camilo", "Domingo",
    "Eugenio", "Fabián", "Leandro", "Mauricio", "Renato", "Ulises", "Walter", "Yago",
    "Zacarías",
    // +150 nombres clásicos adicionales
    "Alonso", "Amadeo", "Aurelio", "Baltasar", "Bautista", "Cayetano", "Celestino",
    "Cirilo", "Ciro", "Conrado", "Constantino", "Cosme", "Damián", "Demetrio", "Edelmiro",
    "Edmundo", "Eliseo", "Eloy", "Emiliano", "Enrique", "Erasmo", "Eustaquio", "Evangelista",
    "Fabio", "Faustino", "Federico", "Fermín", "Florencio", "Fortunato", "Gabino", "Gaspar",
    "Genaro", "Gerardo", "Germán", "Gervasio", "Gildo", "Gregorio", "Gumersindo", "Higinio",
    "Hilario", "Honorio", "Horacio", "Humberto", "Ildefonso", "Inocencio", "Isidoro",
    "Jacinto", "Jerónimo", "Josué", "Julián", "Justo", "Lázaro", "Leocadio", "Leonardo",
    "Leopoldo", "Liborio", "Lisandro", "Lope", "Luciano", "Ludovico", "Magnus", "Marcial",
    "Mariano", "Mártir", "Misael", "Modesto", "Narciso", "Octavio", "Olegario", "Onofre",
    "Orlando", "Pascual", "Primitivo", "Prospero", "Sancho", "Severiano", "Teodoro",
    "Timoteo", "Tobías", "Toribio", "Tristán", "Valerio", "Vidal", "Virgilio", "Vito",
    "Wenceslao", "Wilfredo"
]

/* =============================
   NOMBRES MODERNOS / TRENDY
============================= */
const MODERN_NAMES = [
    "Axel", "Kai", "Milo", "Enzo", "Nico", "Finn", "Eli", "Aron", "Aksel", "Rayan", "Ciro",
    "Bastian", "Einar", "Nash", "Seth", "Alec", "Rocco", "Zion", "Elian", "Lucio", "Maverick",
    "Kairo", "Orion", "Rudy", "Sky", "Tobyn", "Leon", "Kairos", "Ennio", "Dante", "Cayden",
    "Jax", "Zephyr", "Malik", "Ezio", "Neo", "Kendrick", "Maddox", "Lennox", "Cairo", "Ryker",
    "Cassian", "Elio", "Soren", "Timo", "Ayan", "Ronan", "Finnian", "Kyro", "Xander", "Orlando",
    "Aiden", "Grayson", "Bentley", "Cruz", "Dario", "Fabian", "Gideon", "Harlan", "Indigo",
    "Jenson", "Kellen", "Lior", "Magnus", "Niko", "Odin", "Paxton", "Quentin", "Remiel",
    "Tavian", "Valor", "Wesley", "Xavi", "Yanis", "Zayden", "Aleron", "Blair", "Callan",
    "Dashiell", "Eamon", "Felix", "Gannon", "Hendrix", "Jett", "Lucian", "Milan", "Oren",
    "Phoenix", "Quillon", "Rylen", "Stellan", "Talon", "Ulric", "Viggo", "Wilder", "Xavian",
    "Yael", "Zarek", "Arden", "Bodhi", "Cillian", "Dorian", "Evander", "Fynn", "Gideon",
    "Huxley", "Isaias", "Jorvik", "Lucius", "Malakai", "Percival", "Quinlan", "Reeve",
    "Sayer", "Uriah", "Wolf", "Xenon", "Zander", "Axton", "Brennan", "Cael", "Damon", "Elwood",
    "Fletcher", "Grayson", "Harlan", "Ira", "Jasper", "Neo", "Pax", "Remy", "Sawyer", "Tavian",
    "Ulises", "Vito", "Wilder", "Xavi", "Yanis", "Adur", "Aiur", "Amaiur", "Ametz", "Anxo", "Antón", "Artai", "Artur", "Brais", "Breogán",
    "Damià", "Eder", "Edorta", "Egoi", "Ehouarn", "Ekaitz", "Ekhi", "Elar", "Elouan", "Eloi",
    "Emili", "Enekoitz", "Eñaut", "Esteve", "Eudald", "Eurico", "Françesc", "Gaizka", "Gari", "Guifré",
    "Hodei", "Iago", "Ibai", "Iban", "Ierai", "Ihar", "Ikerne", "Imanol", "Inhar", "Iñaki",
    "Iñigo", "Ipar", "Irai", "Iratz", "Ireu", "Irun", "Itsas", "Iurgi", "Izani", "Jacint",
    "Joam", "Joaquim", "Jofre", "Jonatan", "Jordi", "Josu", "Julen", "Jurdan", "Kepa", "Koldo",
    "Lander", "Lier", "Lluc", "Luar", "Manel", "Maneu", "Markel", "Marti", "Miquel", "Nadir",
    "Narcís", "Oier", "Oiher", "Oihan", "Oinatz", "Orixe", "Oskarbi", "Ot", "Otxoa", "Palla",
    "Peio", "Roc", "Roi", "Santi", "Segimon", "Sergi", "Tomeu", "Urko", "Xabier", "Xandre",
    "Xan", "Xaquín", "Xermán", "Xian", "Xoán", "Xose", "Xurxo", "Zigor", "Zunbeltz", "Zuri", "Abundio", "Acacio", "Adalberto", "Adelardo", "Adolfo", "Adriano", "Agapito", "Albano", "Alcides", "Alfonso",
    "Alfredo", "Amado", "Amancio", "Amando", "Amaro", "Ambrosio", "Anacleto", "Anastasio", "Aniceto", "Anselmo",
    "Apolinar", "Ariel", "Aristides", "Arnaldo", "Arsenio", "Arturo", "Atanasio", "Augusto", "Avito", "Baldomero",
    "Balduino", "Bartolomé", "Basilio", "Beltrán", "Benedicto", "Benigno", "Bernabé", "Bernardino", "Blas", "Bonifacio",
    "Buenaventura", "Cándido", "Canuto", "Casiano", "Casimiro", "Casto", "Cecilio", "Ceferino", "Celso", "Claudio",
    "Clemente", "Clímaco", "Colomán", "Columba", "Crispín", "Cristóbal", "Cuadrato", "Custodio", "Dalmacio", "Damaso",
    "Delfín", "Desiderio", "Diodoro", "Dionisio", "Donato", "Eleuterio", "Eligio", "Elpidio", "Emigdio", "Epifanio",
    "Erenio", "Esmirno", "Espiridión", "Estanislao", "Eufrasio", "Eusebio", "Eutropio", "Ezequiel", "Fausto", "Feliciano",
    "Fidencio", "Filemón", "Flaminio", "Flaviano", "Flavio", "Fructuoso", "Fulgencio", "Galactión", "Gaudencio", "Gedeón",
    "Gelasio", "Gentil", "Geofredo", "Gorgonio", "Graciano", "Guido", "Gustavo", "Heliodoro", "Heraclio", "Heriberto",
    "Hermenegildo", "Herminio", "Hervé", "Hipólito", "Irineo", "Isidro", "Italo", "Jeremías", "Job", "Joaquín",
    "Justino", "Juvenal", "Ladislao", "Laureano", "Lázaro", "León", "Leonidas", "Leopoldo", "Lino", "Lorenzo",
    "Lucio", "Macario", "Magín", "Mamerto", "Manfredo", "Marcelino", "Marcelo", "Melitón", "Melquíades", "Modesto",
    "Nabor", "Nazario", "Nicasio", "Norberto", "Ovidio", "Pancracio", "Pánfilo", "Pantaleón", "Perfecto", "Plácido",
    "Policarpo", "Poncio", "Porfirio", "Prudencio", "Quintín", "Quirino", "Ramiro", "Reginaldo", "Remigio", "Restituto",
    "Ricardo", "Roberto", "Rogelio", "Rolando", "Román", "Rómulo", "Roque", "Rosendo", "Rufino", "Ruperto", "Sabino",
    "Saturio", "Saturnino", "Segundo", "Serafín", "Servando", "Severo", "Sigfrido", "Silvano", "Silvestre", "Silverio",
    "Sixto", "Tarsicio", "Telesforo", "Teódulo", "Tiburcio", "Tirso", "Urbano", "Valeriano", "Venancio", "Venceslao",
    "Victoriano", "Victorino", "Victorio", "Zenón", "Zósimo", "Miguel Ángel", "Luis Miguel", "Víctor Manuel", "Carlos Alberto", "Carlos Javier",
    "Francisco Javier", "Francisco José", "Diego Armando", "Diego Alejandro",
    "Ángel Gabriel", "Ángel Luis", "Ángel David", "Ángel Custodio", "Jesús Manuel",
    "Jesús Antonio", "Jesús Alberto", "Jesús María", "Pedro Antonio", "Pedro José",
    "Marco Antonio", "Luis Alfonso", "Luis Mariano", "Luis Fernando", "Luis Eduardo"
]

/* =============================
   NOMBRES NOVEDOSOS / INTERNACIONALES
============================= */
const NOVEL_NAMES = [
    "Arlo", "Caspian", "Daxton", "Eryx", "Falco", "Gavriel", "Hale", "Icarus", "Jarek", "Kael",
    "Leif", "Marek", "Nilo", "Orin", "Paolo", "Quin", "Riven", "Soren", "Tarian", "Uli",
    "Vireo", "Wren", "Xylo", "Yuri", "Zephyr", "Aero", "Blaise", "Caius", "Danteo", "Evan",
    "Fenix", "Galen", "Hux", "Indi", "Jove", "Kairo", "Lazaro", "Magnus", "Neo", "Onyx",
    "Peregrin", "Quade", "Rafferty", "Sagan", "Tobias", "Uther", "Viggo", "Wolfgang",
    "Xan", "Yanis", "Zebulon", "Alaric", "Balthazar", "Caelan", "Drake", "Eldon", "Finnick",
    "Griffin", "Harlan", "Isidore", "Jareth", "Kaelen", "Lucien", "Maddox", "Nikolai", "Oberon",
    "Phineas", "Quillon", "Remus", "Sylas", "Thorne", "Ulric", "Valerian", "Wilder", "Xavian",
    "Yorick", "Zephyrus", "Aleron", "Bran", "Cai", "Dorian", "Elric", "Fynn", "Gideon", "Hale",
    "Ivo", "Jaxon", "Kieran", "Leandro", "Micael", "Niven", "Orien", "Pax", "Quentin", "Ronan",
    "Stellan", "Tavian", "Uriah", "Vincenzo", "Weston", "Xerxes", "Yarden", "Zayden", "Amias",
    "Bennet", "Calix", "Darwin", "Evren", "Faron", "Garrick", "Hale", "Isidoro", "Jorah",
    "Kaiden", "Lucan", "Marzio", "Neo", "Oren", "Phelan", "Quinlan", "Raffi", "Soren", "Tobyn",
    "Ulysses", "Vayden", "Wystan", "Xylon", "Yulian", "Zavier"
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

export const NAMES = shuffleArray([
    ...CLASSIC_NAMES,
    ...MODERN_NAMES,
    ...NOVEL_NAMES
]).map((name, index) => ({
    id: index + 1,
    name
}))
