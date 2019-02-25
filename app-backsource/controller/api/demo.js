module.exports = {
  async demo(req, res) {
    res.send({ aa: 123 });
  },
  async postDemo(req, res) {
    console.log(req.body);
    res.send({ msg: "yes" });
  }
};
