// 删除 DivineEngine Rule 中的script的资源解析器

const regex = /# Script.*# URL Rewrite$/g
let resp = $resource.content
resp = content.replace(regex, '# URL Rewrite')
$done({ content: resp })
