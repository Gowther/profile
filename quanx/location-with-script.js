/**
 * 
 * @author daryl
 * @version 0.2
 * 
 * @supported http://ip-api.com/json
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 */

if ($response.statusCode !== 200) $done(Null)

const obj = JSON.parse($response.body)
let title = obj['city']
let subtitle = obj['isp']
let ip = obj['query']
let description = obj['query'] + '\n' + obj['country'] + '\n' + obj['as'] + '\n' + obj['timezone']
subtitle = subtitle.replace('Hong Kong Telecommunications (HKT)', 'HKT')

$done({ title, subtitle, ip, description });
