module.exports = {
  index: (req, res) => {
    throw new Error('asdhkas');
    res.render('index', { aa: 123 })
  }
}