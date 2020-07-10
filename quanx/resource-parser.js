/**
 * 
 * @author daryl
 * @version 0.14
 * 
 * @supported Quantumult X (v1.0.8-build253)
 */

// $resource, $notify(title, subtitle, message)
// HTTP reqeust and persistent storage related APIs are not supported in resource parser.

// $resource.link contains the original URL of the resource or the path if the resource is local.
// $resource.content contains the response(UTF8) from the URL .

// $done({error : "error description"});
// $done({content : "the modified content"});

if (!$resource.content.match(/tag/g)) $done(Null)

const sub_dler = /dler\.cloud\/subscribe/g
const sub_zeichuan = /zeichuan\.vip\/link/g
const reg_t = /tag=/g
let list = $resource.content.split(/\n/g)

if ($resource.link.match(sub_dler)) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].match(reg_t)) {
            let info = list[i].split(reg_t)
            let tag = info[1].replace(/新加坡/g, '狮城').replace(/高级|标准/g, '').split('>')
            if (tag.length === 2) {
                info[1] = tag[0] + '>' + tag[1].substring(3)
            } else {
                info[1] = tag[0]
            }
            list[i] = info[0] + 'tag=' + info[1]
        }
    }
    let resp = list.join('\n')
    $done({ content: resp })
} else if ($resource.link.match(sub_zeichuan)) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].match(reg_t)) {
            let info = list[i].split(reg_t)
            info[1] = info[1].replace(/-/g, ' ').replace(/新加坡/g, '狮城')
            if (info[1].match(/〖多入口中转〗/g)) {
                info[1] = info[1].replace(/〖多入口中转〗/g, ' ').concat(' CDN')
            }
            list[i] = info[0] + 'tag=' + info[1]
        }
    }
    let resp = list.join('\n')
    $done({ content: resp })
}
