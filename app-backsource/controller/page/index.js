module.exports = {
  index: (req, res) => {
    res.render("index", { aa: 123 });
  }
};
