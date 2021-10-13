
let bajara = [];
let Tipo_de_bajara = [
    'El gallo', 'El diablito', 'La dama', 'El catrín', 'El paraguas', 'La sirena',
    'La escalera', 'La botella', 'El barril', 'El árbol', 'El melón', 'El valiente', 'El gorrito',
    'La muerte',
    'La pera',
    'La bandera',
    'El bandolón',
    'El violoncello',
    'La garza',
    'El pájaro',
    'La mano',
    'La bota',
    'La luna',
    'El cotorro',
    'El borracho',
    'El negrito',
    'El corazón',
    'La sandía',
    'El tambor',
    'El camarón',
    'Las jaras',
    'El músico',
    'La araña',
    'El soldado',
    'La estrella',
    'El cazo',
    'El mundo',
    'El apache',
    'El nopal',
    'El alacrán',
    'La rosa',
    'La calavera',
    'La campana',
    'El cantarito',
    'El venado',
    'El sol',
    'La corona',
    'La chalupa',
    'El pino',
    'El pescado',
    'La palma',
    'La maceta',
    'El arpa',
    'La rana'
];

const mezclarCartas = () => {
    for (let tipobaraja of Tipo_de_bajara) {
        bajara.push(tipobaraja)
    }
    bajara = _.shuffle(bajara);
    console.log(bajara);
    return bajara;
}

mezclarCartas()

const pedirCarta = () => {
    const carta = bajara.pop();
    (bajara.length === 0) ? console.warn('Se acababo el juego') : console.warn("Juegale")
    console.log(bajara);
    console.log(carta);
    return carta
}

for (let index = 0; index < 54; index++) {
    pedirCarta()
}

