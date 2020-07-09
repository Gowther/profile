/**
 * @version 0.0.1
 * @author daryl
 *
 * @supported http://ip-api.com/json
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 */

// $response, $notify(title, subtitle, message), console.log(message)
// $response.statusCode, $response.headers, $response.body

if ($response.statusCode !== 200) $done(Null)

const obj = JSON.parse($response.body)
let title = obj['city']
let subtitle = obj['isp']
let ip = obj['query']
let description = obj['regionName'] + '\n' + obj['as'] + '\n' + obj['timezone']
subtitle = subtitle.replace('Hong Kong Telecommunications (HKT)', 'HKT')

$done({title, subtitle, ip, description});
