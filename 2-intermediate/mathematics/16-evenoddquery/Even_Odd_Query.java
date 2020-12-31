import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Even_Odd_Query {

    static Scanner scanner = new Scanner(System.in);

    static int n,q,x,y;

    static List<Integer> list=new ArrayList<>();

        public static void main(String[] args) {
            
            n=scanner.nextInt();

            for(int i=0; i<n;i++){
                list.add(i, scanner.nextInt());
            }

            q=scanner.nextInt();

            for(int i=0;i<q;i++) {
                x=scanner.nextInt()-1;
                y=scanner.nextInt()-1;

                if(x+1==n || (list.get(x+1)!=0) || x==y){
                    System.out.println( (list.get(x)%2==0)? "Even":"Odd");
                }else{
                    System.out.println("Odd");
                }
            }
        }


}