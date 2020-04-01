 const app=getApp()
Page({
  data: {
    about:"关于",
    txt:"点击登录",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
   onShow:function(){
     
     if(app.globalData.userInfo){
       this.setData({
         userInfo:app.globalData.userInfo,
         hasUserInfo:true
       })
     }else if(this.data.canIUse){
       app.userInfoReadyCanllback = res =>{
         this.setData({
           userInfo: res.userInfo,
           hasUserInfo: true
          })
       }
     }
     else(
       wx.getUserInfo({
         success: res=>{
           app.globalData.userInfo = res.userInfo,
             this.setData({
               userInfo:res.userInfo,
               hasUserInfo: true
             })
         }
       })
     )
   },
  getUserInfo: function (e) {
      wx.navigateTo({
        url: '../sorry/sorry',
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // 获取到用户信息后，调用wx.navigateBack()返回上一页，即个人中心页，wx.navigateBack()一定要在这个位置：
    wx.navigateBack()
  },
  login:function(){
    wx.navigateTo({
      url: '../sorry/sorry',
    })
  },
  //关于页面的点击
  about:function(){
     wx.navigateTo({
       url: '../about/about',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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