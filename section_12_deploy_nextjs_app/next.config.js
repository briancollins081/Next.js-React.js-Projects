const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongo_username: "andere",
        mongo_password: "hqxDNGbBGr2KNW2N",
        mongo_db_cluster: "cluster0",
        mongo_dbname: "nextjs-course-blog-dev",
      },
    };
  }
  return {
    env: {
      mongo_username: "andere",
      mongo_password: "hqxDNGbBGr2KNW2N",
      mongo_db_cluster: "cluster0",
      mongo_dbname: "nextjs-course-blog",
    },
  };
};
