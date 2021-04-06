const url = $request.url
let body = $response.body
body = JSON.parse(body)

if (url.includes('feed/index')) {
    body['data']['items'].forEach((element, index) => {
        if (element.hasOwnProperty('ad_info') || element.hasOwnProperty('banner_item') || element['card_type'] != 'small_cover_v2') {
            body['data']['items'].splice(index, 1)
        }
    })
} else if (url.includes('view')) {
    body['data']['relates'].forEach((element, index) => {
        if (element.hasOwnProperty('is_ad') || !element.hasOwnProperty('aid')) {
            body['data']['relates'].splice(index, 1)
        }
    })
    delete body['data']['cms']
}

body = JSON.stringify(body)
$done({ body })
