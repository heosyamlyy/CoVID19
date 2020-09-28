// pages/TempPage/TempPage.js

const app = getApp();
const date = new Date()
const months = []
const days = []



for (let i = 1; i <= 4; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bodyTempResult: '您当前的体温被判定为正常',
    months: months,
    month: date.getMonth() +1,
    imgSrc: "../image/normal.jpg",
    days: days,
    day: date.getDate(),
    value: [date.getMonth(), date.getDate() -1],
    time: "",
    feverInterval: 0,
    feverConstant : 1,
    bodyTemperature : 370,
    feverDateAppear : false
  },
  //这个function中邪了完全无法调用
  fromDate: function () {
    var currentDay = date.getDate() + 1;
    var currentMonth = date.getMonth() + 1;
    var monthInterval = currentMonth - this.data.month;
    if (monthInterval > 0) {
      currentDay += monthInterval * 31;
    }
    this.data.feverInterval = currentDay - this.data.day;
    console.log(currentMonth - this.data.month);
  },

  bindVisitHistory: function(e) {
    this.fromDate();
  
    console.log(this.data.feverInterval);
    if (this.data.feverInterval > 0 ){
      app.globalData.finalEvaluation += (this.data.feverInterval * this.data.feverConstant); 
      console.log(app.globalData.finalEvaluation);
    }
    

    //this.changeCondition(e, app.globalData.condition.temperature, this.data.bodyTemperature);
    app.globalData.condition.temperature = this.data.bodyTemperature;
    console.log("app.globalData.condition.temperature : " + app.globalData.condition.temperature);
    //this.changeCondition(e, app.globalData.condition.fever_duration, this.data.feverInterval);
    app.globalData.condition.fever_duration = this.data.feverInterval;
    console.log("app.globalData.condition.fever_duration : " + app.globalData.condition.fever_duration);
    wx.navigateTo({
      url: "../VisitHistoryPage/VisitHistoryPage"
    });
  },

  changeCondition : function(e, conditionType, target) {
    
    conditionType = target;
    console.log("app.globalData.condition.conditionType : " + conditionType);
  },

  dateSelect: function(e) {
    console.log(e);
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
     
      month: this.data.months[val[0]],
      day: this.data.days[val[1]]
    })
    console.log(val);
  },



  tempUpdate: function(e) {
    var bodyTemp = e.detail.value;
    var btl = ['您当前的体温被判定为低烧', '您当前的体温被判定为高烧!!!', '您当前的体温被判定为正常'];
    var imgList = ["../image/normal.jpg", "../image/lowFever.jpeg", "../image/highFever.jpg"];
    console.log(bodyTemp);
    if (bodyTemp > 37 && bodyTemp < 38.5) {
      this.setData({
        bodyTempResult: btl[0],
        feverConstant: 1,
        imgSrc : imgList[1],
        feverDateAppear : true,
        bodyTemperature : (bodyTemp * 10)
      });
      app.globalData.finalEvaluation += 12;
    } else if (bodyTemp > 38.5) {
      this.setData({
        bodyTempResult: btl[1],
        feverConstant : 1,
        imgSrc: imgList[2],
        feverDateAppear: true,
        bodyTemperature: (bodyTemp * 10)
      });
      app.globalData.finalEvaluation += 15;
    } else {
      this.setData({
        bodyTempResult: btl[2],
        imgSrc: imgList[0],
        bodyTemperature: (bodyTemp * 10)

      });
    }
  },

  checkboxChangePosTwo: function(e) {
    app.updateFinalEvaluation(e.detail.value, 2);
  },
  //fatigued
  bindfatigued: function (e) {
    this.checkboxChangePosTwo(e);
    app.globalData.condition.fatigued = !app.globalData.condition.fatigued;
    console.log("app.globalData.condition.fatigued : " + app.globalData.condition.fatigued);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var currentMonth = date.getMonth() + 1;
    console.log(currentMonth);
    var currentDay = date.getDate();
    this.data.month = currentMonth;
    this.data.day = currentDay;
    console.log(this.data);
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