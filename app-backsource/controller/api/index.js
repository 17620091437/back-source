const util = require("../../common/util");

module.exports = {
  getRecommend: (req, res) => {
    res.send([
      {
        title: "最热大牌",
        data: [
          {
            groupTitle: "年货热卖",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "新品发售",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "AJ1精选",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "YEEZY系列",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          }
        ]
      },
      {
        title: "大牌服饰",
        data: [
          {
            groupTitle: "年货热卖",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "新品发售",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "AJ1精选",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "YEEZY系列",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          }
        ]
      },
      {
        title: "新年限定",
        data: [
          {
            groupTitle: "年货热卖",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          },
          {
            groupTitle: "新品发售",
            productList: [
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" },
              { name: "NIKE AIR", price: 1779, picURL: "placeholder" }
            ]
          }
        ]
      }
    ]);
  },
  getHot: async (req, res) => {
    await util.sleep(3000);
    res.send([
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3 Pure White 爆裂/水晶底",
        price: Math.ceil(Math.random() * 9999) + 100,
        picURL: "placeholder",
        hotNum: Math.ceil(Math.random() * 9999) + 10
      }
    ]);
  }
};
