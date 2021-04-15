/* eslint-disable camelcase */
import db from '../../src/models';
class NewsService {

	static async getNews() {
		try {
			const result = await db.News.findAll();
			// News tablosundaki tüm dataları çekme işlemi
			return {
				type: true,
				message: 'Haberler verileri alındı',
				data: result
			};
		}
		catch (error) {
			throw error;
		}
	}

	static async postNews(body) {
		try {
			const result = await db.News.create(body);
			if (result.length === 0) {
				return {
					type: false,
					message: 'Veri tabanına kayıt yapılamadı'
				};
			}
			return {
				type: true,
				message: 'Kayıt başarılı'
			};
		}
		catch (error) {
			throw error;
		}
	}

}
export default NewsService;