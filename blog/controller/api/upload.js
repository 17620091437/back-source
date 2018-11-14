module.exports = {
  async upload(req, res) {
    let url = `/static/upload/${req.file.filename}`;
    res.send({
      url,
      size: req.file.size,
      status: 200,
    })
  }
}