const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'hetianqing_salt',
  md5: pwd => {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
  },
  secretKey: 'hetianqing_key'
};
