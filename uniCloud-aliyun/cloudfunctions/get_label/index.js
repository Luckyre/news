'use strict';

	// 获取数据库引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	let label = await db.collection('label').get() 	
	
	console.log('label : ', label)
	//返回的数据给客户端
	return{
		code: 200,
		msg: '数据请求成功',
		data: label.data
	}
	
	
	//返回数据给客户端
	return event
};
