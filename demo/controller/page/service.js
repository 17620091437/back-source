module.exports = {
  error: async (req, res) => {
    res.render('error', res.error);
  }
}