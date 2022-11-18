# react-ts-graphcms-sample

アウトプットとして、GraphQL製CMSのhygraph を使った DogsImage アプリケーション作成。

フロントは React (TypeScript)

サーバーサイドは CMS を利用。[GraphCMS](https://app.hygraph.com/)

ApolloClientを使って、APIリクエスト。

dog テーブル

```
dog: {
  id,
  name,
  description,
  thumbnail: {
    url,
  },
}
```

url はこちら
https://github.com/massu-159/react-ts-graphcms-sample

## 目次

1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様

- dogデータ
  - dogデータ一覧表示

### 2-2. 構成技術

- react : 18.2.0
- react-dom : 18.2.0
- @apollo/client : 3.7.1
- graphql : 16.6.0