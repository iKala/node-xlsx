'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Or var xlsx = require('node-xlsx').default;

var style = {
    alignment: {
        horizontal: 'center'
    },
    fill: {
        patternType: 'solid',
        fgColor: {
            rgb: 'FFC6EFCE'
        }
    }
};
var data = [[{ v: 'test', s: style }, 'test2']];

var buffer = _index2.default.build([{ name: "mySheetName", data: data }]); // Returns a buffer
_fs2.default.writeFileSync('test.xlsx', buffer);
//# sourceMappingURL=test.js.map