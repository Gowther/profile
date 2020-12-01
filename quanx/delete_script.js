//资源解析器 -> 删除 DivineEngine Rule Script的引用 
const adv = 'https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf'

let list = $resource.content.split(/\n/g)

if ($resource.link === adv) {
    let startIndex
    let endIndex
    for (let i = 0; i < list.length; i++) {
        if (list[i].includes('# Script')) {
            startIndex = i
        } else if (list[i].includes('# URL Rewrite')) {
            endIndex = i
            break
        }
    }
//     $notify('开始删除script', '', '开始位置：' + list[startIndex] + '；结束位置：' + list[endIndex])
    list.splice(startIndex, (endIndex - startIndex));
    let resp = list.join('\n')
    $done({ content: resp })
}
