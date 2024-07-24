export const dataTable = [
    {
        titulo: "Estadisticas de eventos",
        filas:[ 
            "Eventos con mayor porcentaje de asistencia.",
            "Eventos con menor porcentaje de asistencia",
            "eventos con gran capacidad"
        ]
    },
    {
        titulo: "Estadísticas de eventos pasados por categoría",
        filas:[ 
            "Categorias",
            "Ingresos",
            "Porcentaje de asistencias"
        ]
    },
    {
        titulo: "Estadísticas de eventos futuros por categoría",
        filas:[ 
            "Categorias",
            "Ingresos",
            "Porcentaje de estimación"
        ]
    },
]

export const estadiaticasEventos = (events) => {
    let arreglo = [];
    const MayorPorcentaje = events.reduce((acumulador, evento) => evento.assistance < acumulador.assistance ? evento : acumulador);
    const MenorPorcentaje = events.reduce((acumulador, evento) => evento.assistance > acumulador.assistance ? evento : acumulador);
    const MayorCapacidad = events.reduce((acumulador, evento) => evento.capacity > acumulador.capacity ? evento : acumulador);
    arreglo.push(MayorPorcentaje, MenorPorcentaje, MayorCapacidad);
    return arreglo;
}

export const estadisticasEventosPasados = (events) => {
    let arregloPasado = [];
    let gananciaPorCategoriaPasadas = {};
    let porcentajeAsistenciaCategoria = {};
    let eventoPasados = events.filter(evento => evento.assistance != undefined);
    eventoPasados.forEach(categoria => {
        if (categoria.assistance != undefined) {
            const precioTotal = categoria.price * categoria.assistance;
            if (gananciaPorCategoriaPasadas[categoria.category]) {
                gananciaPorCategoriaPasadas[categoria.category] += precioTotal
            } else {
                gananciaPorCategoriaPasadas[categoria.category] = precioTotal;
            }
        }
        if (categoria.assistance != undefined) {
            if (porcentajeAsistenciaCategoria[categoria.category]) {
                porcentajeAsistenciaCategoria[categoria.category] += Math.round((Number(categoria.assistance) / Number(categoria.capacity))) * 10
            } else {
                porcentajeAsistenciaCategoria[categoria.category] = Math.round((Number(categoria.assistance) / Number(categoria.capacity))) * 10
            }
        }
    });
    arregloPasado.push(gananciaPorCategoriaPasadas);
    arregloPasado.push(porcentajeAsistenciaCategoria);
    let items = [];
    for (let i = 0; i < Object.keys(arregloPasado[0]).length; i++) {
        let datosPasados = {
            categoria: Object.keys(arregloPasado[0])[i],
            ingresos: Object.values(arregloPasado[0])[i], 
            porcentaje: Object.values(arregloPasado[1])[i] 
        }
        items.push(datosPasados)
    }
    return items;
}

export const estadisticasEventosFuturos = (events) => {
    let arregloFuturo = [];
    let gananciaPorCategoriaFuturas = {};
    let porcentajeEstimadosCategoria = {};
    let eventoFuturos = events.filter(evento => evento.estimate != undefined);
    eventoFuturos.forEach(categoria => {
        if (categoria.estimate != undefined) {
            const precioTotal = categoria.price * categoria.estimate;
            if (gananciaPorCategoriaFuturas[categoria.category]) {
                gananciaPorCategoriaFuturas[categoria.category] += precioTotal
            } else {
                gananciaPorCategoriaFuturas[categoria.category] = precioTotal;
            }
        }
        if (categoria.estimate != undefined) {
            if (porcentajeEstimadosCategoria[categoria.category]) {
                porcentajeEstimadosCategoria[categoria.category] += Math.round((Number(categoria.estimate) / Number(categoria.capacity))) * 10
            } else {
                porcentajeEstimadosCategoria[categoria.category] = Math.round((Number(categoria.estimate) / Number(categoria.capacity))) * 10
            }
        }
    });
    arregloFuturo.push(gananciaPorCategoriaFuturas);
    arregloFuturo.push(porcentajeEstimadosCategoria);
    let items = [];
    for (let i = 0; i < Object.keys(arregloFuturo[0]).length; i++) {
        let datosPasados = {
            categoria: Object.keys(arregloFuturo[0])[i],
            ingresos: Object.values(arregloFuturo[0])[i], 
            porcentaje: Object.values(arregloFuturo[1])[i] 
        }
        items.push(datosPasados)
    }
    return items
}