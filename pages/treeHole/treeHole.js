// pages/index/index.js
// import lottie from 'lottie-miniprogram';
import {
  formatDate,
  formatWeek,
} from '../../utils/util';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.init();
  },
  // init() {
  //   if (this._inited) {
  //     return
  //   }
  //   wx.createSelectorQuery().selectAll('#c1').node(res => {
  //     const canvas = res[0].node
  //     const context = canvas.getContext('2d')

  //     canvas.width = 300
  //     canvas.height = 300

  //     lottie.setup(canvas)
  //     this.ani = lottie.loadAnimation({
  //       loop: true,
  //       autoplay: true,
  //       animationData: require('../../assets/json/empty.js'),
  //       rendererSettings: {
  //         context,
  //       },
  //     })
  //     this._inited = true
  //   }).exec()
  // },
  handleAdd() {
    wx.redirectTo({
      url: '../addPage/addPage',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const list = wx.getStorageSync('formDataList');
    const data = list && JSON.parse(list);
    if (data && data.length) {
      const res = data.map((i, index) => {
        return {
          ...i,
          date: formatDate(i.selectDate),
          week: formatWeek(i.selectDate)
        }
      })
      console.log('res', res);
      this.setData({
        list: res
      })
    }
  },
  tapItem: function (val) {
    console.log('val', val);
    const item = JSON.stringify(val.currentTarget.dataset.item);
    wx.navigateTo({
      url: `../addPage/addPage?item=${item}`,
    })
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