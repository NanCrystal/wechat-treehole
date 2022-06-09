// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['/assets/images/bgc_12.jpg', '/assets/images/bgc_08.jpg', '/assets/images/bgc_14.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    circular: true, //是否采用衔接滑动
    easing: 'easeInOutCubic', //
    welcome: "/assets/images/img_welcome.png",
    animationData: {},
    backgroundColor: ['#616264', '#b5becd', '#bdb3a6'],
    frontColor: '#ffffff',
    barDuration: 1500,
    barFunc: 'easeInOut'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      wx.redirectTo({
        url: '../treeHole/treeHole',
      })
    }, 1000);
    // const {
    //   frontColor,
    //   backgroundColor,
    //   barDuration,
    //   barFunc
    // } = this.data
    // wx.setNavigationBarColor({
    //   frontColor,
    //   backgroundColor: '#616264',
    //   animation: {
    //     duration: barDuration,
    //     timingFunc: barFunc
    //   }
    // })
  },
  initBarColor: function (index) {
    // console.log(index);
    // const {
    //   frontColor,
    //   backgroundColor,
    //   barDuration,
    //   barFunc
    // } = this.data
    // wx.setNavigationBarColor({
    //   frontColor,
    //   backgroundColor: backgroundColor[index],
    //   animation: {
    //     duration: barDuration,
    //     timingFunc: barFunc
    //   }
    // })
  },
  // 指定 swiper 切换缓动动画类型
  // easing: function () {

  // },
  // handleChange: function (event) {
  // console.log('event', event);
  // const {
  //   current,
  //   source
  // } = event.detail;
  // this.initBarColor(current)

  // current === 2 && this.setData({
  //   autoplay: false
  // })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  // scale: function () {
  //   this.animation.scale(Math.random() * 2).opacity(0.9).step()
  //   this.setData({
  //     animation: this.animation.export()
  //   })
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  onPass: function () {

    // wx.setStorageSync('isFirst', true);
    // wx.redirectTo({
    //   url: '../treeHole/treeHole',
    // })
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