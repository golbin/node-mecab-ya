# mecab-ko-ts

## 목차

-   [mecab-ko-ts](#mecab-ko-ts)
    -   [목차](#목차)
    -   [시작하기 전](#시작하기-전)
    -   [설치](#설치)
    -   [필수사항](#필수사항)
    -   [사용안내](#사용안내)
    -   [사용예시](#사용예시)
        -   [JavaScript](#javascript)
        -   [TypeScript](#typescript)
        -   [Sync](#sync)
-   [라이선스](#라이선스)

## 시작하기 전

[ENGLISH README.md](https://github.com/ZETA-A/node-mecab-ya/blob/master/README.md)

`mecab-ko-ts`는 [`mecab-ya`](https://github.com/golbin/node-mecab-ya)의 업데이트 버전입니다.  
TypeScript지원과 Sync기능이 추가되었습니다.

NodeJS를 위한 또 다른 Mecab 도구는 사용하기 쉽습니다.
[Mecab](http://taku910.github.io/mecab/)은 일본어 형태소 분석을 위해 제작되었으며, [mecab-ko](https://bitbucket.org/eunjeon/mecab-ko/)에서 한국어 형태소 분석기를 이용할 수 있습니다.

## 설치

```bash
$ npm install mecab-ko-ts
```

## 필수사항

한국어 형태소 분석기를 이용하기위해선 `mecab`이나 `mecab-ko`가 필요합니다.

만약 `mecab`이 없다면, 아래의 명령어를 통해 설치할 수 있습니다.

```bash
$ node_modules/mecab-ko-ts/bin/install-mecab
```

한국어를 사용하기위해선 아래의 명령어를 입력해주세요.

```bash
$ node_modules/mecab-ko-ts/bin/install-mecab ko
```

## 사용안내

mecab-ko-ts는 `node_modules/mecab-ko-ts/mecab`위치에 있는 `mecab`라이브러리를 사용합니다.

아래의 명령 인수를 추가해 `mecab`라이브러리의 위치를 변경할 수 있습니다.

```
MECAB_LIB_PATH=/usr/local/lib node index.js
```

아니면

```
MECAB_LIB_PATH=/usr/local/lib/mecab-ko node index.js
```

그래서 이것을 사용할 때 특정 언어에 대한 mecab 라이브러리를 선택할 수 있고, AWS Lamda를 위한 내장 라이브러리로 배포할 수 있습니다.

## 사용예시

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

동기버전(Sync)를 사용하기위해선 함수 뒤에 Sync만 추가하면 됩니다.  
`ex) posSync(), morphsSync()... 등`

```js
/*
    예시
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

# 라이선스

MIT 라이선스
