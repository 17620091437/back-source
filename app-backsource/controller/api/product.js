const util = require("../../common/util");

module.exports = {
  async getProductList(req, res, next) {
    // await util.sleep(3000);
    // throw new Error("数据获取错误！");
    res.send([
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 1",
        salesNum: Math.ceil(Math.random() * 9999) + 10,
        productItems: [
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 1000,
            picURL: "placeholder"
          }
        ]
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 3",
        salesNum: Math.ceil(Math.random() * 9999) + 10,
        productItems: [
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 2000,
            picURL: "placeholder"
          }
        ]
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 5",
        salesNum: Math.ceil(Math.random() * 9999) + 10,
        productItems: [
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 3000,
            picURL: "placeholder"
          }
        ]
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 7",
        salesNum: Math.ceil(Math.random() * 9999) + 10,
        productItems: [
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 4000,
            picURL: "placeholder"
          }
        ]
      },
      {
        pid: Math.ceil(Math.random() * 10),
        name: "Air Jordan 9",
        salesNum: Math.ceil(Math.random() * 9999) + 10,
        productItems: [
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          },
          {
            id: Math.ceil(Math.random() * 10),
            itemName: "Top3 2018 红蓝鸳鸯",
            price: Math.ceil(Math.random() * 1000) + 5000,
            picURL: "placeholder"
          }
        ]
      }
    ]);
  },
  async getTagList(req, res) {
    // await util.sleep(1000);
    res.send([
      {
        id: Math.ceil(Math.random() * 10),
        title: "品牌",
        contentItems: [
          {
            id: Math.ceil(Math.random() * 10),
            name: "NIKE"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Adidas"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "李宁"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "安踏"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Puma"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Converse"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Peak/匹克"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "特步"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "安德玛"
          }
        ]
      },
      {
        id: Math.ceil(Math.random() * 10),
        title: "尺寸",
        contentItems: [
          {
            id: Math.ceil(Math.random() * 10),
            name: "35"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "36"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "37"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "38"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "39"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "40"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "41"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "42"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "43"
          }
        ]
      },
      {
        id: Math.ceil(Math.random() * 10),
        title: "颜色",
        contentItems: [
          {
            id: Math.ceil(Math.random() * 10),
            name: "NIKE"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Adidas"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "李宁"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "安踏"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Puma"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Converse"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Peak/匹克"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "特步"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "安德玛"
          }
        ]
      },
      {
        id: Math.ceil(Math.random() * 10),
        title: "系列",
        contentItems: [
          {
            id: Math.ceil(Math.random() * 10),
            name: "Air Jordan"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Leborn"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Kobe"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Curry"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Hyperdunk"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Kyrie"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "KD"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "Wade"
          },
          {
            id: Math.ceil(Math.random() * 10),
            name: "D Rose"
          }
        ]
      }
    ]);
  }
};
