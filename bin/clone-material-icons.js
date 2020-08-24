const { ncp } = require('ncp');

ncp.limit = 16;
const source = './node_modules/material-design-icons/iconfont'
const destination = './public/iconfont'

ncp(source, destination, error => {
  if (error) {
    return console.error(error);
  }
  console.log('Material design icons has been cloned!');
});
