// pages/addPage.js
import {
  fetchIndex
} from '../../utils/util';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectDate: '',
    title: '',
    content: '',
    bgc: '../../assets/images/upload.png',
    // bgc: '../../assets/images/bgc_01.png',
    id: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton();

    const val = options.item && JSON.parse(options.item);
    console.log('options', val);
    if (val) {
      this.setData({
        ...val,
        isEdit: val.id !== null
      })
    }

  },
  onShow: function () {

  },

  onDelete: function () {
    let list = wx.getStorageSync('formDataList');
    const data = JSON.parse(list);
    console.log('delete1', data, this.data);
    if (list) {
      const deleteIndex = fetchIndex(data, this.data.id);
      console.log('deleteIndex', deleteIndex);
      data.splice(deleteIndex, 1);
      console.log('list===', data);
      wx.setStorageSync('formDataList', JSON.stringify(data));
      wx.redirectTo({
        url: '../treeHole/treeHole',
      })
    }
  },

  deleteItem: function () {
    const _this = this
    wx.showModal({
      title: '提示',
      content: '确定删除此条记录吗？',
      success(res) {
        if (res.confirm) {
          _this.onDelete();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  submit: function (params) {

    const list = wx.getStorageSync('formDataList');
    let data = list ? JSON.parse(list) : [];
    const urlIndex = Math.floor(Math.random() * 10 + 1);
    const uuid = (new Date()).getTime();

    if (list) {
      const currentyId = !!data.length ? data[data.length - 1].id + 1 : 0;
      const current = [{
        ...params,
        id: currentyId,
        urlIndex,
        uuid
      }]
      data = current.concat(data);
      const item = JSON.stringify(data)
      console.log('有缓存-添加', item);
      wx.setStorageSync('formDataList', item);
    } else {
      data.push({
        ...params,
        urlIndex,
        uuid,
        id: 0
      })
      const item = JSON.stringify(data)
      console.log('无缓存-添加', item);
      wx.setStorageSync('formDataList', item);
    }
  },
  editDetail: function (params) {
    let list = wx.getStorageSync('formDataList');
    const data = list && JSON.parse(list);
    console.log('编辑', params, data);
    if (data) {
      const deleteIndex = fetchIndex(data, this.data.id);
      console.log('缓存找到的id', deleteIndex);
      data.splice(deleteIndex, 1, params);
      console.log('替换后的缓存列表', data);
      wx.setStorageSync('formDataList', JSON.stringify(data));
      wx.redirectTo({
        url: '../treeHole/treeHole',
      })
    }
  },
  formSubmit: function (e) {
    const payLoad = e.detail.value;
    console.log('payLoad', payLoad);
    if (!this.valid(payLoad)) {
      return wx.showToast({
        title: '页面未做任何更改，请填写内容？',
        icon: 'none'
      })

    };
    const {
      isEdit
    } = this.data;

    isEdit ? this.editDetail(payLoad) : this.submit(payLoad);

    wx.redirectTo({
      url: '../treeHole/treeHole',
    })
  },
  formCancel: function (e) {

    wx.redirectTo({
      url: '../treeHole/treeHole',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindDateChange: function (e) {
    console.log('e.detail.value', e.detail.value);
    this.setData({
      selectDate: e.detail.value
    })
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
  valid: function (value) {
    const {
      selectDate,
      title,
      content
    } = value;
    if (!selectDate && !title && !content) {
      return false;
    }
    return true;
  },
  // BeaforeUnLoad() {
  //   const {
  //     date,
  //     title,
  //     content,
  //   } = this.data;
  //   const isShow = !!date || !!title || !!content;
  //   console.log('isShow', isShow);
  //   wx.enableAlertBeforeUnload({
  //     message: "内容已被修改，是否将此存为草稿？",
  //     success: function (res) {
  //       console.log("方法注册成功：", res);
  //     },
  //     fail: function (errMsg) {
  //       console.log("方法注册失败：", errMsg);
  //     },
  //   });
  // },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');

    // const _this = this
    // const {
    //   info
    // } = _this.data;
    // if (!!info.date || !!info.title || !!info.content) {
    //   return wx.showModal({
    //     title: '提示',
    //     content: '当前页面未保存，是否保存为草稿？',
    //     success: function (res) {
    //       console.log('res', res);
    //       if (res.confirm) {
    //         console.log('info', info);
    //         wx.redirectTo({
    //           url: '../treeHole/treeHole',
    //         })
    //       } else if (res.cancel) {

    //         wx.redirectTo({
    //           url: '../treeHole/treeHole',
    //         })
    //       }
    //     }
    //   })
    // } else {
    //   wx.redirectTo({
    //     url: '../treeHole/treeHole',
    //   })
    // }

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