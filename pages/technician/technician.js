// pages/technician/technician.js
// 获取应用实例
var app=getApp()
var fileData = require('../../utils/data.js')
var util = require('../../utils/util')


Page({
  data: {
    casArray: ['美容','美发','美甲','美睫'],
    casIndex:0,
    addrArray: util.replacePhone(fileData.userData().addrs,false),
    addrIndex:0,
    skillData: fileData.getSkilledData(),

  },
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.skillData
    })
  },
  bindCasPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      casIndex : e.detail.value
    })
  },
  // 地址选择
  bindAddrPickerChange: function (e) {
    console.log('Category picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  detail:function( ){
    wx.navigateTo({
      url: '../technicain_detail/technicain_detail',
    })
  }
})