const util = require('util');
const execNode = util.promisify(require('child_process').exec);

const exec = async (command, feedback) => {
    try {
        const { stdout } = await execNode(command);

        console.log(stdout);

        feedback && console.log(feedback);
    } catch({ message }) {
        console.log(message);
    }
};

module.exports = exec;
