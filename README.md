# Todo リストアプリケーション

## 概要

このプロジェクトは、React と TypeScript を使用して開発されたモダンな Todo リストアプリケーションです。ユーザーフレンドリーなインターフェースと、タスク管理に役立つ機能を提供します。

URL: https://todo-list-2024.vercel.app/

## 主な機能

- タスクの追加、編集、削除
- タスクの完了/未完了の切り替え
- アクティブなタスクと完了したタスクの分類表示
- ダークモード対応
- レスポンシブデザイン

## スクリーンショット

### Light Mode
![FireShot Capture 001 - Todo App - localhost](https://github.com/user-attachments/assets/9638d7ed-6584-415c-9b2f-a8d691836b04)

### Dark Mode
![FireShot Capture 002 - Todo App - localhost](https://github.com/user-attachments/assets/fe0dba30-8230-444f-9dab-9078c2e2513b)

## 技術スタック

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Jotai (状態管理)
- Radix UI (UI コンポーネント)
- ESLint & Prettier (コード品質管理)

## 始め方

### 前提条件

- Node.js (v14 以上)
- npm または yarn

### インストール

1. リポジトリをクローンする:
   `git clone https://github.com/yourusername/todo-list-app.git`

2. プロジェクトディレクトリに移動:
   `cd todo-list-app`

3. 依存関係をインストール:
   `npm install`
   または
   `yarn install`

### 開発サーバーの起動

`npm run dev`
または
`yarn dev`

ブラウザで `http://localhost:5173` を開いてアプリケーションにアクセスできます。

## スクリプト

- `npm run dev`: 開発サーバーを起動
- `npm run build`: プロダクション用にアプリケーションをビルド
- `npm run lint`: ESLint でコードをチェック
- `npm run format`: Prettier でコードをフォーマット

## プロジェクト構造

```shell
src/
├── components/ # 再利用可能な UI コンポーネント
├── features/ # 機能別のコンポーネントと関連ファイル
├── lib/ # ユーティリティ関数
├── types/ # TypeScript 型定義
├── App.tsx # メインアプリケーションコンポーネント
└── main.tsx # エントリーポイント
```

## コントリビューション

プロジェクトへの貢献は大歓迎です。バグ報告、機能リクエスト、プルリクエストなど、どんな形でも構いません。

## ライセンス

このプロジェクトは [MIT ライセンス](https://licenses.opensource.jp/MIT/MIT.html) の下で公開されています。
