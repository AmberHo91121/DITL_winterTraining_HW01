@echo off
REM Windows 批次檔：將 Works 資料夾中的圖片重新命名並複製到根目錄
REM 請在專案根目錄執行此檔案

echo 開始重新命名並複製圖片檔案...

REM 封面圖片
copy "Works\InLife 興趣養成APP\封面01.png" "cover01.png"
copy "Works\Koselig 北歐中古家具零售服務設計\封面02.png" "cover02.png"
copy "Works\其他\封面03.jpg" "cover03.jpg"
copy "Works\瑞穗天合飯店服務設計\封面04.jpg" "cover04.jpg"

REM InLife 作品集
copy "Works\InLife 興趣養成APP\作品集final_頁面_03.jpg" "inlife_01.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_04.jpg" "inlife_02.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_05.jpg" "inlife_03.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_06.jpg" "inlife_04.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_07.jpg" "inlife_05.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_08.jpg" "inlife_06.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_09.jpg" "inlife_07.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_10.jpg" "inlife_08.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_11.jpg" "inlife_09.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_12.jpg" "inlife_10.jpg"
copy "Works\InLife 興趣養成APP\作品集final_頁面_13.jpg" "inlife_11.jpg"

REM Koselig 作品集
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_14.jpg" "koselig_01.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_16.jpg" "koselig_02.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_17.jpg" "koselig_03.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_18.jpg" "koselig_04.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_19.jpg" "koselig_05.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_20.jpg" "koselig_06.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_21.jpg" "koselig_07.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_22.jpg" "koselig_08.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_23.jpg" "koselig_09.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_24.jpg" "koselig_10.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_25.jpg" "koselig_11.jpg"
copy "Works\Koselig 北歐中古家具零售服務設計\作品集final_頁面_26.jpg" "koselig_12.jpg"

REM 瑞穗作品集
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_27.jpg" "resort_01.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_28.jpg" "resort_02.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_29.jpg" "resort_03.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_30.jpg" "resort_04.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_31.jpg" "resort_05.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_32.jpg" "resort_06.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_33.jpg" "resort_07.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_34.jpg" "resort_08.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_35.jpg" "resort_09.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_36.jpg" "resort_10.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_37.jpg" "resort_11.jpg"
copy "Works\瑞穗天合飯店服務設計\作品集final_頁面_38.jpg" "resort_12.jpg"

REM 其他作品
copy "Works\其他\0514_2.jpg" "other_01.jpg"
copy "Works\其他\112_2_2產設.69.jpg" "other_02.jpg"
copy "Works\其他\S__240058425.jpg" "other_03.jpg"
copy "Works\其他\S__240058426.jpg" "other_04.jpg"
copy "Works\其他\S__240058427.jpg" "other_05.jpg"
copy "Works\其他\S__240058428.jpg" "other_06.jpg"
copy "Works\其他\S__240058429.jpg" "other_07.jpg"
copy "Works\其他\說明書(無底線_工作區域 1.jpg" "other_08.jpg"
copy "Works\其他\資產 20307.jpg" "other_09.jpg"

echo.
echo 完成！所有圖片已複製到根目錄並重新命名。
echo 請檢查根目錄中的圖片檔案，然後可以刪除 Works 資料夾（如果不需要保留原始檔案）。

pause
