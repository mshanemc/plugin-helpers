import * as fs from 'fs-extra';
import { getParsed } from './xml2jsAsync';

export async function getExisting(targetFilename: string, subType: string, defaults?: object) {
    // get or create permset
    if (fs.existsSync(targetFilename)) {
        const existing = await getParsed(await fs.readFile(targetFilename));
        return existing[subType];
    }
    if (defaults) {
        return defaults;
    }
    throw new Error(`Not found: ${targetFilename}`);
}
