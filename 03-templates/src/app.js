import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import player from './templates/player.hbs'

import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')

function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  const players = {
    'sergey': {
      name: "Sergey",
      description: "Hallo Sergey",
    },

    'magnus': {
      name: "Magnus",
      description: "Hallo Magnus",
    }
  }

  $app.html(player(players[ctx.params.player]))
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()
