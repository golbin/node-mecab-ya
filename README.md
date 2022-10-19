# mecab-ko-ts

## Table of Content

- [mecab-ko-ts](#mecab-ko-ts)
  - [Table of Content](#table-of-content)
  - [About](#about)
  - [Install](#install)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Examples](#examples)
    - [JavaScript](#javascript)
    - [TypeScript](#typescript)
    - [Sync](#sync)
- [License](#license)

## About

`mecab-ko-ts` is an updated version of [`mecab-ya`](https://github.com/golbin/node-mecab-ya).  
The TypeScript support and Sync feature have been updated.


Yet another mecab wrapper for nodejs and the main purpose is easy to use.  
[Mecab](http://taku910.github.io/mecab/) is a morphological analyzer for Japanease language.  
And you can use this for Korean language with [mecab-ko](https://bitbucket.org/eunjeon/mecab-ko/).

## Install

```bash
$ npm install mecab-ko-ts
```

## Requirements

You need mecab or mecab-ko for Korean language.

If you don't have mecab yet, you can install with the prepared script.

```bash
$ node_modules/mecab-ko-ts/bin/install-mecab
```

For the Korean language.

```bash
$ node_modules/mecab-ko-ts/bin/install-mecab ko
```

## Usage

mecab-ko-ts use the mecab library in the `node_modules/mecab-ko-ts/mecab` directory.

But, you can set a mecab library path like below.

```
MECAB_LIB_PATH=/usr/local/lib node index.js
```

OR

```
MECAB_LIB_PATH=/usr/local/lib/mecab-ko node index.js
```

So, you can select a mecab library for specific language when you use this and you can distribute this as a builtin library for AWS Lambda like that.

## Examples

### JavaScript

```js
var mecab = require("mecab-ko-ts");

var text = "아버지가방에들어가신다";

mecab.pos(text, function (err, result) {
    console.log(result);
    /*
        [ [ '아버지', 'NNG' ],
          [ '가', 'JKS' ],
          [ '방', 'NNG' ],
          [ '에', 'JKB' ],
          [ '들어가', 'VV' ],
          [ '신다', 'EP+EC' ] ]
    */
});

mecab.morphs(text, function (err, result) {
    console.log(result);
    /*
        [ '아버지', '가', '방', '에', '들어가', '신다' ]
    */
});

mecab.nouns(text, function (err, result) {
    console.log(result);
    /*
        [ '아버지', '방' ]
    */
});

mecab.all(text, function (err, result) {
    console.log(result);
    /*
        [
          [
            '아버지', 'NNG',
            '*',      'F',
            '아버지', '*',
            '*',      '*',
            '*'
          ],
          [
            '가', 'JKS', '*',
            'F',  '가',  '*',
            '*',  '*',   '*'
          ],
          // ... and so on
        ]
    */
});
```

### TypeScript

```js
import mecab from "mecab-ko-ts";

const text = "아버지가방에들어가신다";

mecab.pos(text, function (err, result) {
    console.log(result);
    /*
        [ [ '아버지', 'NNG' ],
          [ '가', 'JKS' ],
          [ '방', 'NNG' ],
          [ '에', 'JKB' ],
          [ '들어가', 'VV' ],
          [ '신다', 'EP+EC' ] ]
    */
});

mecab.morphs(text, function (err, result) {
    console.log(result);
    /*
        [ '아버지', '가', '방', '에', '들어가', '신다' ]
    */
});

mecab.nouns(text, function (err, result) {
    console.log(result);
    /*
        [ '아버지', '방' ]
    */
});

mecab.all(text, function (err, result) {
    console.log(result);
    /*
        [
          [
            '아버지', 'NNG',
            '*',      'F',
            '아버지', '*',
            '*',      '*',
            '*'
          ],
          [
            '가', 'JKS', '*',
            'F',  '가',  '*',
            '*',  '*',   '*'
          ],
          // ... and so on
        ]
    */
});
```

### Sync

Synchronous versions are also available (just add 'Sync' to the function name)
```js
/*
    Example
*/
const mecab = require("mecab");

console.log(mecab.posSync("아버지가방에들어가신다"));
/*
        [ [ '아버지', 'NNG' ],
          [ '가', 'JKS' ],
          [ '방', 'NNG' ],
          [ '에', 'JKB' ],
          [ '들어가', 'VV' ],
          [ '신다', 'EP+EC' ] ]
    */
```

You can find out a simple example on [node-mecab-ya-example](https://github.com/golbin/node-mecab-ya-example)

# License

MIT License
