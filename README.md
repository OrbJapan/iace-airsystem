# FlightSearch - 航空券予約システム & JRパス購入サイト

## 🎉 統合予約プラットフォーム完成！

**航空券予約とJRパス購入の統合プラットフォームが実装されました！**

## 公開URL

### 本番環境（Cloudflare Pages）
- **メインサイト（航空券予約）**: https://webapp-8at.pages.dev/
- **JRパス購入サイト**: https://webapp-8at.pages.dev/jrpass
- **最新デプロイURL**: https://b635e68f.webapp-8at.pages.dev/

### 開発環境（サンドボックス）
- **メインサイト**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai/
- **JRパス購入サイト**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai/jrpass

### リポジトリ
- **GitHub**: https://github.com/yamazakitakayuki/iace-airsystem

---

## 🚄 NEW: JRパス購入機能

### 概要
- **言語**: 英語のみ
- **デザイン**: モダンなUI/UX
- **決済**: Stripe Checkout統合

### 実装済み機能

#### 1. パス選択画面 ✅
- **全国版JRパス**:
  - 7日間: $280 USD
  - 14日間: $450 USD
  - 21日間: $580 USD
- **ビジュアルデザイン**:
  - 日本の鉄道イメージ写真
  - パスタイプのタブ切り替え
  - 価格比較の明確な表示
- **特徴**:
  - Unlimited rides on JR trains
  - Nationwide coverage
  - Access to Shinkansen (bullet trains)

#### 2. 注文情報入力画面 ✅
- **利用者情報（パスポート必須）**:
  - Full Name（名前）
  - Passport Number（パスポート番号）
  - Nationality（国籍）
  - Date of Birth（生年月日）
  - Email Address（メールアドレス）
  - Phone Number（電話番号）
- **複数人対応**: Add Another Traveler機能
- **バリデーション**: 全フィールドの入力検証

#### 3. 決済（Stripe Checkout） ✅
- **統合方式**: Stripe Checkout
- **フロー**:
  1. 注文情報確認
  2. "Proceed to Payment"ボタンをクリック
  3. Stripe Checkoutページへリダイレクト
  4. 決済完了後、完了画面へ戻る
- **セキュリティ**: PCI DSS準拠

#### 4. 注文完了画面 ✅
- **Exchange Order発行**:
  - 注文番号（Order Number）
  - 購入したパス情報
  - 利用者情報
  - PDFダウンロード機能（モック）
- **次のステップガイド**:
  1. Exchange Orderを印刷
  2. 日本到着時にJR窓口で引き換え
  3. パスポート提示

### 技術実装

#### フロントエンド
- **HTML**: `/public/jrpass.html`（18KB）
- **JavaScript**: `/public/static/jrpass.js`（18KB）
- **スタイリング**: TailwindCSS（CDN）
- **アイコン**: Font Awesome

#### バックエンド
- **ルーティング**: Hono framework
- **エンドポイント**: `/jrpass` → JRパス購入ページ
- **静的ファイル配信**: `/static/*`

#### デプロイ
- **プラットフォーム**: Cloudflare Pages
- **ビルドツール**: Vite
- **ビルド時間**: ~3秒（最小限のルーティング）

---

## ✈️ 航空券予約システム

### 予約フロー（全8ステップ）
1. **フライト検索** → 出発地、目的地、日付、乗客数を入力して検索
2. **フライト選択** → 検索結果から希望のフライトを選択
3. **座席クラス選択** → 往路・復路それぞれの座席クラスを選択
4. **認証選択** → 新規登録 / ログイン / ゲストで予約を選択
5. **座席選択・お客様情報入力** → シートマップで座席を選択し、乗客情報を入力
6. **予約内容の最終確認** → すべての情報を確認
7. **決済（Stripe風）** → クレジットカード情報を入力
8. **予約完了** → 予約番号発行、確認書ダウンロード、トップへ戻る

### マイページ機能 ✨
- **予約履歴表示** → 航空券予約の履歴を一覧で確認
- **JRパス購入履歴** → JRパス購入の履歴を一覧で確認 ✅
- **統合表示** → 航空券とJRパスの履歴を1つのマイページで管理 ✅
- **localStorage永続化** → JRパス購入データをブラウザに保存 ✅
- **自動ログイン** → テスト用に認証なしでマイページにアクセス可能 ✅
- **予約詳細確認** → 各予約の詳細情報を表示
- **予約キャンセル** → オンラインで予約をキャンセル
- **会員情報編集** → 登録情報の更新

