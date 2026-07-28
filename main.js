function startDownload(checkbox, fileName) {
    if (!checkbox.checked) return;
    checkbox.disabled = true;

    // انتهاء حركة الأنميشن ثم بدء التحميل (بعد 3.5 ثانية)
    setTimeout(() => {
        if (fileName) {
            let downloadUrl = '';

            // إذا كان الملف مضغوطاً (.zip) يتم التحميل من قسم Releases على GitHub
            if (fileName.endsWith('.zip')) {
                downloadUrl = `https://github.com/ahmedmohamed17092011-dot/Apps/releases/download/v1.0.0/${fileName}`;
            } else {
                // ملفات الـ APK تتحمل بشكل مباشر من المستودع
                downloadUrl = fileName;
            }

            const link = document.createElement('a');
            // استخدام encodeURI للتعامل مع المسافات والأسماء العربية في الرابط
            link.href = encodeURI(downloadUrl);
            link.setAttribute('download', fileName);
            
            link.style.display = 'none';
            document.body.appendChild(link);
            
            link.click();
            document.body.removeChild(link);
        }
    }, 3500);
}