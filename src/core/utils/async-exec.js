const { exec: execNode } = require("./async-functions");

const exec = async (command, cb) => {
  try {
    const { stdout } = await execNode(command);

    console.log(stdout);

    cb && cb();
  } catch (e) {
    console.log(e.message);

    throw e;
  }
};

module.exports = exec;
