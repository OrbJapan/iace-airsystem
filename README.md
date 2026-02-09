# FlightSearch - 航空券予約システム

## プロジェクト概要
- **名前**: FlightSearch
- **目標**: Amadeus APIを統合した包括的な航空券検索・予約システム
- **主な機能**: フライト検索、座席クラス選択、座席選択、お客様情報入力、予約管理

## 公開URL
- **開発環境**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai
- **GitHub**: （未設定）

## 完成済み機能

### 1. フライト検索機能
- **旅程タイプ選択**: 往復、片道、複数都市
- **出発地・目的地入力**: 空港コード対応
- **日付選択**: 出発日、帰国日
- **乗客情報**: 大人、子供、幼児の人数設定
- **座席クラス**: エコノミー、プレミアムエコノミー、ビジネス、ファースト
- **直行便のみオプション**: フィルター機能

### 2. 検索結果表示機能
- **フライトカード**: 航空会社情報、フライト詳細、価格表示
- **航空会社ロゴ**: Google Flights CDNから取得（ダミー、API統合後に実ロゴ）
- **経由地情報**: 直行便、1回経由、2回以上経由
- **価格表示**: 1人あたりの往復価格
- **手荷物情報**: 受託手荷物込み

### 3. フィルター機能
- **価格帯**: ¥0 - ¥500,000+
- **経由回数**: 直行便、1回経由、2回以上経由
- **出発時間帯**: 朝、昼、夕、夜
- **航空会社**: ANA, JAL, United, Delta, American

### 4. ソート機能
- **おすすめ順**: デフォルト
- **最安値順**: 価格順
- **最短時間順**: フライト時間順
- **出発時間順**: 出発時刻順

### 5. 座席クラス選択モーダル ✅
- **往路・復路別選択**: 各区間ごとに座席クラスを選択
- **4つの座席クラス**: エコノミー、プレミアムエコノミー、ビジネス、ファースト
- **詳細情報表示**: 残席数、価格、キャンセル条件、機内サービス
- **リアルタイム料金計算**: 選択に応じた合計金額表示
- **アクセシビリティ対応**: キーボード操作、ARIA属性、スクリーンリーダー対応

### 6. 予約確認画面 ✅ NEW
- **選択済みフライト情報表示**:
  - 往路・復路の便名、区間、座席クラス、料金
  - 視覚的に分かりやすい2カラムレイアウト
- **座席選択機能（シートマップ）**:
  - 座席クラスに応じたシートマップ生成
  - 視覚的な座席ステータス表示（利用可能、選択済み、利用不可、特別席）
  - リアルタイム座席選択・解除
  - 選択人数分の座席バリデーション（往路・復路合計）
  - 特別席の追加料金表示
  - 選択済み座席のサマリー表示
- **お客様情報入力フォーム**:
  - 乗客情報（姓、名、性別、生年月日、パスポート番号、国籍）
  - 人数分のフォーム自動生成（大人、子供、幼児）
  - 連絡先情報（メールアドレス、電話番号）
  - 緊急連絡先情報
  - 利用規約・プライバシーポリシー同意チェックボックス
- **最終料金計算・表示**:
  - 全乗客分の基本料金
  - 座席アップグレード料金
  - リアルタイム合計金額表示
- **バリデーション**:
  - 必須項目の入力チェック
  - 座席数の整合性チェック（選択人数 × 2区間）
  - フォーム入力完全性の検証

### 7. UI/UX機能
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ対応
- **TailwindCSS**: 高速なスタイリング
- **Font Awesome**: アイコン表示
- **CSS Transition/Animation**: スムーズなアニメーション効果
- **キーボードナビゲーション**: Tab、Enter、Space、Escapeキー対応
- **アクセシビリティ**: ARIA属性、フォーカス管理

## 航空会社ロゴ実装

### ロゴの取得方法
- **ソース**: Google Flights CDN (gstatic.com)
- **URL形式**: `https://www.gstatic.com/flights/airline_logos/70px/{IATA_CODE}.png`
- **対応航空会社**:
  - ANA (NH): 全日空
  - JAL (JL): 日本航空
  - UA: ユナイテッド航空
  - DL: デルタ航空
  - AA: アメリカン航空

