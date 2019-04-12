このプロジェクトはcreate-react-app製です。

リポジトリをクローンしたら、プロジェクトのルートでnpm installを行い、依存モジュールをインストールします。

### `npm install`

npm startでローカルサーバが立ち上がります。(デフォルトは3000番ポート)
ホットリロード機能によって、ローカルでの編集内容が自動でブラウザ上に反映されます。

### `npm start`

編集後に、npm run buildでbuildフォルダにバンドルされたindex.htmlが配置されます。
デプロイ時には、このindex.htmlを読み込んでください。

### `npm run build`