'use strict';



const button1 = document.querySelector('#button1')
const range   = document.querySelector('#range')   

const button2   = document.querySelector('#button2')
const cuenta    = document.querySelector('#cuenta')

const button3   = document.querySelector('#button3')
const date      = document.querySelector('#date').value
const current   = new Date(date).getDay()
const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo']
const today =days [current]



    button1.addEventListener('click',function() {
        alert('Has valorado con ' + range.value + ' puntos.')
     })



    button2.addEventListener('click',function() {        
     alert ('Le informamos que su cuenta es:' + cuenta.value )
    }) 


     button3.addEventListener('click',function() {
         alert('La fecha seleccionada en el elemento de fecha es: ' + today)
       })