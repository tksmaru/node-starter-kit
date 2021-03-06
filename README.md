node-starter-kit
---

node.jsのプロジェクトを作成する際に必要と思われる各種設定をあらかじめ盛り込んだオレオレスターターキットです。

## Getting started

プロジェクトの実態に沿って`package.json`を編集してください。
また、テスト等に必要なモジュールをインストールしてください。
```
npm install
```
なお、プロジェクト内にある`sample.*.js`は後述するよく使うコマンド集の動作確認用サンプルコードです。
不要であれば適宜削除してください。

## よく使うコマンド

### ソースコードを検査したい

`ESLint`によるソースコード検査を行います。

```
npm run lint
```

### ソースコードをテストしたい

`mocha`を使用して単体テストを行います。

```
npm run test
```

### テスト駆動で開発したい

`testem`を使用してテスト駆動開発をより簡単に行えるようにします。
起動中にソースコードやテストコードを編集すると、保存のたびに自動的に単体テストが実行されます。

```
npm run TDD
```

### ソースコードのカバレッジを計測したい

`istanbul`によるカバレッジ計測を行います。
レポートは`coverage`ディレクトリ配下に出力されます。

```
npm run coverage
```
