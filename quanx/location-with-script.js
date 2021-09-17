/** 
 * @supported http://ip-api.com/json
 * @sample https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js
 *
 * geo_location_checker=http://ip-api.com/json?fields=4203280, https://raw.githubusercontent.com/srk24/profile/master/quanx/location-with-script.js
 */

if ($response.statusCode != 200) $done(Null);

const obj = JSON.parse($response.body)
const title = obj['city']
const subtitle = obj['asname']
const ip = obj['query']
const description = ip + '\n' + obj['timezone'] + '\n' + obj['isp']

$done({ title, subtitle, ip, description });
