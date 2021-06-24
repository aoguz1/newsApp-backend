/**
 * @typedef NewsReq
 * @property {string} title
 * @property {string} news_text
 */

import Util from '../../utils/utils';
import NewsService from '../service/NewsService';

const util = new Util();

class LoginController {

	/**
	 * @route GET /public/v1/News/
	 * @group Public/News
	 * @summary Haberleri getirir.
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
	static async getNews(req, res) {
		try {
			const result = await NewsService.getNews();
			if (!result.type) {
				util.setError(200, result.message);
				return util.send(res);
			}
			util.setSuccess(result.data);
			return util.send(res);
		}
		catch (error) {
			util.setError(400, error.message);
			return util.send(res);
		}
	}

	/**
	 * @route POST /public/v1/News/
	 * @group Public/News
	 * @summary Haber oluşturur.
	 * @param {NewsReq.model} body.body 
	 * @returns {object} 200 - Success message 
	 * @returns {Error} default - Unexpected error 
	 */
	static async postNews(req, res){
		try {
			const result = await NewsService.postNews(req.body);
			if (!result.type) {
				util.setError(200, result.message);
				return util.send(res);
			}
			util.setSuccess(200, result.message);
			return util.send(res);
		}
		catch (error) {
        
			util.setError(400, error.message);
			return util.send(res);  
		}
	}

}

export default LoginController;
