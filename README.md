# Branesse Web — Netlify 公開リポジトリ

合同会社ブラネスのコーポレートサイト本番ソース。Netlify ホスティング前提。

## 構成

```
dist/
├ index.html                ← TOP (https://www.branesse.com/)
├ works/01〜10/index.html   ← クリーンURL構造
├ about/, contact/, etc.
├ styles*.css, components/, *.jsx
├ assets/                   ← 画像・ロゴ・OGP・favicon
│
├ _headers                  ← Netlify: MIMEタイプ・キャッシュ・セキュリティ
├ _redirects                ← Netlify: 旧URLリダイレクト・apex→www
├ netlify.toml              ← Netlify: ビルド設定・フォームスパム対策
└ CNAME                     ← (GitHub Pages用、Netlifyでは無視される)
```

## デプロイ手順 (Netlify)

### 方法A: Git連携 (推奨)

```bash
cd dist
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:あなたのユーザー名/branesse-web.git
git push -u origin main
```

その後 Netlify で:
1. https://app.netlify.com/ → Add new site → Import an existing project
2. GitHub と連携 → `branesse-web` リポジトリを選択
3. ビルド設定はそのまま (netlify.toml で自動認識)
4. Deploy site

数十秒で `https://xxx.netlify.app` が公開されます。

### 方法B: ドラッグ&ドロップ (最速)

1. https://app.netlify.com/drop を開く
2. `dist/` フォルダごとドラッグ&ドロップ
3. 即公開

## 独自ドメイン設定 (www.branesse.com)

1. Netlify サイト管理画面 → Domain settings → Add custom domain
2. `www.branesse.com` を入力
3. Netlify が指示するDNS設定を行う:
   - `CNAME` レコード: `www.branesse.com` → `あなたのサイト.netlify.app`
   - Apex リダイレクト: `branesse.com` の A レコードを Netlify 指定IPに

ConoHa WING のコントロールパネルでDNS変更。反映には数十分〜数時間。

## SSL/HTTPS

Netlify が Let's Encrypt で自動発行。Domain settings から **"Verify DNS"** → **"Provision certificate"** をクリック。

## Contact フォーム

Netlify Forms が自動的に有効化されます (`data-netlify="true"` 属性で検出)。

### 送信先メールの設定
1. Netlify サイト管理画面 → Forms
2. `contact` フォームを選択
3. **Notifications → Add notification → Email notification**
4. 送信先メール: **`info@branesse.com`** を設定

### スパム対策
- ハニーポット (`bot-field`) 設定済み
- Netlify の自動 spam_protection 有効
- 必要に応じて reCAPTCHA 追加可能

### 送信ログ
Netlify ダッシュボードの Forms タブで全送信履歴が見れます。

## 既存 WordPress 停止

`www.branesse.com` のDNSを Netlify に向け直したら、WordPress側のサイトは到達不能になります。

WordPressのデータをバックアップしてから停止することを推奨:
1. WordPress 管理画面 → ツール → エクスポート → すべてのコンテンツ
2. ConoHa WING でデータベース・WPフォルダのフルバックアップ

## 更新方法

```bash
cd dist
# ファイル編集
git add . && git commit -m "Update: 〇〇" && git push
```

GitHub に push すると Netlify が自動デプロイ。約30秒で反映。

## プルリクごとのプレビュー

Netlify の特徴: ブランチを切ってPRを出すと、自動的に
`https://deploy-preview-N--あなたのサイト.netlify.app/` でプレビューURLが生成される。

## ローカル開発

```bash
cd dist
python3 -m http.server 8000
# http://localhost:8000
```

または Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```

## トラブルシューティング

### .jsx が読み込めない
`_headers` で MIME 設定済み。それでも動かない場合は、`.js` にリネームしてHTMLの参照も書き換え。

### Form submission が動かない
1. Netlify ダッシュボード → Forms に "contact" が表示されているか確認
2. なければ `dist/contact/index.html` の静的フォーム部分が消えていないかチェック
3. デプロイ後、本番URLでフォーム送信テストすること(`localhost` では動かない)

### サイトが表示されない
- DNS反映待ち (最大24時間)
- Netlify Deploy log で エラーを確認

## ライセンス

© 2026 合同会社ブラネス / Branesse LLC.
