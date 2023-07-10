# Spotify-vue

原始碼：https://github.com/VVNLU/spotify-vue

## 建立與啟動 Vue 專案

開啟終端機，`cd`到桌面或任何想創建該專案的位置，執行命令：
```
npx nuxi init Spotify-vue
```
完成後，再依據提示先 `cd` 到專案目錄 `Spotify-vue` 中，執行命令：
```
yarn install
```
安裝所有依賴項目後，專案目錄中生成了 `node_mdoules` 資料夾，確認您的專案已成功安裝所以依賴後，即可執行命令：
```
yarn dev
```
啟動 Vue 應用程序。

## 專案說明

本專案使用 [Spotify Develpoers API](https://developer.spotify.com/ "Spotify Develpoers API") 實現註冊及登入帳號、查看播放清單、聆聽30秒的預覽音樂等應用程式。

## 注意事項

因使用 [Spotify Develpoers API](https://developer.spotify.com/ "Spotify Develpoers API")，部分音樂檔及播放清單無法預覽播放及開啟；API 限制為60分鐘。

## 實現功能

- 註冊、登入及登出帳號
- 查看撥放清單
- 聆聽30秒的預覽音樂
- 上下頁
- 查看Premium、支援頁面
- 60分鐘後自動登出及刪除 Token 功能

## 未實現功能（進行中）
- 搜尋功能
- 建立播放清單
- sidebar 可調整
- 修改個人資料
- RWD 響應式設計
- 忘記密碼提示

