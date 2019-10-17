// 创建元素并追加
const createDOM = dom.create(`<div><span>dom</span>Create<span>Append</span></div>`)
dom.append(document.body, createDOM)

// 在元素后面插入元素
const after2 = dom.create(`<div id="after2">after2</div>`)
dom.after(after1, after2)

// 在元素前面插入元素
const before2 = dom.create(`<div id="before2">before2</div>`);
dom.before(before1, before2)

// 包裹元素
dom.wrap(wrap1, `<div>wrapParent</div>`)
const wrap3 = dom.create(`<div>wrap3</div>`);
dom.wrap(wrap1, wrap3)

// 删除元素
setTimeout(() => {
  dom.remove(remove)
}, 3000);

// 清空子元素
setTimeout(() => {
  dom.empty(empty)
}, 4000);

// 设置属性
dom.attr(attr, 'title', 'kaw')
console.log('设置attr: ',dom.attr(attr, "id"));

// 设置style
dom.style(style, 'color', 'red')

// 寻找
console.log('调用find函数: ',dom.find("p", findId));

// 遍历
dom.each(findId, (node)=>{dom.style(node, {color: 'blue'})})
