const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'
        // }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        // descripcion: {
        //     demand: true,
        //     alias: 'd'
        // },
        completado
        // completado: {
        //     alias: 'c',
        //     default: true,
        //     desc: 'Marca como completado o pendiente la tarea'
        // }
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'
        // }
    })
    .help()
    .argv;

module.exports = {
    argv
}