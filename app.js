App({
  onLaunch: function () {
  },

  getUserInfo: function (cb) {
    var that = this

    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (r) {

          // 获取用户信息 
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })

          // 获取用户openid
          wx.request({
            url: 'https://www.cpcsign.com/api/login',
            data: {
              'js_code': r.code
            },
            method: 'GET',
            success: function (res) {
              console.log('---code 换取 openid---');
              wx.setStorageSync('openId', res.data.openid);
            }
          })

          
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    openId: ''
  }
})