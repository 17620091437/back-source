module.exports = {
  demo: async (ctx, next) => {
    // throw new Error('asjdha');
    aa()
    ctx.body = {
      status: 200,
      message: 'demo test',
      data: []
    }
  }
}