//test
/*export const increment = ({commit}) => {
   commit('INCREMENT')
};
export const decrement = ({commit}) => {
   commit('DECREMENT')
};*/

export const getWindowHeight = ({commit}, winH) => {
   commit("GETWINDOWHEIGHT", winH)
};

export const getNoticeNum = ({commit}, noticeNum) => {
   commit("GETNOTICENUM", noticeNum)
};

export const getAutoLogin = ({commit}, autoLogin) => {
   commit("GETAUTOLOGIN", autoLogin)
};

export const getOpenId = ({commit}, openId) => {
   commit("GETOPENID", openId)
};

export const getTargetPage = ({commit}, targetPage) => {
   commit("GETTARGETPAGE", targetPage);
};

export const getId = ({commit}, id) => {
   commit("GETID", id);
};