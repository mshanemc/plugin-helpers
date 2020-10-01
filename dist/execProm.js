import { exec } from 'child_process';
import * as stripcolor from 'strip-color';
import * as util from 'util';
const execProm = util.promisify(exec);
// tslint:disable-next-line: no-any
const exec2JSON = async (cmd, options = {}) => {
    try {
        const results = await execProm(cmd, options);
        return JSON.parse(stripcolor(results.stdout));
    }
    catch (error) {
        // console.log(error);
        return JSON.parse(stripcolor(error.stdout));
    }
};
// tslint:disable-next-line: no-any
const exec2String = async (cmd, options = {}) => {
    try {
        const results = await execProm(cmd, options);
        return results.stdout.trim();
    }
    catch (error) {
        // console.log(error);
        return error.stdout;
    }
};
export { execProm, exec2JSON, exec2String };
export { execProm as exec };
