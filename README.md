# Parzer

🚧まだ制作の初期段階であり、全然動作しません🚧

Parzer は、パーツや道具の消耗を管理するWebアプリです。

例えばロードバイクのパーツごと、あるいはランニングシューズといった道具の走行距離を管理できます。

# 機能の構想

- パーツを登録。
  - パーツには名前、使用開始日、種類、アイコン等を設定。
- グループとしてパーツをまとめて管理・登録。
- アクティビティを登録。
  - 名前、日付、走行距離を設定。
    - GPXファイルによる自動登録も。
  - 使用したパーツ（およびパーツグループ）を設定。
- パーツごとの累積距離を表示。
- パーツごとに設定した距離を超過するとアラートを表示。
- データはとりあえず localStrage への保存と、テキストファイルへの出力。
  - Webシステムとしての動作は必要に応じてそのうち。

# モチベーション

主にサイクリングにおいてパーツごとの消耗状態を管理し、安全・快適に楽しみたいからです。

アクティビティを記録できるWebサービスである Strava では、アクティビティに使用したギアを登録し、累積距離を管理できます。ただサイクリングだとバイク単位の登録で、パーツ交換にも対応してはいますが、パーツを頻繁に付け外ししたり組み替えたりするようなケースに対応していません。そうしたケースでもきちんと累積距離・消耗状態を管理するためのサービスを作っています。
