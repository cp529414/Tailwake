# Tailwake

從 iPhone 或 iPad 喚醒電腦：可在同一區域網路直接傳送，或透過您管理的 SSH 中繼裝置遠端喚醒。

[English](README.md)

**Tailwake（基本版）**提供不限次數的手動本地與遠端喚醒，廣告可用時會在底部顯示橫幅。基本版沒有 App 內購買，也不支援 Siri 或「捷徑」。

**Tailwake Pro** 是獨立的無廣告 App。有效的月訂閱、年訂閱或終身解鎖可啟用手動喚醒、Siri 和 Apple「捷徑」，包括排程自動化。

Tailwake 使用標準 Wake-on-LAN（WoL）魔術封包。同一區域網路內由 App 直接廣播；遠端喚醒則安全連線至電腦所在網路上一台持續運作的 SSH 中繼裝置，再由中繼裝置傳送封包。

## 使用指南

- [操作說明](INSTRUCTIONS.zh-Hant.md)：設定本地與遠端喚醒、安裝喚醒工具，以及喚醒前後的上線驗證。
- [自動化喚醒](AUTOMATION.zh-Hant.md)：使用有效的 Pro 方案透過 Siri 或「捷徑」喚醒。
- [隱私權政策](https://cp529414.github.io/Tailwake/zh-Hant/privacy/)：了解本機資料、Google AdMob 與隱私權選擇。
- [使用條款](TERMS.zh-Hant.md)：使用及購買條款。
- [版本與方案](SUPPORT.zh-Hant.md)：比較基本版、Pro 方案及自願贊助。

> 遠端連線方式由您選擇。[Tailscale](https://tailscale.com/) 是不必在路由器開放對外連入連接埠，即可私下連至中繼裝置的一種方式。

Tailwake 可確認電腦是否已上線、記錄每次喚醒結果，並提供 Siri 與「捷徑」的「喚醒電腦」動作。

## 您的資料

- 不需 Tailwake 帳號，也沒有開發者營運的喚醒伺服器。
- 電腦資料、中繼設定、喚醒紀錄與驗證結果保存在裝置上。
- SSH 憑證與 SecureOn 密碼保存在 iOS 鑰匙圈。
- 免費版廣告使用 Google AdMob 與同意管理。Tailwake 請求非個人化廣告，不要求 Apple 追蹤權限。Google 仍可能處理廣告與診斷資訊，詳見[隱私權政策](https://cp529414.github.io/Tailwake/zh-Hant/privacy/)。
- App 提供英文與繁體中文。

僅能對您擁有或獲授權管理的電腦、網路及中繼帳號使用 Tailwake。喚醒結果取決於硬體、作業系統設定與網路。
