/**
 * 2
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
  let l = $resource.content.split(/\n/g)
  for (let i = 0; i < l.length; i++) {
    let info = l[i].split(/tag=/g)
    let tag = info[1].replace(/新加坡/g, '狮城').replace(/高级|标准/g, '').split('>')
    if (tag.length === 2) {
        info[1] = tag[0] + '>' + tag[1].substring(3)
    } else {
        info[1] = tag[0]
    }
    l[i] = info[0] + 'tag=' + info[1]
  }
  let resp = l.join('\n')
  $notify('parser_dler','',resp)
  $done({content : resp})
}
