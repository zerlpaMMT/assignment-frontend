import d3 from 'd3'
import page from 'page'
import config from '../config'
import tplHome from '../templates/home.hbs'
import tplNotFound from '../templates/not-found.hbs'
import tplError from '../templates/error.hbs'

const content = document.getElementById('content')

let globalError = undefined

export function home() {
  fetch(`${config.api.url}/drivers.json?limit=100`)
    .then(response => {
      if (response.status >= 400) {
        return page('error')
      }
      return response.json()
    })
    .then(data => {
      const width = 800
      const height = 300
      content.innerHTML = tplHome({
        viewBox: `0 0 ${width} ${height}`,
        transformG: 'translate(0, 0)',
        transformX: `translate(0, ${height})`,
        drivers: data.MRData.DriverTable.Drivers
      })
    })
    .catch(err => {
      globalError = err
      page('/error')
    })
}

export function notFound() {
  console.log('not Found')
  content.innerHTML = tplNotFound()
}

export function internalError() {
  content.innerHTML = tplError({error: globalError})
  throw globalError
}
