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
