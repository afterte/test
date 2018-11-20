Page({
data: {
  jingbao:true,
  beijingse: 0x002277,
  kaiguan:1,
},
  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503070381/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'MZr0v3LIS3Sl4rg5TDEy1D1rjrA='
      },
      success: function (res) {
        //console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        console.log(app.globalData.light)
        //跳转到天气页面，根据拿到的数据绘图
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
  shu: function () {
    
    this.setData({
      jingbao: false,

    })
    console.log(this.data.pass)
  },
  tapName1: function(){
    this.setData({
       kaiguan:1
    })
    wx.request({
      url: 'https://api.heclouds.com/devices/503070381/datapoints',
      header: {
        'content-type': 'application/json',
        'api-key': 'MZr0v3LIS3Sl4rg5TDEy1D1rjrA='
      },
      method: "POST",
      data: {

        "datastreams": [

          {

            "id": "kaiguan", //数据流名称或数据流模板名称

            "datapoints": [

              {
                "value": this.data.kaiguan  //上传数据点值
              },
            ]

          }]
      }
    })
  },
  tapName2: function(){
    this.setData({
      kaiguan:2
    })
    wx.request({
      url: 'https://api.heclouds.com/devices/503070381/datapoints',
      header: {
        'content-type': 'application/json',
        'api-key': 'MZr0v3LIS3Sl4rg5TDEy1D1rjrA='
      },
      method: "POST",
      data: {

        "datastreams": [

          {

            "id": "kaiguan", //数据流名称或数据流模板名称

            "datapoints": [

              {
                "value": this.data.kaiguan  //上传数据点值
              },
            ]

          }]
      }
    })
  },
  post: function(){
    wx.request({
      url: 'https://api.heclouds.com/devices/503070381/datapoints',
      header: {
        'content-type': 'application/json',
        'api-key': 'MZr0v3LIS3Sl4rg5TDEy1D1rjrA='
      },
      method: "POST",
      data:{

        "datastreams": [

          {

            "id": "kaiguan", //数据流名称或数据流模板名称

            "datapoints": [

              {
                "value": this.data.kaiguan  //上传数据点值
              },
            ]

          }]}
    })
  }
})