### Amadeus API統合後の動作
- Amadeus APIから取得した航空会社コード（IATA）を使用
- 上記URL形式で航空会社ロゴを自動表示
- フォールバック: ロゴ読み込み失敗時は航空会社コードを表示

## 未実装機能（今後の開発予定）

### Phase 1: Amadeus API統合
- [ ] Amadeus APIアカウント取得・設定
- [ ] フライト検索API統合 (`/api/search/flights`)
- [ ] フライトオファーAPI統合 (`/api/flight/offers`)
- [ ] 予約作成API統合 (`/api/booking/create`)
- [ ] 環境変数設定 (AMADEUS_API_KEY, AMADEUS_API_SECRET)

### Phase 2: データベース実装
- [ ] Cloudflare D1データベース作成
- [ ] マイグレーションファイル作成
  - users テーブル
  - bookings テーブル
  - passengers テーブル
  - payments テーブル
- [ ] データベース統合

### Phase 3: 認証・決済機能
- [ ] ユーザー認証（Auth0 / Clerk）
- [ ] 決済機能（Stripe）
- [ ] 予約確認メール送信
- [ ] 予約管理ダッシュボード

### Phase 4: 追加機能
- [ ] マイページ機能
- [ ] 予約履歴表示
- [ ] 予約変更・キャンセル機能
- [ ] 多言語対応
- [ ] 通貨選択機能

## データアーキテクチャ

### 現在のデータモデル

#### SearchCriteria（フロントエンド）
```javascript
{
  from: "TYO",
  to: "JFK",
  departureDate: "2026-02-16",
  returnDate: "2026-02-23",
  passengers: {
    adults: 1,
    children: 0,
    infants: 0
  },
  cabinClass: "economy",
  directFlights: false
}
```

#### FlightResult（フロントエンド）
```javascript
{
  flightNumber: "AA101",
  airline: {
    name: "アメリカン航空",
    code: "AA",
    logo: "https://www.gstatic.com/flights/airline_logos/70px/AA.png"
  },
  route: {
    from: "TYO",
    to: "JFK",
    fromCity: "東京",
    toCity: "ニューヨーク"
  },
  outbound: {
    departure: "08:00",
    arrival: "21:00",
    duration: "13時間00分"
  },
  return: {
    departure: "21:00",
    arrival: "08:00",
    duration: "13時間00分"
  },
  stops: {
    type: "direct",
    label: "直行便"
  },
  price: 80000
}
```

#### SeatClass（座席クラス）
```javascript
{
  economy: {
    name: "エコノミー",
    amenities: ["標準座席", "機内食付き", "受託手荷物 1個"],
    cancellation: "キャンセル料: 50%",
    priceMultiplier: 1.0,
    seatsAvailable: 12
  },
  premium_economy: {
    name: "プレミアムエコノミー",
    amenities: ["広々とした座席", "優先搭乗", "機内食付き", "受託手荷物 2個"],
    cancellation: "キャンセル料: 30%",
    priceMultiplier: 1.5,
    seatsAvailable: 7
  },
  business: {
    name: "ビジネス",
    amenities: ["フルフラットシート", "ラウンジ利用", "プレミアム機内食", "受託手荷物 3個"],
    cancellation: "キャンセル料: 20%",
    priceMultiplier: 3.0,
    seatsAvailable: 5
  },
  first: {
    name: "ファースト",
    amenities: ["プライベートスイート", "ラウンジ利用", "シェフ監修機内食", "受託手荷物 無制限"],
    cancellation: "キャンセル無料",
    priceMultiplier: 5.0,
    seatsAvailable: 3
  }
}
```

