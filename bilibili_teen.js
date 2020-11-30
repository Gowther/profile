#app.bilibili.com/x/v2/account/mode/status?access_key 

let body = $response.body
body = JSON.parse(body)
if (body.hasOwnProperty('data')) {
    body['data'].forEach(element => {
        if (element['mode'] === 'teenagers') {
            element['status'] = 2
        }
    })
}
body = JSON.stringify(body)
$done({ body })
