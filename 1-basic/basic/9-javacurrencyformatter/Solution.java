// parse primitive  types and string using regex
import java.util.Scanner;
// abstract base class for all nurmber formats. this class provides the interfaces for formatting and parsing numbers
import java.text.NumberFormat;
// represents a specific geographical, political, or cultural region
import java.util.Locale;


public class Solution {
    
    public static void main(String[] args) {
        //read input
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();

        //create custom locale for India
        Locale indiaLocale = new Locale("en" ,"IN");

        /* Create NumberFormats using Locales */
        NumberFormat us     = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat india  = NumberFormat.getCurrencyInstance(indiaLocale);
        NumberFormat china  = NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat france = NumberFormat.getCurrencyInstance(Locale.FRANCE);

        /* Print output */        
        System.out.println("US: "     + us.format(payment));
        System.out.println("India: "  + india.format(payment));
        System.out.println("China: "  + china.format(payment));
        System.out.println("France: " + france.format(payment));
    }

}
