//index.js
const app = getApp()

Page({
  scanCode(){
    wx.scanCode({
      scanType:'qrCode',
      success: function (result, scanType, charSet, path, rawData){
        console.log(result, scanType, charSet, path, rawData)
      }
    })
  }
})
