/**
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
    let o = l[i].split(/tag=/g)
    let array = o[1].replace(/新加坡/g, '狮城').replace(/高级|标准/g, '').split('>')
    if (array.length === 2) {
        o[1] = array[0] + '>' + array[1].substring(3)
    } else {
        o[1] = array[0]
    }
    l[i] = o[0] + o[1]
  }
  
  $notify('T1','',list[0])
  $done({error:'1'});
}
