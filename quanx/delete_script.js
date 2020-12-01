// 删除 DivineEngine Rule 中的script的资源解析器

const adv = 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf'

if ($resource.link === adv) {
    const regex = /# Script.*# URL Rewrite$/g
    let resp = $resource.content
    resp = content.replace(regex, '# URL Rewrite')
    $done({ content: resp })
}
