### getElementsByTagName 兼容性最好 一组元素
### getElementsByTClasName IE8以及IE8以下不兼容 一组元素
### querySelector  //css选择器 IE7以及IE7 以下不兼容 一个元素
### querySelectorAll  //css选择器 IE7以及IE7 以下不兼容 一组元素

# 节点的四个属性
# nodeName
# nodeValue 只有文本节点有值
# nodeType
# attributes 节点属性的集合


## 遍历节点树                                              # 基于元素节点树的遍历 IE9以下除了 children 都不兼容
## 节点的类型 nodeType                 
## 元素节点 nodeType = 1
## 属性节点 nodeType = 2
## 文本节点 nodeType = 3
## 注释节点 nodeType = 8
## doucument nodeType = 9
## doucumentFragment nodeType = 11
## 文本节点 nodeType = 3
## 文本节点 nodeType = 3

# parentNode                                             # parentElement
# childNodes                                             # children 
#                                                        # node.childElementCount == node.children.length
# firstChild                                             # firstElement
# lastChild                                              # lastElement
# nextSibling                                            # nextElementSibling
# previousSibling                                        # previousElementSibling



# createElement 创建元素节点  appendChild 相当于 push + 剪切功能
# createTextNode 创建文本节点
# createComment 创建注释节点




