module.exports = {
  demo: (req, res) => {
    res.send({ aa: 123 });
  },
  postDemo: (req, res) => {
    console.log(req.body);
    res.send({ msg: "yes" });
  }
};
