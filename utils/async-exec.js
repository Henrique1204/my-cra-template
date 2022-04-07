const util = require('util');
const execNode = util.promisify(require('child_process').exec);

const exec = async (command, cb) => {
    try {
        const { stdout } = await execNode(command);

        console.log(stdout);

        cb?.();
    } catch(e) {
        console.log(e.message);

        throw e;
    }
};

module.exports = exec;
