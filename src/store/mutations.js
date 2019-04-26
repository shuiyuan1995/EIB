import * as types from "./mutation-types";

const mutations = {
  // 设置token
  [types.SET_TOKEN](state, token) {
    state.access_token = token;
  },
  // 设置用户信息
  [types.SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
  },
  // 设置帮助中心数据
  [types.SET_HELPDATA](state, helpdata) {
    state.helpdata = helpdata;
  },
  // 设置用户通知与私信
  [types.SET_USER_DATA](state, user_data) {
    state.user_data = user_data;
  },
  // 设置当前标数据
  [types.SET_THIS_BIAO](state, thisbiao) {
    state.thisbiao = thisbiao;
  },


  /************************************* */
  // 设置邀请人电话
  [types.SET_INVITE_TEL](state, invite_tel) {
    state.invite_tel = invite_tel;
  },
  // 设置邀请经销商
  [types.SET_DEALER](state, dealer) {
    state.dealer = dealer;
  }
};

export default mutations;
