
      
class Solution { 
      
    // function to calculate minimum height of  
    // triangle 
    static double minHeight(double base, double area) 
    { 
        double d = (2 * area) / base; 
        return Math.ceil(d); 
    } 
      
    // Driver code 
    public static void main (String[] args)  
    { 
        double base = 4, area = 8; 
        System.out.println("Minimum height is "+ 
                            minHeight(base, area)); 
    } 
}
    

