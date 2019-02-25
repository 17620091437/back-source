module.exports = {
  sleep(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, seconds);
    });
  }
};
