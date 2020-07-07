module.exports.parse = async (raw, { axios, yaml, notify }) => {
let obj = yaml.parse(raw)

delete obj['port']
delete obj['socks-port']
delete obj['redir-port']
delete obj['allow-lan']
delete obj['mode']
delete obj['log-level']
delete obj['external-controller']
delete obj['secret']

let r = obj['Rule']
for (let i = 0; i < r.length; i++) {
	r[i] = r[i].replace(/🔰国外流量/g, 'PROXY')
	r[i] = r[i].replace(/✈️Telegram/g, 'PROXY')
	r[i] = r[i].replace(/🎬Youtube/g, 'PROXY')
	r[i] = r[i].replace(/🎬Netflix/g, 'Netflix')
	r[i] = r[i].replace(/🎬哔哩哔哩/g, 'BiliBili')
	r[i] = r[i].replace(/🎬国外媒体/g, 'PROXY')
	r[i] = r[i].replace(/🍎苹果服务/g, 'DIRECT')
	r[i] = r[i].replace(/⚓️其他流量/g, 'PROXY')
}

let len = obj['Proxy'].length
let g = obj['Proxy Group']
let _g = new Array(3)
for (let i = 0; i < g.length; i++) {
	if (g[i]['name'] === '🔰国外流量') {
		_g[0] = deepClone(g[i])
		_g[0]['proxies'] = g[i]['proxies'].slice(0, len)
		_g[0]['name'] = 'PROXY'
	} else if (g[i]['name'] === '🎬哔哩哔哩') {
		_g[1] = deepClone(g[i])
		_g[1]['proxies'] = ['DIRECT', 'PROXY']
		_g[1]['name'] = 'BiliBili'
	} else if (g[i]['name'] === '🎬Netflix') {
		_g[2] = deepClone(g[i])
		_g[2]['proxies'] = g[i]['proxies'].slice(1)
		_g[2]['name'] = 'Netflix'
		_g[2]['proxies'][len] = 'PROXY'
	}
}
obj['Proxy Group'] = _g

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