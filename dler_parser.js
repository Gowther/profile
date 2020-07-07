module.exports.parse = async (raw, { axios, yaml, notify }) => {
  let obj = yaml.parse(raw)

  delete obj['port']
  delete obj['socks-port']
  delete obj['redir-port']
  delete obj['allow-lan']
  delete obj['mode']
  delete obj['log-level']
  delete obj['external-controller']
  delete obj['experimental']

  let r = obj['rules']
  for (let i = 0; i < r.length; i++) {
      r[i] = r[i].replace(/Proxy/g, 'PROXY')
      r[i] = r[i].replace(/AdBlock/g, 'REJECT')
      r[i] = r[i].replace(/Apple/g, 'DIRECT')
      r[i] = r[i].replace(/AsianTV/g, 'CMedia')
      r[i] = r[i].replace(/Domestic/g, 'DIRECT')
      r[i] = r[i].replace(/GlobalTV/g, 'PROXY')
      r[i] = r[i].replace(/Microsoft/g, 'PROXY')
      r[i] = r[i].replace(/Netease Music/g, 'DIRECT')
      r[i] = r[i].replace(/Others/g, 'PROXY')
      r[i] = r[i].replace(/PayPal/g, 'DIRECT')
      r[i] = r[i].replace(/Spotify/g, 'PROXY')
      r[i] = r[i].replace(/Steam/g, 'PROXY')
      r[i] = r[i].replace(/Speedtest/g, 'PROXY')
      r[i] = r[i].replace(/Telegram/g, 'PROXY')
  }

  let g = obj['proxy-groups']
  let _g = new Array(3)
  for (let i = 0; i < g.length; i++) {
      if (g[i]['name'] === 'Proxy') {
          _g[0] = deepClone(g[i])
          _g[0]['proxies'] = g[i]['proxies'].slice(2)
          _g[0]['name'] = 'PROXY'
      } else if (g[i]['name'] === 'AsianTV') {
          _g[1] = deepClone(g[i])
          _g[1]['proxies'] = ['DIRECT','PROXY']
          _g[1]['name'] = 'CMedia'
      } else if (g[i]['name'] === 'Netflix') {
          _g[2] = deepClone(g[i])
          _g[2]['proxies'][0] = 'PROXY'
      }
  }
  obj['proxy-groups'] = _g

  function deepClone(obj) {
    if (obj === null) return null
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (typeof obj == 'function') return new function(obj){}
    if (typeof obj != "object") {
      return obj
    }
    const newObj = new obj.__proto__.constructor
    for (const key in obj) {
      newObj[key] = deepClone(obj[key])
    }
    return newObj
  }

  return yaml.stringify(obj)
}
