import * as fs from 'fs-extra';
import * as jsToXml from 'js2xmlparser';
const standardOptions = {
    declaration: {
        include: true,
        encoding: 'UTF-8',
        version: '1.0'
    },
    format: {
        doubleQuotes: true
    }
};
const writeJSONasXML = async ({ path, json, type, options = standardOptions }) => {
    const xml = jsToXml.parse(type, fixExistingDollarSign(json), options);
    await fs.writeFile(path, xml);
};
const fixExistingDollarSign = (existing) => {
    const existingCopy = { ...existing };
    if (existingCopy.$) {
        const temp = existingCopy.$;
        delete existingCopy.$;
        existingCopy['@'] = temp;
    }
    return existingCopy;
};
export { writeJSONasXML, standardOptions, fixExistingDollarSign };
