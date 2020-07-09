if ($resource.link.match(/dler/g)) {
  let list = $resource.content.split(/\n/g)
  $notify('T1','',list[0])
  $done({error:'1'});
}
