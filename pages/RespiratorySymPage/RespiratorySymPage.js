//index.js
//获取应用实例


const app = getApp();
const date = new Date()
const months = []
const days = []

for (let i = 1; i <= 12; i++) {
  months.push(i);
}

for (let i = 1; i <= 31; i++) {
  days.push(i);
}

Page({
  data: {
    items: [
      {value: "自发性哮喘" },
      { value: "间歇性哮喘" },
      {value: "支气管扩张" }
    ],
    
    switch1Checked: true,
    switch2Checked: false,
    coughRelated: false,
    breathRelated: false,
    sleepAffected: false,
    switch1Style: "",
    switch2Style: "text-decoration: line-through",
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    value: [date.getMonth(), date.getDate() -1],
    time: "",
    sickInterval: 0
  },
  checkboxChangeNeg: function(e) {
    console.log(this.data.coughRelated);
    app.updateFinalEvaluation(e.detail.value, -2);
  },
  fromDate: function () {
    var currentDay = date.getDate() + 1;
    var currentMonth = date.getMonth() + 1;
    var monthInterval = currentMonth - this.data.month;
    if (monthInterval > 0) {
      currentDay += monthInterval * 31;
    }
    this.data.sickInterval = currentDay - this.data.day;
    console.log(currentMonth - this.data.month);
  },

  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      month: this.data.months[val[0]],
      day: this.data.days[val[1]]
    })
    console.log(val);
  },

  bindspontaneous_asthma: function(e) {
    this.checkboxChangeNeg(e);
    app.globalData.condition.spontaneous_asthma = !app.globalData.condition.spontaneous_asthma;
    console.log("app.globalData.condition.spontaneous_asthma : " + app.globalData.condition.spontaneous_asthma);
  },
  //intermission_asthma
  bindintermission_asthma: function (e) {
    this.checkboxChangeNeg(e);
    app.globalData.condition.intermission_asthma = !app.globalData.condition.intermission_asthma;
    console.log("app.globalData.condition.intermission_asthma : " + app.globalData.condition.intermission_asthma);
    console.log(e.detail);
  },
  //allergic_asthma
  bindallergic_asthma : function(e) {
    this.checkboxChangeNeg(e);
    app.globalData.condition.allergic_asthma = !app.globalData.condition.allergic_asthma;
    console.log("app.globalData.condition.allergic_asthma : " + app.globalData.condition.allergic_asthma);
    console.log(e);
  },

  bindCough: function(e) {
    this.checkboxChangePosTwo(e);
    this.setData({
      coughRelated : true
    });
    console.log(this.data.coughRelated);
    app.globalData.condition.cough = !app.globalData.condition.cough;
    console.log("app.globalData.condition.cough : " + app.globalData.condition.cough);
  },
  bindDryCough : function(e) {
    this.checkboxChangePosTwo(e);
    console.log(e.detail.value);
    app.globalData.condition.dry_cough = !app.globalData.condition.dry_cough;
    console.log("app.globalData.condition.dry_cough : " + app.globalData.condition.dry_cough);
  },

  bindBreathFaster: function(e) {
    this.checkboxChangePosTwo(e);
    this.setData({
      breathRelated: true
    });
    console.log(this.data.breathRelated);
    app.globalData.condition.breath_tachypnea = !app.globalData.condition.breath_tachypnea;
    console.log("app.globalData.condition.breath_tachypnea : " + app.globalData.condition.breath_tachypnea);
  },

  //breath_difficulty
  bindBreathDifficult: function(e) {
    this.checkboxChangePosTwo(e);
    this.setData({
      sleepAffected: true
    });
    console.log(this.data.sleepAffected);
    app.globalData.condition.breath_difficulty = !app.globalData.condition.breath_difficulty;
    console.log("app.globalData.condition.breath_difficulty : " + app.globalData.condition.breath_difficulty);
  },

  bindSleepAffected: function(e) {
    this.checkboxChangePosTwo(e);
    app.globalData.condition.dry_cough_affected_sleep = !app.globalData.condition.dry_cough_affected_sleep;
    console.log("app.globalData.condition.dry_cough_affected_sleep : " + app.globalData.condition.dry_cough_affected_sleep);
  },
  checkboxChangePosTwo: function (e) {
    app.updateFinalEvaluation(e.detail.value, 2);
    console.log(e.detail.value);
  },

  bindTempTap: function() {
    this.fromDate();
    console.log(this.data.sickInterval);
    if (this.data.sickInterval > 7 && this.data.sickInterval < 14) {
      app.globalData.finalEvaluation += 2;
    } else if (this.data.sickInterval >= 14) {
      app.globalData.finalEvaluation += 3;
    }
    app.globalData.condition.cough_duration = this.data.sickInterval - 1;
    console.log("app.globalData.condition.cough_duration : " + app.globalData.condition.cough_duration);
    
    wx.navigateTo({
      url: "../TempPage/TempPage"
    });
  }
});
