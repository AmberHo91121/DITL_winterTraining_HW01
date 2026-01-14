# 將圖片移到根目錄的說明

## 📋 已完成的工作

✅ 已更新 `index.html` 中的封面圖片路徑  
✅ 已更新 `script.js` 中所有作品圖片路徑  
✅ 已建立自動化批次檔 `RENAME_IMAGES.bat`

## 🚀 執行步驟

### 方法一：使用批次檔（推薦，Windows）

1. **雙擊執行 `RENAME_IMAGES.bat`**
   - 這會自動將所有圖片複製到根目錄並重新命名
   - 原始檔案會保留在 `Works/` 資料夾中

2. **檢查根目錄**
   - 確認所有圖片檔案都已出現在根目錄
   - 應該看到：`cover01.png`, `cover02.png`, `cover03.jpg`, `cover04.jpg`
   - 以及：`inlife_01.jpg` 到 `inlife_11.jpg`
   - 以及：`koselig_01.jpg` 到 `koselig_12.jpg`
   - 以及：`resort_01.jpg` 到 `resort_12.jpg`
   - 以及：`other_01.jpg` 到 `other_09.jpg`

### 方法二：手動重新命名（Mac/Linux 或需要手動操作）

請參考 `IMAGE_MAPPING.md` 中的對照表，手動將檔案複製並重新命名。

## 📁 新的檔案結構

```
專案根目錄/
├── index.html
├── script.js
├── styles.css
├── profile.JPG
├── cover01.png          ← 新增（InLife 封面）
├── cover02.png          ← 新增（Koselig 封面）
├── cover03.jpg          ← 新增（其他 封面）
├── cover04.jpg          ← 新增（瑞穗 封面）
├── inlife_01.jpg        ← 新增
├── inlife_02.jpg        ← 新增
├── ... (共 11 張)
├── koselig_01.jpg       ← 新增
├── koselig_02.jpg       ← 新增
├── ... (共 12 張)
├── resort_01.jpg        ← 新增
├── resort_02.jpg        ← 新增
├── ... (共 12 張)
├── other_01.jpg         ← 新增
├── other_02.jpg         ← 新增
├── ... (共 9 張)
└── Works/               ← 可保留或刪除（原始檔案）
```

## ✅ 驗證步驟

1. **執行批次檔後，檢查根目錄**
   ```bash
   # 應該看到所有圖片檔案
   ls *.jpg *.png
   ```

2. **測試網站**
   - 在本地開啟 `index.html` 或執行 `yarn start`
   - 檢查封面圖片是否正常顯示
   - 點擊每個作品，檢查圖片是否能正常切換

3. **推送到 GitHub**
   ```bash
   git add *.jpg *.png
   git add index.html script.js
   git commit -m "Move all images to root directory for GitHub Pages"
   git push
   ```

## 🎯 優點

- ✅ 所有圖片都在根目錄，方便在 GitHub 上傳
- ✅ 檔案名稱簡潔，避免中文路徑問題
- ✅ 路徑簡單，載入速度更快
- ✅ 與 `profile.JPG` 的格式一致

## ⚠️ 注意事項

- 批次檔會**複製**檔案，不會移動原始檔案
- 如果不需要保留 `Works/` 資料夾，可以手動刪除
- 確保所有圖片都已成功複製後再刪除原始資料夾
- 建議先測試網站是否正常運作

## 📝 檔案對照表

詳細的檔案對照表請參考 `IMAGE_MAPPING.md`
