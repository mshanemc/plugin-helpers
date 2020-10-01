import { exec, exec2JSON, exec2String } from './execProm';
import { getParsed } from './xml2jsAsync';
import { writeJSONasXML, standardOptions, fixExistingDollarSign } from './JSONXMLtools';
import { singleRecordQuery } from './queries';
import { setupArray } from './setupArray';
import { file2CV } from './localFile2CV';

export { exec, exec2JSON, exec2String, getParsed, writeJSONasXML, standardOptions, fixExistingDollarSign, singleRecordQuery, setupArray, file2CV };
