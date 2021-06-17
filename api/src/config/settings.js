import swaggerEnv from "./swaggerEnv";
const env = process.env.NODE_ENV ? process.env.NODE_ENV : "development";

module.exports = {
  title: "News API",

  swaggerOptions: {
    swaggerDefinition: {
      info: {
        description: "News API",
        title: "News API",
        version: "1.0.0",
      },
      host: swaggerEnv[env]["host"],
      basePath: "",
      produces: ["application/json", "application/xml"],
      schemes: swaggerEnv[env]["address"],
    },
    basedir: __dirname, // app absolute path
    files: ["../../public/controller/**/*.js"],
  },
};
