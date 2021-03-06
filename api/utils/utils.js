export default class Util {

	constructor() {

		this.statusCode = null;
		this.type = null;
		this.data = null;
		this.message = null;
	
	}

	setSuccess(data) {
		this.data = data;
		this.type = true;
	
	}

	setError(statusCode, message) {

		this.statusCode = statusCode;
		this.message = message;
		this.type = false;
	
	}

	send(res) {

		const result = {
			data: this.data
		};
		if (this.type) {

			return res.status(this.statusCode).json(res);
		
		}
		return res.status(this.statusCode).json({
			status: this.type,
			message: this.message
		});
	
	}

}
