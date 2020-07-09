//1
if ($resource.link.match(/dler/g)) {
  let l = $resource.content.split(/\n/g)
  for (let i = 0; i < l.length; i++) {
    let info = l[i].split(/tag=/g)
    $notify('info1','',info[1])
    let array = info[1].replace(/新加坡/g, '狮城').replace(/高级|标准/g, '').split('>')
    if (array.length === 2) {
        info[1] = array[0] + '>' + array[1].substring(3)
    } else {
        info[1] = array[0]
    }
    l[i] = info[0] + info[1]
  }
  
  $notify('l1','',l[0])
  $done({error:'2'});
}
