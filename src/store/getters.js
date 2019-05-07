// 获取token
export const access_token = state => state.access_token;
// 获取用户信息
export const userInfo = state => state.userInfo;
// 获取帮助中心数据
export const helpdata = state => state.helpdata;
// 获取用户通知与私信
export const userdata = state => state.user_data;
// 获取当前标数据
export const thisbiao = state => state.thisbiao;
// 获取自动投标管理
export const aoto = state => state.aoto;
// 获取邀请好友链接
export const url = state => state.url;
// 获取邀请好友二维码
export const img = state => state.img;
// 获取提现手续
export const content = state => state.content;


/********************************************** */


// 获取用户余额信息
export const money = state => state.userInfo ? state.userInfo.money : "00.00";
// 获取邀请人电话 
export const invite_tel = state => state.invite_tel;
// 获取邀请经纪人
export const dealer = state => state.dealer;

