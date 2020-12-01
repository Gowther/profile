 /**
 * 删除 DivineEngine Rule 中的script的资源解析器
 */
// 删除 DivineEngine Rule 中的script的资源解析器

const adv = 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf'

let list = $resource.content.split(/\n/g)

if ($resource.link === adv) {
    let startIndex
    let endIndex
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('# Script')) {
            startIndex = i
        } else if (list[i].includes('# Rewrite')){
            endIndex = i
            break
        }
    }
    $notify('1', 'sub', startIndex+ ','+endIndex)
    list = list.splice(startIndex, (endIndex - startIndex));
    let resp = list.join('\n')
    $done({ content: resp })
}
