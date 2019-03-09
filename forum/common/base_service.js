/**
 * 封装Service层的基本方法
 * 每个service都有
 */

module.exports = {
  async getList() {
    let res = await this.model.findAndCountAll();
    return res;
  },
  async getById() {

  },
  async create() {

  },
  async updateById() {

  },
  async deleteById() {

  }
}