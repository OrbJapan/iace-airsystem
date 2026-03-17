# JR Pass Purchase System - 機能詳細ドキュメント

## 📋 目次
1. [概要](#概要)
2. [購入フロー](#購入フロー)
3. [パス選択画面（Step 1）](#パス選択画面step-1)
4. [注文情報入力画面（Step 2）](#注文情報入力画面step-2)
5. [決済画面（Step 3）](#決済画面step-3)
6. [注文完了画面（Step 4）](#注文完了画面step-4)
7. [マイページでの履歴表示](#マイページでの履歴表示)
8. [データ構造](#データ構造)
9. [技術実装](#技術実装)

---

## 概要

### プロジェクト名
**JR Pass Purchase System**（JRパス購入システム）

### 目的
訪日外国人観光客向けに、JR全国版パスをオンラインで購入できるシステムを提供

### 対応言語
- **英語のみ**（UI、入力項目、エラーメッセージすべて英語）

### 公開URL
- **本番環境**: https://webapp-8at.pages.dev/jrpass
- **開発環境**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai/jrpass

---

## 購入フロー

### 4ステップの購入プロセス

```
Step 1: Choose Pass
    ↓
Step 2: Order Info
    ↓
Step 3: Payment Info
    ↓
Step 4: Complete
```

#### 進捗バー表示
- 各ステップに進捗インジケーター表示
- 現在のステップは青色でハイライト
- 完了したステップはチェックマーク表示

---

## パス選択画面（Step 1）

### 概要
JRパスのタイプ、期間、数量を選択する画面

### パスタイプ

#### 1. Ordinary Pass（普通車）
大人・子供別の料金設定

| 期間 | 大人料金（Adult） | 子供料金（Child 6-11 years） |
|------|------------------|---------------------------|
| 7 Days | USD $321.00 | USD $161.00 |
| 14 Days | USD $514.00 | USD $257.00 |
| 21 Days | USD $643.00 | USD $321.00 |

#### 2. Green Pass（グリーン車）
大人・子供別の料金設定

| 期間 | 大人料金（Adult） | 子供料金（Child 6-11 years） |
|------|------------------|---------------------------|
| 7 Days | USD $450.00 | USD $225.00 |
| 14 Days | USD $720.00 | USD $360.00 |
| 21 Days | USD $900.00 | USD $450.00 |

### UI要素

#### パスタイプタブ
- **Ordinary Tab**: 普通車パスの料金表示
- **Green Tab**: グリーン車パスの料金表示
- タブ切り替えで料金表が更新される

#### 数量選択
- **ドロップダウンメニュー**: 0〜5個まで選択可能
- 各パス・期間・年齢区分ごとに個別に数量を選択
- リアルタイムで合計金額が更新される

#### Order Summary（注文サマリー）
右側カラムに表示される注文内容の要約

**表示項目**:
- 選択したパスの詳細（タイプ、期間、年齢区分、数量）
- 各アイテムの小計
- Subtotal（小計）
- Handling Fee（手数料: USD $30.00 固定）
- **Total（合計金額）**

**ボタン**:
- **Proceed to Order Info**: 次のステップへ進む
  - 条件: 最低1つのパスが選択されている場合のみ有効

### パスの特徴
画面上部に以下の特徴を表示:
- ✅ Unlimited rides on JR trains（JR列車乗り放題）
- ✅ Nationwide coverage（全国対応）
- ✅ Access to Shinkansen (bullet trains)（新幹線利用可能）

### バリデーション
- パスが1つも選択されていない場合、「Proceed」ボタンは無効（disabled）
- パスが選択されると、ボタンが有効になり青色に変化

---

## 注文情報入力画面（Step 2）

### 概要
JRパス利用者の個人情報とパスポート情報を入力する画面

### 入力フォーム

#### 必須入力項目（全項目必須）

##### 1. Full Name（氏名）
- **タイプ**: テキスト入力
- **プレースホルダー**: "John Smith"
- **バリデーション**: 空欄不可
- **説明**: "As shown on passport"（パスポート表記通り）

##### 2. Passport Number（パスポート番号）
- **タイプ**: テキスト入力
- **プレースホルダー**: "A12345678"
- **バリデーション**: 空欄不可
- **説明**: パスポート番号を正確に入力

##### 3. Nationality（国籍）
- **タイプ**: ドロップダウン選択
- **オプション**:
  - United States
  - United Kingdom
  - Canada
  - Australia
  - Germany
  - France
  - Spain
  - Italy
  - China
  - South Korea
  - Taiwan
  - Hong Kong
  - Singapore
  - Thailand
  - Other
- **バリデーション**: 必ず選択が必要

##### 4. Date of Birth（生年月日）
- **タイプ**: 日付入力（date picker）
- **フォーマット**: YYYY-MM-DD
- **バリデーション**: 空欄不可、未来の日付は不可

##### 5. Email Address（メールアドレス）
- **タイプ**: メール入力
- **プレースホルダー**: "john@example.com"
- **バリデーション**: 
  - 空欄不可
  - メールアドレス形式（@を含む）

##### 6. Phone Number（電話番号）
- **タイプ**: 電話番号入力
- **プレースホルダー**: "+1-234-567-8900"
- **バリデーション**: 空欄不可
- **説明**: "Include country code"（国番号を含む）

### 複数利用者対応

#### Add Another Traveler（利用者追加）
- **ボタン**: "+ Add Another Traveler"
- **機能**: 同じフォームをもう1セット追加
- **制限**: 最大5名まで追加可能
- **用途**: 家族や友人と一緒に購入する場合

#### Remove Traveler（利用者削除）
- **ボタン**: 各利用者フォームの右上に「Remove」ボタン
- **機能**: 追加した利用者フォームを削除
- **制限**: 最低1名は必須

### UI要素

#### Selected Passes（選択したパス）
画面右側に、Step 1で選択したパスの概要を表示

**表示項目**:
- パスタイプ、期間、数量
- 合計金額

#### ナビゲーションボタン
- **Back**: Step 1に戻る
- **Proceed to Payment**: 次のステップへ進む
  - すべての必須項目が入力されている場合のみ有効

### バリデーション

#### リアルタイムバリデーション
- 入力中にフィールドの色が変化
- エラーがある場合は赤枠で表示
- 正しく入力されると緑のチェックマーク表示（オプション）

#### 送信時バリデーション
- すべての必須項目が入力されているかチェック
- メールアドレスの形式チェック
- 未入力項目がある場合、エラーメッセージを表示

---

## 決済画面（Step 3）

### 概要
Stripe Checkoutへリダイレクトして決済を行う

### 実装方式
**Stripe Checkout統合**（現在はモック実装）

### フロー

#### 1. 決済情報確認
- 注文内容の最終確認
- 利用者情報の表示
- 合計金額の確認

#### 2. Stripe Checkoutへリダイレクト
- **ボタン**: "Proceed to Payment"
- **アクション**: Stripe Checkoutページへ遷移（現在はモック）
- **モックURL**: `https://checkout.stripe.com/mock/session_id_12345`

#### 3. 決済処理
Stripe側で以下を処理:
- クレジットカード情報入力
- セキュアな決済処理（PCI DSS準拠）
- 決済完了後、サイトに戻る

### セキュリティ
- クレジットカード情報は一切当サイトに保存されない
- Stripeの安全な決済環境で処理
- PCI DSS準拠

### 将来の実装（現在はモック）
- Stripe API キーの設定
- 実際の決済処理
- Webhook による決済完了通知
- 決済失敗時のエラーハンドリング

---

## 注文完了画面（Step 4）

### 概要
JRパス購入完了後の確認画面

### 表示内容

#### 1. 完了メッセージ
- ✅ 緑色のチェックマークアイコン
- **タイトル**: "Order Complete!"
- **メッセージ**: "Thank you for your purchase."

#### 2. 注文番号
- **フォーマット**: `#JRP{timestamp}`
- **例**: #JRP1740427234567
- **用途**: 問い合わせ時の参照番号

#### 3. Order Summary（注文内容）

##### 購入したパス
各パスについて以下を表示:
- パスタイプ（Ordinary / Green）
- 期間（7/14/21 Days）
- 年齢区分（Adult / Child）
- 数量
- 単価
- 小計

##### 合計金額
- Subtotal（小計）
- Handling Fee（手数料: USD $30.00）
- **Total（合計金額）**

#### 4. 利用者情報
入力された利用者情報を表示:
- 氏名
- パスポート番号
- 国籍
- 生年月日
- メールアドレス
- 電話番号

#### 5. Next Steps（次のステップガイド）
Exchange Order（引換券）の使い方を説明:

1. **Print Your Exchange Order**
   - "Your Exchange Order will be sent to your email"
   - メールでExchange Orderを受信
   - PDFを印刷して持参

2. **Present at JR Station**
   - "Visit any JR ticket office in Japan"
   - 日本のJR駅窓口で引き換え
   - Exchange Orderとパスポートを提示

3. **Exchange for JR Pass**
   - "Exchange within 3 months of issue"
   - 発行から3ヶ月以内に引き換え
   - 実際のJRパスを受け取り

#### 6. アクションボタン

##### Download Exchange Order（引換券ダウンロード）
- **アイコン**: 📥 ダウンロードアイコン
- **機能**: PDFダウンロード（現在はモック）
- **ファイル名例**: `JR_Pass_Exchange_Order_JRP1740427234567.pdf`

##### View My Orders（マイページへ）
- **リンク先**: マイページのJRパス購入履歴タブ
- **機能**: 購入履歴を確認

##### Back to Home（ホームへ戻る）
- **リンク先**: トップページ（フライト検索）
- **機能**: サイトのトップに戻る

### データ保存
注文完了時に以下にデータを保存:
1. **localStorage**: ブラウザに永続保存
2. **グローバル変数**: `mockJRPassOrders`（現在のセッション中）

---

## マイページでの履歴表示

### アクセス方法
1. トップページのヘッダー「マイページ」をクリック
2. 自動ログイン（テスト用）
3. 「JRパス購入履歴」タブを選択

### 表示内容

#### JRパス購入履歴カード
各注文について以下を表示:

##### ヘッダー部分
- 🚆 **電車アイコン**
- **注文番号**: JR Pass Order: JRP1740427234567
- **注文日**: Order Date: 2026-02-24
- **ステータスバッジ**: Order Confirmed（緑色）

##### パス詳細
- パスタイプ（Ordinary / Green）
- 期間（7/14/21 Days）
- 年齢区分（Adult / Child）
- 数量（例: 2x）

##### 金額情報
- **Total Quantity**: 合計パス数
- **合計金額**: USD $XXX.XX（緑色の大きな文字）

### デザイン特徴
- **背景色**: 緑色（bg-green-50）
- **ボーダー**: 緑色の2px枠（border-green-200）
- **アイコン**: 🚆 電車アイコン（緑色）
- **金額色**: 緑色（text-green-600）

### インタラクション
- **クリック**: カード全体がクリック可能
- **アクション**: 詳細モーダルを表示
- **ホバー**: カードが少し浮き上がるエフェクト

### 詳細モーダル
カードクリック時に表示されるモーダル:

#### 表示内容
1. **注文番号とステータス**
2. **購入したパスの詳細リスト**
3. **利用者情報**（複数人の場合はリスト表示）
4. **金額の内訳**
5. **アクションボタン**:
   - Download Exchange Order
   - Close

---

## データ構造

### 注文データ（orderData）

```javascript
{
  orderId: "JRP1740427234567",           // 注文番号（タイムスタンプベース）
  orderDate: "2026-02-24",               // 注文日（YYYY-MM-DD）
  status: "confirmed",                   // ステータス
  statusText: "Order Confirmed",         // ステータス表示テキスト
  passType: "ordinary",                  // パスタイプ（ordinary/green）
  
  items: [                               // 購入したパスのリスト
    {
      passType: "Ordinary",              // パスタイプ（表示用）
      ageGroup: "Adult",                 // 年齢区分（Adult/Child）
      duration: 7,                       // 期間（日数）
      quantity: 2,                       // 数量
      price: 321.00                      // 単価（USD）
    },
    {
      passType: "Ordinary",
      ageGroup: "Child",
      duration: 7,
      quantity: 1,
      price: 161.00
    }
  ],
  
  travelers: [                           // 利用者情報リスト
    {
      fullName: "John Smith",            // 氏名
      passportNumber: "A12345678",       // パスポート番号
      nationality: "United States",      // 国籍
      dateOfBirth: "1985-06-15",        // 生年月日
      email: "john@example.com",        // メールアドレス
      phone: "+1-234-567-8900"          // 電話番号
    },
    {
      fullName: "Jane Smith",
      passportNumber: "A87654321",
      nationality: "United States",
      dateOfBirth: "1987-08-20",
      email: "jane@example.com",
      phone: "+1-234-567-8901"
    }
  ],
  
  subtotal: 803.00,                      // 小計（USD）
  handlingFee: 30.00,                    // 手数料（USD、固定）
  total: 833.00                          // 合計金額（USD）
}
```

### localStorage構造

#### キー: `jrPassOrders`
```javascript
[
  { /* 注文データ1 */ },
  { /* 注文データ2 */ },
  { /* 注文データ3 */ }
]
```

- 配列形式で複数の注文を保存
- 新しい注文は配列の先頭に追加（unshift）
- ブラウザのlocalStorageに永続保存

---

## 技術実装

### フロントエンド

#### HTML
- **ファイル**: `/public/jrpass.html`
- **サイズ**: 18KB
- **構造**: 
  - ヘッダー（ナビゲーション）
  - 4つのステップコンテナ
  - Order Summary サイドバー

#### JavaScript
- **ファイル**: `/public/static/jrpass.js`
- **サイズ**: 18KB
- **主要関数**:
  - `initJRPassPage()` - ページ初期化
  - `switchPassType(type)` - パスタイプ切り替え
  - `updateOrderSummary()` - 注文サマリー更新
  - `proceedToOrderInfo()` - Step 2へ進む
  - `addTravelerForm()` - 利用者フォーム追加
  - `proceedToPayment()` - Step 3へ進む
  - `renderOrderComplete()` - Step 4表示
  - `saveOrderToLocalStorage()` - localStorage保存

#### スタイリング
- **フレームワーク**: TailwindCSS（CDN）
- **アイコン**: Font Awesome
- **カスタムCSS**: 
  - パスタイプタブのスタイル
  - 進捗バーのスタイル
  - ステータスバッジのスタイル

### バックエンド

#### ルーティング（Hono）
- **エンドポイント**: `/jrpass`
- **メソッド**: GET
- **レスポンス**: 埋め込みHTML（index.tsxに直接記述）

#### 静的ファイル配信
- **パス**: `/static/jrpass.js`
- **方法**: Cloudflare Pages の静的アセット配信

### データ永続化

#### 現在の実装
- **localStorage**: ブラウザに保存
- **制限**: 
  - ブラウザごとに独立
  - クリアすると削除される
  - 容量制限あり（通常5-10MB）

#### 将来の実装予定
- **Cloudflare D1**: SQLiteデータベース
- **テーブル**: `jrpass_orders`
- **スキーマ**:
  ```sql
  CREATE TABLE jrpass_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT UNIQUE NOT NULL,
    user_id INTEGER,
    order_date DATE NOT NULL,
    status TEXT NOT NULL,
    pass_type TEXT NOT NULL,
    items JSON NOT NULL,
    travelers JSON NOT NULL,
    subtotal REAL NOT NULL,
    handling_fee REAL NOT NULL,
    total REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  ```

### 決済統合

#### 現在の実装（モック）
- **方法**: アラート表示とダミーURL生成
- **URL**: `https://checkout.stripe.com/mock/session_id_12345`

#### 将来の実装予定
- **Stripe API**: 実際の決済処理
- **必要な情報**:
  - Stripe API キー（Secret Key）
  - Stripe Publishable Key
  - Webhook エンドポイント
- **フロー**:
  1. Stripe Checkout Session作成
  2. ユーザーをStripeページへリダイレクト
  3. 決済完了後、Webhookで通知受信
  4. 注文ステータスを更新

### デプロイ

#### プラットフォーム
- **Cloudflare Pages**: エッジデプロイ
- **Worker**: Hono アプリケーション

#### ビルドプロセス
```bash
# 1. Viteでビルド
npm run build

# 2. 静的ファイルをコピー
cp -f public/jrpass.html dist/jrpass.html
cp -rf public/static dist/

# 3. Cloudflare Pagesにデプロイ
npx wrangler pages deploy dist --project-name webapp
```

#### 環境変数（将来）
```bash
# Stripe API Keys
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx

# Stripe Webhook Secret
STRIPE_WEBHOOK_SECRET=whsec_xxxxx

# Email Service (SendGrid/Resend)
EMAIL_API_KEY=xxxxx
```

---

## 今後の開発予定

### Phase 1: API統合
- [ ] Stripe決済API統合
- [ ] SendGrid/Resendメール送信API統合
- [ ] Exchange Order PDF生成機能

### Phase 2: データベース実装
- [ ] Cloudflare D1データベース作成
- [ ] `jrpass_orders`テーブル作成
- [ ] マイグレーションファイル作成
- [ ] データベースへの注文保存機能

### Phase 3: ユーザー管理
- [ ] ユーザー認証システム実装
- [ ] ユーザーごとの購入履歴管理
- [ ] アカウント連携機能

### Phase 4: 管理機能
- [ ] 管理者ダッシュボード
- [ ] 注文管理画面
- [ ] Exchange Order発行管理
- [ ] 売上レポート機能

### Phase 5: 機能拡張
- [ ] 多言語対応（日本語、中国語、韓国語）
- [ ] 地域限定パス追加（関西、東日本など）
- [ ] クーポン・割引コード機能
- [ ] メール通知の自動送信

---

## まとめ

### 実装済み機能
✅ 4ステップの購入フロー  
✅ Ordinary/Green 2タイプのパス  
✅ 7/14/21日間の期間選択  
✅ 大人・子供別料金  
✅ 複数利用者対応  
✅ パスポート情報入力  
✅ Stripe Checkout統合（モック）  
✅ 注文完了画面  
✅ localStorage永続化  
✅ マイページ購入履歴表示  
✅ レスポンシブデザイン  

### 未実装機能
❌ 実際のStripe決済処理  
❌ データベース保存  
❌ メール通知  
❌ PDF生成（Exchange Order）  
❌ ユーザー認証  
❌ 管理者機能  

---

## リファレンス

### 公式ドキュメント
- **JR Pass公式サイト**: https://japanrailpass.net/
- **Stripe Checkout**: https://stripe.com/docs/payments/checkout
- **Cloudflare Pages**: https://developers.cloudflare.com/pages/
- **Cloudflare D1**: https://developers.cloudflare.com/d1/

### 関連ファイル
- `/home/user/webapp/public/jrpass.html` - HTML構造
- `/home/user/webapp/public/static/jrpass.js` - JavaScript ロジック
- `/home/user/webapp/src/index.tsx` - Honoルーティング
- `/home/user/webapp/README.md` - プロジェクト全体のREADME

---

**最終更新日**: 2026-02-24  
**バージョン**: 1.0  
**作成者**: FlightSearch Development Team
