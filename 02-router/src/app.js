import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'
import magnusTpl from './templates/magnus.hbs'
import sergeyTpl from './templates/sergey.hbs'

const $app = $('#app')

let definedRoutes = [
  {"path": "/", "callback": index},
  {"path": "/contact", "callback": contact},
  {"path": "/players/magnus", "callback": magnus},
  {"path": "/players/sergey", "callback": sergey},
  {"path": "error404", "callback": notFound},
]

$(document).ready(prepareForRouting(window.location.pathname))

$('a').on('click', function(){
  let url = $(this).attr('href')

  if(url.indexOf('http') == -1){
    prepareForRouting(url)
    return false
  }
})

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function magnus(){
	$app.html(magnusTpl())
}

function sergey(){
	$app.html(sergeyTpl())
}

function notFound() {
  $app.html(notFoundTpl())
}


function prepareForRouting(url){

  let defaultMethode = definedRoutes.find(function(element){
    return element.path == "error404"
  })

  if(url == null || url == undefined){
    router(defaultMethode)
  }

  let foundetMethode = definedRoutes.find(function(element){
    return element.path == url
  })

  if(foundetMethode != undefined){
    router(foundetMethode)
  } else {
    router(defaultMethode)
  }

}
