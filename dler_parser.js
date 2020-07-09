/**
 * 9
 * @author daryl
 * @fileoverview Example to parse the resource to the format of Quantumult X.
 * 
 * @supported Quantumult X (v1.0.8-build253)
 */


// $resource, $notify(title, subtitle, message)
// HTTP reqeust and persistent storage related APIs are not supported in resource parser.

// $resource.link contains the original URL of the resource or the path if the resource is local.
// $resource.content contains the response(UTF8) from the URL .

// $done({error : "error description"});
// $done({content : "the modified content"});


if ($resource.link.match(/dler/g)) {
    let list = $resource.content.split(/\n/g)
    for (let i = 0; i < list.length; i++) {
        if (list[i].match(/tag/g)) {
            let info = list[i].split(/tag=/g)
            let tag = info[1].replace(/新加坡/g, '狮城').replace(/高级|标准/g, '').split('>')
            if (tag.length === 2) {
                info[1] = tag[0] + '>' + tag[1].substring(3)
            } else {
                info[1] = tag[0]
            }
            list[i] = info[0] + 'tag=' + info[1]
            $notify('list' + i, '', list[i])
        }
    }
    $notify('_list', '', list)
    let resp = list.join('\n')
    $notify('parser_dler', '', resp)
    $done({content: resp})
}
