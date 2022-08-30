// vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源

	state: {
		userinfo: uni.getStorageSync('USERINFO') || {}, //从本地缓存中同步获取指定 key 对应的内容。
		historyLists: uni.getStorageSync("__history") || []
	},
	
	// mutations
})

export default store