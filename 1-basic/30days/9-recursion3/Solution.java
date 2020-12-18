import java.util.*;

public class Solution 
{

    public static void main(String[] args) 
    {
        Scanner scan = new Scanner(System.in);
        System.out.println( factorial(scan.nextInt()) );
    }
        
    public static long factorial( int n )
    {
        return (n == 1) ? 1 : n*factorial(n-1) ;
    }
}