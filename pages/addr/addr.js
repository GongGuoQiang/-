// pages/addr/addr.js
var myData = require("../../utils/data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
     province:myData.provinceData(),
     city:myData.cityData(),
     proviIndex:0,
     cityIndex:0,
     saveToastHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var init = myData.searchAddrFromAddrs(options.addrid)
    this.setData({
      data_name:init.name,
      data_phone:init.phone,
      data_province:init.province,
      data_city:init.city,
      data_addr:init.addr
    })
  },

  //省份
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      proviIndex: e.detail.value
    })
  },
  //城市
  bindCityPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cityIndex: e.detail.value
    })
  },
  submitForm: function (e) {
    console.log('保存成功')
    this.setData({
      saveToastHidden: false
    })
  },
  hideToast: function () {
    this.setData({
      saveToastHidden: true
    })
  }
})