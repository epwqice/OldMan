const express = require('express') ;

const router = express.Router();

router.get('/', function(req, res) {
  res.header({
    'Content-Range': 'items 0-20/1',
    'Content-Type': 'application/json',
    'X-Total-Count': '1'
  });

  res.send([{
    id: 1,
    recordID: 1,
    name: '名称',
    bornDate: '2017-01-01',
    certificateID: '123456789012345678',
    nation: '汉族',
    company: '学校'
  }]);
});

module.exports = router;