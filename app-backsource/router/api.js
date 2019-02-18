module.exports = [
  {
    method: "get",
    path: "/demo",
    action: "demo.demo"
  },
  {
    method: "post",
    path: "/demo",
    action: "demo.postDemo"
  },
  {
    method: "get",
    path: "/recommend",
    action: "index.getRecommend"
  },
  {
    method: "get",
    path: "/hot",
    action: "index.getHot"
  },
  {
    method: "get",
    path: "/product",
    action: "product.getProductList"
  }
];
