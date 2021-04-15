require('dotenv').config();

module.exports = {
	development: {
		database: 'news-backend',
		username: 'postgres',
		password: 'admin',
		host: '127.0.0.1',
		dialect: 'postgres'
	},

	docker: {
    database: 'dockerDB',
    username: 'postgres',
    password: null,
    host: 'postgres',
    dialect: 'postgres'
  },

	test: {
		database: 'news-backend',
		username: 'postgres',
		password: null,
		host: '127.0.0.1',
		dialect: 'postgres'
	},

	production: {
		database: 'news-backend',
		username: 'postgres',
		password: null,
		host: '127.0.0.1',
		dialect: 'postgres'
	}
};
