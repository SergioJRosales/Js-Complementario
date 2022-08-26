let cursos = prompt(`Elejí el taller queres hacer:
1: Taller de gestión emocional
2: Taller de Liderazgo Personal y Liderazgo Consciente
3: Taller de Eneagrama de la personalidad
`)

switch (cursos){
    case "1":
        console.log("Taller de gestión emocional")
    break
    case "2":
        console.log("Taller de Liderazgo Personal y Liderazgo Consciente")
    break
    case "3":
        console.log("Taller de Eneagrama de la personalidad")
    break
    default:
        console.log("¿Conoces lo que es la Procrastinación?")
    };

