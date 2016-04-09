var nodeunit = require('nodeunit');

var path = require('path'),
    mecab = require(path.resolve('mecab'));

var text = '아버지가방에들어가신다';

exports.mecab = {
    'pos': function (test) {
        test.expect(2);

        mecab.pos(text, function (err, result) {
            test.equals(result.length, 6);
            test.equals(result[0].length, 2);
            test.done();
        });
    },

    'morphs': function (test) {
        test.expect(2);

        mecab.morphs(text, function (err, result) {
            test.equals(result.length, 6);
            test.equals(result[0], '아버지');
            test.done();
        });
    },

    'nouns': function (test) {
        test.expect(1);

        mecab.nouns(text, function (err, result) {
            test.equals(result.length, 2);
            test.done();
        });
    }
};
