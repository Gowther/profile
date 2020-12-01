// 删除 DivineEngine Rule 中的script的资源解析器

const adv = 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf'

let list = $resource.content.split(/\n/g)

if ($resource.link === adv) {
    let startIndex
    let endIndex
    for (let i = 0; i < list.length; i++) {
        $notify('删除的内容', '', list[i])
        if (list[i].includes('# Script')) {
            startIndex = i
            $notify('匹配到的东西', '', list[i])
        } else if (list[i].includes('# URL Rewrite')) {
            endIndex = i
            break
        }
    }
    $notify(title, subtitle, startIndex + '就算是间隔福报' + endIndex)
    list.splice(startIndex, (endIndex - startIndex));
    let resp = list.join('\n')
    $done({ content: resp })
}
