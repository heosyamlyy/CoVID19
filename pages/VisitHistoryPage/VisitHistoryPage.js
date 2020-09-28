// pages/VisitHistoryPage/VisitHistoryPage.js


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
    months: months,
    month: date.getMonth(),
    days: days,
    day: date.getDate(),
    value: [date.getMonth() - 1, date.getDate() - 1],
    time: "",
    visitDate: 100,
    appearDate : false
  },

  fromDate: function () {
    var currentDay = date.getDate() + 1;
    var currentMonth = date.getMonth() + 1;
    var monthInterval = currentMonth - this.data.month;
    if (monthInterval > 0) {
      currentDay += monthInterval * 31;
    }
    var duration = currentDay - this.data.day;
    this.setData({
      visitDate : duration
    })
   
    console.log(currentMonth - this.data.month);
  },

  bindResult: function(e) {
    this.fromDate();
    if (this.data.visitDate < 15) {
      console.log("!!!");
      app.globalData.finalEvaluation += 4;
      //this.changeCondition(e, app.globalData.condition.contacted_high_risk_date, this.data.value);
      //this.changeCondition(e, app.globalData.condition.post_contact_duration, this.data.visitDate);
      app.globalData.condition.post_contact_duration = this.data.visitDate;
      console.log("app.globalData.condition.contacted_high_risk : " + app.globalData.condition.post_contact_duration);
      app.globalData.condition.contacted_high_risk_date = this.data.value;
      app.globalData.condition.contacted_high_risk_date[0] += 2;
      console.log("app.globalData.condition.contacted_high_risk : " + app.globalData.condition.contacted_high_risk_date);
    }
    //this.changeCondition(e, app.globalData.condition.final_evaluation, app.globalData.finalEvaluation);
    app.globalData.condition.result = app.globalData.finalEvaluation;
    console.log("app.globalData.condition.app.globalData.result : " + app.globalData.condition.result);
    console.log
    wx.navigateTo({
      url: "../Result/Result"
    });
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({

      month: this.data.months[val[0]],
      day: this.data.days[val[1]]
    })
    console.log(val);
  },
  bindContacted: function(e) {
    this.checkboxChangePosTwo(e);
    this.setData({
      appearDate: true
    })
    //this.changeCondition(e, app.globalData.condition.contacted_high_risk, e.detail.value);
    app.globalData.condition.contacted_high_risk = e.detail.value
    console.log("app.globalData.condition.contacted_high_risk : " + app.globalData.condition.contacted_high_risk);
  },

  changeCondition: function (e, conditionType, target) {
    conditionType = target;
    console.log("app.globalData.condition.conditionType : " + conditionType);
  },

  checkboxChangePosTwo: function (e) {
    app.updateFinalEvaluation(e.detail.value, 2);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

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
