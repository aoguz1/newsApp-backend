require("dotenv").config();

module.exports = {
  development: {
    database: "news-backend",
    username: "postgres",
    password: "admin",
    host: "127.0.0.1",
    dialect: "postgres",
  },

  docker: {
    database: "dockerDB",
    username: "postgres",
    password: null,
    host: "postgres",
    dialect: "postgres",
  },

  test: {
    database: "news-backend",
    username: "postgres",
    password: null,
    host: "127.0.0.1",
    dialect: "postgres",
  },

  production: {
    use_env_variable: "DATABASE_URL",
    database: "d2b8p3c1e8eqb",
    username: "wlcvmyyiizjyiz",
    password:
      "77035062855ef723150aa39d307013d36499219d11a0ff20ac0326a42db41099",
    host: "ec2-3-212-75-25.compute-1.amazonaws.com",
    dialect: "postgres",
    ssl: true,
    protocol: "postgres",
    logging: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<< YOU NEED THIS
      },
    },
  },
};
