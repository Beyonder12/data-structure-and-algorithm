class Solution {

    private static void printFirstPrimeNumber(int nTh) {
        int count = 0,n = 0,i = 1;  
        while(n < nTh) {
            int j = 1;  
            count = 0;  
            while(j <= i) {  
                if(i % j == 0) count++;  
                j++;   
            }  
            if(count == 2) {  
                System.out.printf("%d ",i);  
                n++;  
            }  
            i++;  
        }  
    }
    public static void main(String[] args) {  
        printFirstPrimeNumber(2);
        System.out.println();
        printFirstPrimeNumber(4);
    }
    
}
