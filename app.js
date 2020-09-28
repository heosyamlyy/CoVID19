//app.js









App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    //this.globalData.dateMonth = [Date.getMonth(), Date.getDate()];
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });
  },
  //id, patient_id, spontaneous_asthma, intermission_asthma, allergic_asthma, bronchitis, breath_tachypnea, breath_frequency_increased, dry_cough, dry_cough_date, dry_cough_affected_sleep, breath_difficulty, fatigued, temperature, high_temperature_date, contacted_hubei, contacted_hubei_date, result
  globalData: {
    dateMonth : null,
    userInfo: null,
    //用于最终评分
    finalEvaluation: 0,
    //用于Appointment
    patientInfo: { name: null, phone: null, id: null, gender: null, address: null, company: null},
    appointment: {department : null},
    maskRequest: {n95 : false, quantity : null},
    condition: { spontaneous_asthma: false, intermission_asthma: false, allergic_asthma: false, cough: false, breath_tachypnea: false, cough_duration: 0, dry_cough: false, breath_difficulty: false, dry_cough_affected_sleep: false, fatigued: false, temperature: 370, fever_duration: 0, contacted_high_risk: false, contacted_high_risk_date: [-1, -1], post_contact_duration: -1, result: 0}
  },
  updateFinalEvaluation: function (bool, value) {
    if (bool == true) {
      this.globalData.finalEvaluation += value;
    } else {
      this.globalData.finalEvaluation -= value;
    }
    console.log(this.globalData.condition)
    console.log(bool)
  },
});
