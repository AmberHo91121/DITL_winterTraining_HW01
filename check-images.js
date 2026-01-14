// 檢查所有圖片檔案是否存在的腳本
// 在瀏覽器控制台執行此腳本，檢查圖片是否能正確載入

const imagePaths = [
    'profile.JPG',
    'Works/InLife 興趣養成APP/封面.png',
    'Works/Koselig 北歐中古家具零售服務設計/封面.png',
    'Works/瑞穗天合飯店服務設計/封面.jpg',
    'Works/其他/封面.jpg'
];

function checkImage(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ path, status: 'OK' });
        img.onerror = () => resolve({ path, status: 'FAILED' });
        img.src = path;
    });
}

async function checkAllImages() {
    console.log('開始檢查圖片...');
    const results = await Promise.all(imagePaths.map(checkImage));
    
    console.table(results);
    
    const failed = results.filter(r => r.status === 'FAILED');
    if (failed.length > 0) {
        console.error('以下圖片無法載入：');
        failed.forEach(r => console.error(`  - ${r.path}`));
        console.log('\n請確認：');
        console.log('1. 所有圖片檔案都已推送到 GitHub');
        console.log('2. 檔案路徑正確');
        console.log('3. GitHub Pages 已正確部署');
    } else {
        console.log('✅ 所有圖片載入成功！');
    }
}

checkAllImages();
