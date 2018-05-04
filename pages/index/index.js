var app = getApp()
var fileData = require('../../utils/data.js')
Page({
  data: {
    colors: ['red', 'orange', 'yellow', 'green', 'purple'],
    imgUrls: fileData.getBannerData(),
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular:true,
    navlist: fileData.getIndexNavData(),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId:1,
    curIndex:0
  },
  onLoad: function () {
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  switchtab:function(e){
    let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
    this.curIndex = parseInt(e.currentTarget.dataset.index)
    var that = this
    this.setData({
      curNavId: id,
      curIndex: index,
    })

  },
  bookTap:function(e){
    wx.navigateTo({
      url: '../book/book?aid=' + e.currentTarget.dataset.aid
    })
  },
  navigateDetail:function(e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  }
     
})