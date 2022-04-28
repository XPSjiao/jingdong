const obj = {
  // 第一层级是店铺id
  1: {
    // 第二层是商品队列
    productList: {
      // 第三层是商品id
      101: {
        _id: 101,
        name: '番茄250g/份',
        imgUrl: 'http://47.96.31.161:9000/vue3/番茄.webp',
        sales: 10,
        price: 33.6,
        originPrice: 39.6,
        count: 88,
        check: true
      },
      102: {
        _id: 101,
        name: '番茄250g/份',
        imgUrl: 'http://47.96.31.161:9000/vue3/番茄.webp',
        sales: 10,
        price: 33.6,
        originPrice: 39.6,
        count: 3,
        check: true
      },
      103: {
        _id: 103,
        name: '提子250g/份',
        imgUrl: 'http://47.96.31.161:9000/vue3/提子.webp',
        sales: 10,
        price: 33.6,
        originPrice: 39.6,
        count: 4,
        check: true
      },
      104: {
        _id: 104,
        name: '鸡蛋250g/份',
        imgUrl: 'http://47.96.31.161:9000/vue3/鸡蛋.webp',
        sales: 10,
        price: 33.6,
        originPrice: 39.6,
        count: 5,
        check: true
      },
      105: {
        _id: 104,
        name: '西瓜250g/份',
        imgUrl: 'http://47.96.31.161:9000/vue3/西瓜.webp',
        sales: 10,
        price: 33.6,
        originPrice: 39.6,
        count: 6,
        check: true
      }
    }

  }
}
console.log(obj[1])// 可以通过 对象名[属性名]的方式范围跟属性值，配合数据结构实现和 数组名[下标] 一样的效果
console.log(obj[1].productList['101'])
console.log(obj[1].productList['101'].count)
// 如果 103号商品存在，就输出其数量；否则输出0
if (obj[1].productList['103']) {
  console.log(obj[1].productList['103'].count)
} else {
  console.log(0)
}
// 上面代码可以简写为
const res = obj[1].productList['103']?.count || 0
console.log(res)
