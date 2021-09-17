/**
 * 
 * @author srk24
 * @version 0.3
 * 
 * @supported http://ip-api.com/json
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 */

if ($response.statusCode != 200) {
    $done(Null);
}

const obj = JSON.parse($response.body)
const title = obj['city']
const subtitle = obj['isp']
const ip = obj['query']
const description = obj['query'] + '\n' + obj['country'] + '\n' + obj['as'] + '\n' + obj['timezone']

$done({ title, subtitle, ip, description });
