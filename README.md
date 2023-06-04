# Node.js Health App - Express, Express-Handlebars, HBS, MySQL

## Create .env file
Create a .env file to store your database credentials

```
DB_HOST = localhost
DB_NAME = usermanagement_tut
DB_USER = root
DB_PASS = password
```

## Installation
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

`npm start` すると、アープリを起動します。`localhost:5000` をアクセルすると、健康に関するコラムのページを、遷移するし、ハンバーガーメニューのコラムページを押すとこちらのページにも遷移します。ログイン後、`user_id` に提供されるし、トップページと自分の記録を表示するページをアクセルできます。たとえばURLに｀localhost:5000/top/1` を入力するし、トップページを遷移して、ヘッダー左のlogoを押すとこちらのページにも遷移します。URLに｀localhost:5000/personal/1` をアクセルすると、自分の記録を表示するページになっております。ヘッダーの自分の記録かハンバーガーメニューの自分の 記録を押すとこちらのページに遷移します