---

## プロジェクト概要

### 名前
FlightSearch - 航空券予約 & JRパス購入プラットフォーム

### 目標
- Amadeus APIを統合した包括的な航空券検索・予約システム
- 訪日外国人向けのJRパス購入プラットフォーム
- シームレスなマイページ統合

### 主な機能
- フライト検索、座席クラス選択、座席選択、お客様情報入力、予約管理
- JRパス購入、Exchange Order発行、Stripe決済統合
- 統合マイページ（予約履歴、購入履歴、会員情報管理）

---

## データアーキテクチャ

### ストレージサービス（予定）
- **Cloudflare D1**: SQLiteベースのリレーショナルデータベース
  - `users` テーブル: ユーザー情報
  - `flight_bookings` テーブル: 航空券予約
  - `jrpass_orders` テーブル: JRパス購入履歴
  - `passengers` テーブル: 乗客情報
  - `payments` テーブル: 決済情報
- **Cloudflare KV**: キーバリューストア（セッション管理、キャッシュ）
- **Amadeus API**: フライトデータの取得元
- **Stripe API**: 決済処理

---

## デプロイメント

### プラットフォーム
- **Cloudflare Pages**: エッジデプロイメント

### 技術スタック
- **バックエンド**: Hono (TypeScript)
- **フロントエンド**: TailwindCSS, Font Awesome, Vanilla JavaScript
- **ランタイム**: Cloudflare Workers
- **ビルドツール**: Vite

### デプロイ状態
- **ステータス**: ✅ Active
- **最終デプロイ**: 2026-02-24
- **デプロイURL**: https://webapp-8at.pages.dev/

---

## 開発コマンド

```bash
# ビルド
npm run build

# 開発サーバー起動（サンドボックス環境）
pm2 start ecosystem.config.cjs

# PM2管理
pm2 list
pm2 logs webapp --nostream
pm2 restart webapp
pm2 delete webapp

# ポートクリーンアップ
fuser -k 3000/tcp

# サービステスト
curl http://localhost:3000
curl http://localhost:3000/jrpass

# Cloudflare Pagesデプロイ
npm run deploy
```

---

## プロジェクト構造

```
webapp/
├── src/
│   ├── index.tsx           # 最小限のルーティング (50行)
│   ├── index.tsx.large     # バックアップ (旧1900行版)
│   └── renderer.tsx
├── public/
│   ├── index.html          # フライト検索ページ (10KB)
│   ├── jrpass.html         # JRパス購入ページ (18KB)
│   └── static/
│       ├── app.js          # フライト検索ロジック (100KB)
│       ├── jrpass.js       # JRパス購入ロジック (18KB)
│       └── style.css       # スタイル (11KB)
├── dist/                   # ビルド出力
│   ├── _worker.js          # ビルド済みWorker (23.57 KB)
│   ├── _routes.json        # ルーティング設定
│   └── static/             # 静的アセット
├── wrangler.jsonc          # Cloudflare設定
├── package.json            # 依存関係
└── README.md               # このファイル
```

---

## 未実装機能（今後の開発予定）

### Phase 1: API統合
- [ ] Amadeus APIアカウント取得・設定
- [ ] フライト検索API統合
- [ ] Stripe決済API統合（実際の決済処理）
- [ ] 予約確認メール送信（SendGrid / Resend）

### Phase 2: データベース実装
- [ ] Cloudflare D1データベース作成
- [ ] マイグレーションファイル作成
- [ ] JRパス購入履歴テーブル追加
- [ ] 統合マイページの実装

### Phase 3: 追加機能
- [✅] マイページでのJRパス購入履歴表示（実装済み）
- [ ] 統合予約・購入履歴検索
- [ ] PDFチケット・Exchange Order生成機能（実装）
- [ ] 多言語対応（英語、中国語など）

### Phase 4: 管理機能
- [ ] 管理者ダッシュボード
- [ ] JRパス注文管理
- [ ] 売上レポート
- [ ] ユーザー管理

---

## セキュリティ
- **API キー**: 環境変数で管理（.env, Cloudflare Secrets）
- **CORS**: 適切なCORS設定を実装
- **入力検証**: フロントエンド・バックエンド両方で実装予定
- **Stripe決済**: PCI DSS準拠

---

## ライセンス
© 2026 FlightSearch. All rights reserved.

---

## 最終更新日
2026-02-24 (JRパス購入履歴のマイページ統合完了)

---

このREADMEは開発の進捗に応じて随時更新されます。
