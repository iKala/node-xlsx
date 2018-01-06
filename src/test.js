import index from './index';
import fs from 'fs';
// Or var xlsx = require('node-xlsx').default;

const style = {
    alignment: {
        horizontal: 'center'
    },
    fill: {
        patternType: 'solid',
        fgColor: {
            rgb: 'FFC6EFCE'
        }
    }
}
const data = [[{v: 'test', s: style}, 'test2']];


const buffer = index.build([{name: "mySheetName", data: data}]); // Returns a buffer
fs.writeFileSync('test.xlsx', buffer);
