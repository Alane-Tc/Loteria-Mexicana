
let bajara = []; //Arreglo para guardar las cartas
let Tipo_de_bajara = [ //Arreglo de las cartas de la loteria 
    '1. El gallo', '2. El diablito', '3. La dama', '4. El catrín', '5. El paraguas', '6. La sirena',
    '7. La escalera', '8. La botella', '9. El barril', '10. El arbol', '11. El melon', '12. El valiente', '13. El gorrito',
    '14. La muerte',
    '15. La pera',
    '16. La bandera',
    '17. El bandolon',
    '18. El violoncello',
    '19. La garza',
    '20. El pajaro',
    '21. La mano',
    '22. La bota',
    '23. La luna',
    '24. El cotorro',
    '25. El borracho',
    '26. El negrito',
    '27. El corazon',
    '28. La sandía',
    '29. El tambor',
    '30. El camarón',
    '31. Las jaras',
    '32. El músico',
    '33. La araña',
    '34. El soldado',
    '35. La estrella',
    '36. El cazo',
    '37. El mundo',
    '38. El apache',
    '39. El nopal',
    '40. El alacrán',
    '41. La rosa',
    '42. La calavera',
    '43. La campana',
    '44. El cantarito',
    '45. El venado',
    '46. El sol',
    '47. La corona',
    '48. La chalupa',
    '49. El pino',
    '50. El pescado',
    '51. La palma',
    '52. La maceta',
    '53. El arpa',
    '54. La rana'
];
//Variables globales
let contadorCartas = 0;
//Rerefencias HTML
let btnPedir = document.querySelector('#btnPedir')
let divCarta = document.querySelector('#cartas_loteria')
let small = document.querySelector('small');

//Funcion para mezclar las cartas aleatoriamente
const mezclarCartas = () => {
    for (let tipobaraja of Tipo_de_bajara) {
        bajara.push(tipobaraja)
    }
    bajara = _.shuffle(bajara); //Con esta funcion se mezclan las cartas
    console.log(bajara);
    return bajara;
}

mezclarCartas() //Llamamos a la funcion de mezclar cartas

//Función para pedir una carta aleatoria
const pedirCarta = () => {
    const carta = bajara.pop();
    if (bajara.length === 0) {
        btnPedir.disabled = true
    }
    return carta
}

//Eventos
btnPedir.addEventListener('click', () => {
    const cartaLoteria = pedirCarta()
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${cartaLoteria}.png`
    imgCarta.classList.add('carta')
    divCarta.append(imgCarta)
    contadorCartas++
    small.innerText = contadorCartas;
})