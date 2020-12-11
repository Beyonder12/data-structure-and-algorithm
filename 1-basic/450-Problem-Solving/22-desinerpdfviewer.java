static int designerPdfViewer(int[] h, String word) {
    // Complete this function
    int max =0;
    for(char ch :word.toCharArray())
    {
        if(max<h[ch-'a'])
        {
            max = h[ch-'a'];
        }
    }
    return word.length()*max;
}