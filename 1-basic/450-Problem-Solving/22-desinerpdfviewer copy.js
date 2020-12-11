function designerPdfViewer(h, word) {
    return Math.max(...word.split('').map((e) => h[e.charCodeAt(0) - 97] * word.length));
}