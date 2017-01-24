
var KEY = 'MM72AkzHXdHpC8iP65VVEEVrJjp7zkgd';

var ds = require('loopback').createDataSource({connector: require('../'), key: KEY});

var Shodan = ds.createModel('shodan', {
    type: {type: String, id: true, required: true}
});

console.log(Shodan);

Shodan.search("port:80", function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
