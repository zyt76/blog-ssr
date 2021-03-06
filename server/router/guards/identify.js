module.exports = {
  API_IDENTIFY (req, res, next) {
    if (
      req.headers['x-zyt76-uid'] &&
      req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
      req.session.isLogin
    ) {
      next()
    } else {
      return res.json({code: -100, msg: '未登录'})
    }
  },
  PAGE_IDENTIFY (req, res, next) {
    if (req.session.isLogin) {
      next()
    } else {
      return res.redirect('/manager-system/entry/login')
    }
  }
}
