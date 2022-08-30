// 批量导出文件
const requireApi = require.context(
	// api 目录的相对路径
	'.',
	// 是否查询子目录
	false,
	// 查询文件的一个后缀
	/.js$/
)

let module = {}
// console.log('requireApi',requireApi.keys()) // ["./index.js","./list.js"]
requireApi.keys().forEach((key,index)=>{
	if(key === './index.js') return
	console.log(key,'requireApi(key)',requireApi(key));
	Object.assign(module,requireApi(key))
})
// 相当于遍历循环除了.index.js下的其他文件的 export导出方法，然后通过模块化导出、挂载在vue.prototype原型上，，也相当与全局导出了
export default module


// import {get_label, get_list} from './list.js'