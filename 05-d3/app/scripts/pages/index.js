import d3 from 'd3'
import page from 'page'
import config from '../config'
import tplDrivers from '../templates/drivers.hbs'
import tplNotFound from '../templates/not-found.hbs'
import tplError from '../templates/error.hbs'

const content = document.getElementById('content')

let globalError = undefined

function driversByAge(drivers) {
  return drivers.map(driver => {
    const dateOfBirth = new Date(driver.dateOfBirth)
    const age = (new Date()).getFullYear() - dateOfBirth.getFullYear()
    return {
      name: `${driver.givenName} ${driver.familyName}`,
      age
    }
  })
}

function draw(data) {
  const width = 800
  const height = 600
  const format = d3.format('d')
  const svg = d3.select('#chart')
  const x = d3.scale.linear().range([0, width])
  const y = d3.scale.ordinal().rangeRoundBands([0, height], 0.1)
  const xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(5).tickFormat(format)

  if (!(data instanceof Array)) {
    return
  }

  x.domain([
    0, d3.max(data, function(d) {
      return d.count
    })
  ])
  y.domain(data.map(function(d) {
    return d.node
  }))

  svg.select('.axis.x').call(xAxis)

  const chart = svg.select('.rects').selectAll('rect')
    .data(data)
    .enter()
    .append('g')

  chart.append('rect')
    .attr('class', 'bar')
    .attr('y', function(d) {
      return y(d.name)
    })
    .attr('height', y.rangeBand())
    .attr('x', function() {
      return 0
    })
    .attr('width', function(d) {
      return x(d.age)
    })

  chart.append('text')
    .attr('x', function(d) {
      if (width - x(d.age) > width / 5 * 3) {
        return width
      }
      return x(d.age)
    })
    .attr('y', function(d) {
      return y(d.age) + y.rangeBand() / 2
    })
    .attr('dx', '-0.35em')
    .attr('dy', '0.35em')
    .text(function(d) {
      const name = d.name
      return name + ' ' + d.age
    })
}

export function drivers() {
  fetch(config.api.url + `/drivers.json?limit=10`)
    .then(response => {
      if (response.status >= 400) {
        return page('error')
      }

      return response.json()
    })
    .then(data => {
      content.innerHTML = tplDrivers({
        drivers: data.MRData.DriverTable.Drivers
      })
      const drivers = driversByAge(data.MRData.DriverTable.Drivers)
      draw(drivers)
    })
    .catch(err => {
      globalError = err
      page('/error')
    })
  content.innerHTML = tplDrivers()
}

export function notFound() {
  console.log('not Found')
  content.innerHTML = tplNotFound()
}

export function internalError() {
  content.innerHTML = tplError({error: globalError})
  throw globalError
}
