Page({
  data:({

    pass: 0,

  }),
  tapName: function () {
    var that=this
    var password = that.data.pass
    if (password == "123") {
      wx.navigateTo({
        url: '../tongjitu/tongjitu',
      })
    }
    else {
      wx.showModal({
        title: '密码错误',
        content: '请输入正确密码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    console.log(password)
  },
  change: function (e) {
    this.setData({
      pass: e.detail.value,
 
    })
    console.log(this.data.pass)
    },

})
