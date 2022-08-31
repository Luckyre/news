'use strict';
// 获取数据库引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	
	
	const list = db.collection('article').field({
	'content':false
	}).get() // 关联article 表
	
	//event为客户端上传的参数
	console.log('list : ', list)
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
	
};
