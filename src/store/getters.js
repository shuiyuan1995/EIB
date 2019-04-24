// 获取token
export const access_token = state => state.access_token;
// 获取帮助中心数据
export const helpdata = state => state.helpdata;
/********************************************** */


// 获取用户信息
export const userInfo = state => state.userInfo;

// 获取用户余额信息
export const money = state => state.userInfo ? state.userInfo.money : "00.00";
// 获取邀请人电话 
export const invite_tel = state => state.invite_tel;
// 获取邀请经纪人
export const dealer = state => state.dealer;

