const util = require("../../common/util");

module.exports = {
  getProductList: async (req, res) => {
    await util.sleep(3000);
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
  }
};