#### BookingData（予約データ）
```javascript
{
  flight: {
    flightNumber: "AA101",
    basePrice: 80000,
    route: {
      from: "TYO",
      to: "JFK",
      fromCity: "東京",
      toCity: "ニューヨーク"
    }
  },
  seatClasses: {
    outbound: {
      class: "business",
      className: "ビジネス",
      price: 240000
    },
    return: {
      class: "economy",
      className: "エコノミー",
      price: 80000
    }
  },
  selectedSeats: {
    outbound: [
      { seatId: "outbound-5A", row: "5", column: "A", price: 0 }
    ],
    return: [
      { seatId: "return-18B", row: "18", column: "B", price: 21009 }
    ]
  },
  passengers: [
    {
      index: 1,
      lastName: "山田",
      firstName: "太郎",
      gender: "male",
      dob: "1990-01-01",
      passport: "TK1234567",
      nationality: "JP",
      category: "adult"
    }
  ],
  contact: {
    email: "example@email.com",
    phone: "090-1234-5678",
    emergencyName: "山田 花子",
    emergencyPhone: "090-9876-5432"
  },
  totalPrice: 341009
}
```

### ストレージサービス（予定）
- **Cloudflare D1**: SQLiteベースのリレーショナルデータベース
- **Cloudflare KV**: キーバリューストア（セッション管理、キャッシュ）
- **Amadeus API**: フライトデータの取得元

## 使用方法

### フライト検索から予約まで
1. **検索**: 出発地、目的地、日付、人数、座席クラスを入力してフライトを検索
2. **結果確認**: 検索結果から希望のフライトを選択
3. **座席クラス選択**: 往路・復路それぞれの座席クラスを選択（モーダル表示）
4. **予約内容確認**: 選択したフライト情報と料金を確認
5. **座席選択**: シートマップから希望の座席を選択（人数分×往復）
6. **お客様情報入力**: 全乗客の情報を入力
7. **支払い**: 合計金額を確認して支払いへ進む

### 現在の状態
- **モックデータ**: フライト検索結果はダミーデータ
- **予約機能**: 未実装（コンソールログ出力のみ）
- **認証**: 未実装

## デプロイメント

### プラットフォーム
- **Cloudflare Pages**: エッジデプロイメント

### 技術スタック
- **バックエンド**: Hono (TypeScript)
- **フロントエンド**: TailwindCSS, Font Awesome, Vanilla JavaScript
- **ランタイム**: Cloudflare Workers
- **ビルドツール**: Vite

### 最終更新日
2026-02-09

## 開発コマンド

```bash
# 開発サーバー起動（サンドボックス環境）
npm run build
pm2 start ecosystem.config.cjs

# ビルド
npm run build

# PM2管理
pm2 list
pm2 logs webapp --nostream
pm2 restart webapp
pm2 delete webapp

# ポートクリーンアップ
fuser -k 3000/tcp

# サービステスト
curl http://localhost:3000
```

## 注意事項
- **現在はモックデータを使用**: 実際のフライトデータはAmadeus API統合後に取得
- **予約機能は未実装**: 現在はコンソールログ出力のみ
- **認証機能なし**: ユーザー認証は未実装

## セキュリティ
- **API キー**: 環境変数で管理（.env, Cloudflare Secrets）
- **CORS**: 適切なCORS設定を実装
- **入力検証**: フロントエンド・バックエンド両方で実装予定

## ライセンス
© 2026 FlightSearch. All rights reserved.

## 推奨される次のステップ

### Phase 1: Amadeus API統合（優先度: 高）
1. Amadeusアカウント取得
2. API認証情報の取得・設定
3. フライト検索APIの統合
4. 実データへの切り替え

### Phase 2: データベース実装（優先度: 高）
1. Cloudflare D1データベースの作成
2. マイグレーションファイルの作成
3. ORMライブラリの導入（Drizzle ORMなど）

### Phase 3: 認証・決済（優先度: 中）
1. Auth0 または Clerkの統合
2. Stripe決済の統合
3. 予約確認メール送信機能

### Phase 4: UX改善（優先度: 低）
1. ローディング状態の改善
2. エラーハンドリングの強化
3. 多言語対応
4. ダークモード対応

---

**開発環境URL**: https://3000-ixum760vzlh6kn5x9qt8b-dfc00ec5.sandbox.novita.ai

このREADMEは開発の進捗に応じて随時更新されます。
