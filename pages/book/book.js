// pages/book/book.js
var app = getApp()
var mydata = require('../../utils/data.js')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      addrArray:util.replacePhone(mydata.userData().addrs,true),
      addrIndex:0,
      date:'2016-1-10',
      time:'09:00',
      bookToastHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      artype:options.artype
    })
  },
  bindAddrPickerChange: function (e) {
    console.log('Addrpicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      addrIndex: e.detail.value
    })
  },
  bindTimeChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindToastTap:function(){
    console.log('预定成功')
    this.setData({
      bookToastHidden:false
    })
  },
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  }
})