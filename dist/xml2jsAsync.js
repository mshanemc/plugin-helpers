import * as xml2js from 'xml2js';
// tslint:disable-next-line: no-any
const getParsed = async (xmlToParse, explicitArray = false) => {
    const parser = new xml2js.Parser({ explicitArray });
    return new Promise((resolve, reject) => {
        // tslint:disable-next-line: no-any
        parser.parseString(xmlToParse, (err, json) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(json);
            }
        });
    });
};
export { getParsed };