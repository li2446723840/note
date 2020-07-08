import fs from 'fs';
import path from 'path';

let mock = {}
fs.readdirSync(path.join(__dirname + '/mock')).forEach(function (file) {
    if (file.match(/\.js$/)) {
        Object.assign(mock, require('./mock/' + file))
    }
})
export default mock;