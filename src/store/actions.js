import * as types from "./mutation-types";

const mutations = {
  [types.SET_INVITE]({commit}, {dealer, invite_tel}) {
    commit(types.SET_INVITE_TEL, invite_tel);
    commit(types.SET_DEALER, dealer)
  }
};

export default mutations;