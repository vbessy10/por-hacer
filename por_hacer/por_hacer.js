const fs = require('fs');
const { resolve } = require('path');
const { inflate } = require('zlib');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    // fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
    //     if (err)
    //         reject(err)
    //     else
    //         resolve(`tabla-${base}-al-${limite}.txt`)
    // });

    // return new Promise((resolve, reject) => {
    fs.writeFile('db/data.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
    // });
}

const cargarDB = () => {

    //console.log(listadoPorHacer);

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else return false;
    /* Otra Opcion */
    /*let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }*/
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}