import { rejects } from 'assert';
import store from '../store/index.js';
export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj = {
		// user_id: store.state.userinfo._id,
		user_id: '630c8cb7f866a700016c316e',
		...data
	}
	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then((res) => {

			if (res.result.code === 200) {
				// .then
				reslove(res.result)
			} else {
				// catch
				reject(res.result)
			}

		}).catch((err) => {
			reject(err)
		})
	})
}

