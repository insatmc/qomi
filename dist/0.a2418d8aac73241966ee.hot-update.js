webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(19)(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \".card {\\n  padding-top: 20px;\\n  margin: 10px 0 20px 0;\\n  background-color: rgba(214, 224, 226, 0.2);\\n  border-top-width: 0;\\n  border-bottom-width: 2px;\\n  -webkit-border-radius: 3px;\\n  -moz-border-radius: 3px;\\n  border-radius: 3px;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  box-shadow: none;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\n.card .card-heading {\\n  padding: 0 20px;\\n  margin: 0; }\\n\\n.card .card-heading.simple {\\n  font-size: 20px;\\n  font-weight: 300;\\n  color: #777;\\n  border-bottom: 1px solid #e5e5e5; }\\n\\n.card .card-heading.image img {\\n  display: inline-block;\\n  width: 46px;\\n  height: 46px;\\n  margin-right: 15px;\\n  vertical-align: top;\\n  border: 0;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%; }\\n\\n.card .card-heading.image .card-heading-header {\\n  display: inline-block;\\n  vertical-align: top; }\\n\\n.card .card-heading.image .card-heading-header h3 {\\n  margin: 0;\\n  font-size: 14px;\\n  line-height: 16px;\\n  color: #262626; }\\n\\n.card .card-heading.image .card-heading-header span {\\n  font-size: 12px;\\n  color: #999999; }\\n\\n.card .card-body {\\n  padding: 0 20px;\\n  margin-top: 20px; }\\n\\n.card .card-media {\\n  padding: 0 20px;\\n  margin: 0 -14px; }\\n\\n.card .card-media img {\\n  max-width: 100%;\\n  max-height: 100%; }\\n\\n.card .card-actions {\\n  min-height: 30px;\\n  padding: 0 20px 20px 20px;\\n  margin: 20px 0 0 0; }\\n\\n.card .card-comments {\\n  padding: 20px;\\n  margin: 0;\\n  background-color: #f8f8f8; }\\n\\n.card .card-comments .comments-collapse-toggle {\\n  padding: 0;\\n  margin: 0 20px 12px 20px; }\\n\\n.card .card-comments .comments-collapse-toggle a,\\n.card .card-comments .comments-collapse-toggle span {\\n  padding-right: 5px;\\n  overflow: hidden;\\n  font-size: 12px;\\n  color: #999;\\n  text-overflow: ellipsis;\\n  white-space: nowrap; }\\n\\n.card-comments .media-heading {\\n  font-size: 13px;\\n  font-weight: bold; }\\n\\n.card.people {\\n  position: relative;\\n  display: inline-block;\\n  width: 170px;\\n  height: 300px;\\n  padding-top: 0;\\n  margin-left: 20px;\\n  overflow: hidden;\\n  vertical-align: top; }\\n\\n.card.people:first-child {\\n  margin-left: 0; }\\n\\n.card.people .card-top {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  display: inline-block;\\n  width: 170px;\\n  height: 150px;\\n  background-color: #ffffff; }\\n\\n.card.people .card-top.green {\\n  background-color: #53a93f; }\\n\\n.card.people .card-top.blue {\\n  background-color: #427fed; }\\n\\n.card.people .card-info {\\n  position: absolute;\\n  top: 150px;\\n  display: inline-block;\\n  width: 100%;\\n  height: 101px;\\n  overflow: hidden;\\n  background: #ffffff;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\n.card.people .card-info .title {\\n  display: block;\\n  margin: 8px 14px 0 14px;\\n  overflow: hidden;\\n  font-size: 16px;\\n  font-weight: bold;\\n  line-height: 18px;\\n  color: #404040; }\\n\\n.card.people .card-info .desc {\\n  display: block;\\n  margin: 8px 14px 0 14px;\\n  overflow: hidden;\\n  font-size: 12px;\\n  line-height: 16px;\\n  color: #737373;\\n  text-overflow: ellipsis; }\\n\\n.card.people .card-bottom {\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  display: inline-block;\\n  width: 100%;\\n  padding: 10px 20px;\\n  line-height: 29px;\\n  text-align: center;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\n.card.hovercard {\\n  position: relative;\\n  padding-top: 0;\\n  overflow: hidden;\\n  text-align: center;\\n  background-color: rgba(214, 224, 226, 0.2); }\\n\\n.card.hovercard .cardheader {\\n  background: url(\\\"https://gomycode.tn/assets/images/logo.png\\\");\\n  background-size: cover;\\n  height: 135px; }\\n\\n.card.hovercard .avatar {\\n  position: relative;\\n  top: -50px;\\n  margin-bottom: -50px; }\\n\\n.card.hovercard .avatar img {\\n  width: 100px;\\n  height: 100px;\\n  max-width: 100px;\\n  max-height: 100px;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%;\\n  border: 5px solid rgba(255, 255, 255, 0.5); }\\n\\n.card.hovercard .info {\\n  padding: 4px 8px 10px; }\\n\\n.card.hovercard .info .title {\\n  margin-bottom: 4px;\\n  font-size: 24px;\\n  line-height: 1;\\n  color: #262626;\\n  vertical-align: middle; }\\n\\n.card.hovercard .info .desc {\\n  overflow: hidden;\\n  font-size: 12px;\\n  line-height: 20px;\\n  color: #737373;\\n  text-overflow: ellipsis; }\\n\\n.card.hovercard .bottom {\\n  padding: 0 20px;\\n  margin-bottom: 17px; }\\n\\n.btn {\\n  border-radius: 50%;\\n  width: 32px;\\n  height: 32px;\\n  line-height: 18px; }\\n\\n.btn-sm {\\n  margin-right: 5px; }\\n\\n.hr-style1 {\\n  height: 3px;\\n  background-color: blue;\\n  width: 70px; }\\n\\n.hr-style2 {\\n  height: 3px;\\n  background-color: deepskyblue; }\\n\\nh4 {\\n  color: #585353; }\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdHVkZW50Q2FyZC9TdHVkZW50Q2FyZC5jc3M/MTZjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMjQsIDIyNiwgMC4yKTtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uY2FyZCAuY2FyZC1oZWFkaW5nIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5jYXJkIC5jYXJkLWhlYWRpbmcuc2ltcGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogIzc3NztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1OyB9XFxuXFxuLmNhcmQgLmNhcmQtaGVhZGluZy5pbWFnZSBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDQ2cHg7XFxuICBoZWlnaHQ6IDQ2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgYm9yZGVyOiAwO1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblxcbi5jYXJkIC5jYXJkLWhlYWRpbmcuaW1hZ2UgLmNhcmQtaGVhZGluZy1oZWFkZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcblxcbi5jYXJkIC5jYXJkLWhlYWRpbmcuaW1hZ2UgLmNhcmQtaGVhZGluZy1oZWFkZXIgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogIzI2MjYyNjsgfVxcblxcbi5jYXJkIC5jYXJkLWhlYWRpbmcuaW1hZ2UgLmNhcmQtaGVhZGluZy1oZWFkZXIgc3BhbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzk5OTk5OTsgfVxcblxcbi5jYXJkIC5jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5jYXJkIC5jYXJkLW1lZGlhIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogMCAtMTRweDsgfVxcblxcbi5jYXJkIC5jYXJkLW1lZGlhIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNhcmQgLmNhcmQtYWN0aW9ucyB7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcXG4gIG1hcmdpbjogMjBweCAwIDAgMDsgfVxcblxcbi5jYXJkIC5jYXJkLWNvbW1lbnRzIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyB9XFxuXFxuLmNhcmQgLmNhcmQtY29tbWVudHMgLmNvbW1lbnRzLWNvbGxhcHNlLXRvZ2dsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDIwcHggMTJweCAyMHB4OyB9XFxuXFxuLmNhcmQgLmNhcmQtY29tbWVudHMgLmNvbW1lbnRzLWNvbGxhcHNlLXRvZ2dsZSBhLFxcbi5jYXJkIC5jYXJkLWNvbW1lbnRzIC5jb21tZW50cy1jb2xsYXBzZS10b2dnbGUgc3BhbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2FyZC1jb21tZW50cyAubWVkaWEtaGVhZGluZyB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5jYXJkLnBlb3BsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTcwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuXFxuLmNhcmQucGVvcGxlOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNhcmQucGVvcGxlIC5jYXJkLXRvcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cXG5cXG4uY2FyZC5wZW9wbGUgLmNhcmQtdG9wLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2E5M2Y7IH1cXG5cXG4uY2FyZC5wZW9wbGUgLmNhcmQtdG9wLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyN2ZlZDsgfVxcblxcbi5jYXJkLnBlb3BsZSAuY2FyZC1pbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTUwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAxcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4uY2FyZC5wZW9wbGUgLmNhcmQtaW5mbyAudGl0bGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDhweCAxNHB4IDAgMTRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICM0MDQwNDA7IH1cXG5cXG4uY2FyZC5wZW9wbGUgLmNhcmQtaW5mbyAuZGVzYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogOHB4IDE0cHggMCAxNHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcblxcbi5jYXJkLnBlb3BsZSAuY2FyZC1ib3R0b20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmNhcmQuaG92ZXJjYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMjQsIDIyNiwgMC4yKTsgfVxcblxcbi5jYXJkLmhvdmVyY2FyZCAuY2FyZGhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vZ29teWNvZGUudG4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTM1cHg7IH1cXG5cXG4uY2FyZC5ob3ZlcmNhcmQgLmF2YXRhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC01MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7IH1cXG5cXG4uY2FyZC5ob3ZlcmNhcmQgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cXG5cXG4uY2FyZC5ob3ZlcmNhcmQgLmluZm8ge1xcbiAgcGFkZGluZzogNHB4IDhweCAxMHB4OyB9XFxuXFxuLmNhcmQuaG92ZXJjYXJkIC5pbmZvIC50aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGNvbG9yOiAjMjYyNjI2O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5jYXJkLmhvdmVyY2FyZCAuaW5mbyAuZGVzYyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogIzczNzM3MztcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuXFxuLmNhcmQuaG92ZXJjYXJkIC5ib3R0b20ge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTdweDsgfVxcblxcbi5idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBsaW5lLWhlaWdodDogMThweDsgfVxcblxcbi5idG4tc20ge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG5cXG4uaHItc3R5bGUxIHtcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIHdpZHRoOiA3MHB4OyB9XFxuXFxuLmhyLXN0eWxlMiB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICM1ODUzNTM7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zcmMvY29tcG9uZW50cy9TdHVkZW50Q2FyZC9TdHVkZW50Q2FyZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ })

})