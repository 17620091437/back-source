module.exports = {
  async index(req, res) {
    res.render("index", { aa: 123 });
  }
};
