// pages/user/user.js
var app = getApp()
var myData = require('../../utils/data.js')
var util = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: myData.userData(),
    addrDate: util.replacePhone(myData.userData().addrs, true)              
  },
  // 地址编辑
  editAddr:function(e){
    wx.navigateTo({
      url: '../addr/addr?addrid='+e.currentTarget.dataset.addrid
    })
  }

})