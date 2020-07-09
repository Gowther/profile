/**
 *
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 */

if ($response.statusCode !== 200) {
    $done(Null);
}

const body = $response.body;
const obj = JSON.parse(body);
let title;
if (obj['city']) {
    title = obj['city'] + ', ' + obj['country_code']
} else {
    title = obj['country']
}
let subtitle = (obj['city'] + ' ' + obj['isp']).trim()
let ip = obj['ip']
let description = obj['country'] + '\n' + obj['region'] + '\n' + +obj['asn'] + ',' + obj['asn_organization'] + '\n' + obj['ipType']

$done({title, subtitle, ip, description});
