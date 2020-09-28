// pages/MaskPage/MaskPage.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    patientInfo: { name: null, phone: null, id: null, gender: null, address: null, company: null },
    maskRequest: { n95: false, quantity: 5 }

  },


  bindName: function (e) {
    this.data.patientInfo.name = e.detail.value;

    console.log(this.data.patientInfo.name);
  },
  bindPhone: function (e) {
    this.data.patientInfo.phone = e.detail.value;

    console.log(this.data.patientInfo.phone);
  },
  bindId: function (e) {
    this.data.patientInfo.id = e.detail.value;

    console.log(this.data.patientInfo.id);
  },
  bindGender: function (e) {
    this.data.patientInfo.gender = e.detail.value;
    console.log(this.data.patientInfo.gender);
  },
  bindAddress: function (e) {
    this.data.patientInfo.address = e.detail.value;

    console.log(this.data.patientInfo.address);
  },
  bindCompany: function (e) {
    this.data.patientInfo.company = e.detail.value;

    console.log(this.data.patientInfo.company);
  },

  nMask: function(e) {
    console.log(e.detail.value);
    if(e.detail.value == "m") {
      this.data.maskRequest.n95 = false;
    } else {
      this.data.maskRequest.n95 = true;
    }
    
  },
  maskNumber: function(e) {
    this.data.maskRequest.quantity = e.detail.value;
  },

  bindComfirm: function() {
    app.globalData.patientInfo = this.patientInfo;
    app.globalData.maskRequest = this.maskRequest;
    console.log(this.data.patientInfo);
    console.log(this.data.maskRequest);
    wx.navigateTo({
      url: "../ComfirmationPage/ComfirmationPage"
    });
  },
 

  bindHideKeyboard: function(e) {
    if (e.detail.value === "123") {
      // 收起键盘
      wx.hideKeyboard();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(app.globalData.userInfo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
