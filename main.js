function startDownload(checkbox, fileName) {
    if (!checkbox.checked) return;
    checkbox.disabled = true;

    // انتهاء حركة الأنميشن ثم بدء التحميل (بعد 3.5 ثانية)
    setTimeout(() => {
        if (fileName) {
            const link = document.createElement('a');
            // استخدام encodeURI للتعامل مع المسافات والأسماء العربية في الرابط
            link.href = encodeURI(fileName);
            link.setAttribute('download', fileName);
            
            link.style.display = 'none';
            document.body.appendChild(link);
            
            link.click();
            document.body.removeChild(link);
        }
    }, 3500);
}