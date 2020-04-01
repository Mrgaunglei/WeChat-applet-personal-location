var QQMapWX = require('../../utils/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    message:{
      input: "",
      latitude: '',
      longitude: '',
      speed: '',
      accuracy: '',
      altitude: '',
      verticalAccuracy: '',
      horizontalAccuracy: ''
    }
  },
  getMyinput: function (e) {
    this.setData({
      input: e.detail.value
    })
    console.log(this.data.input)
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('myMap')
    qqmapsdk = new QQMapWX({
      key: 'LA2BZ-5R4EP-Q2ED7-VYR4L-65OTO-U2FTJ'
    })
    //定位
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy:true,
      highAccuracyExpireTime:'3200',
      altitude: true,//传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度。传入false就把altitude属性删掉
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        var altitude = res.altitude
        var verticalAccuracy = res.verticalAccuracy
        var horizontalAccuracy = res.horizontalAccuracy
        _this.setData({
          latitude: latitude,
          longitude: longitude,
          speed: speed,
          accuracy: accuracy,
          altitude: altitude,
          verticalAccuracy: verticalAccuracy,
          horizontalAccuracy: horizontalAccuracy
        })
      },
      fail: function () {
        wx.showToast({
          title: "定位失败",
          icon: "none"
        })
      },

      complete: function (r) {
        wx.hideLoading()
        console.log(r)
        console.log(222)
      }
      
    })
  },
  onReady: function () {
  },
  onShow: function () {
  
  },
  reload: function () {
    this.onLoad();
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
})