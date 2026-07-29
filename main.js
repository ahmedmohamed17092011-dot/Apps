function startDownload(checkbox, fileName) {
    if (!checkbox.checked) return;
    checkbox.disabled = true;

    // انتهاء حركة الأنميشن ثم بدء التحميل (بعد 3.5 ثانية)
    setTimeout(() => {
        if (fileName) {
            let downloadUrl = '';

            // تحويل ملفات الـ ZIP للتحميل من الـ Releases مباشرة
            if (fileName.endsWith('.zip')) {
                downloadUrl = `https://github.com/ahmedmohamed17092011-dot/Apps/releases/download/v1.0.0/${fileName}`;
            } else {
                // باقي الملفات (الـ APK) تتحمل من الملفات الرئيسية للمستودع
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