import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        final Scanner scanner = new Scanner(System.in);

        final int q = scanner.nextInt();

        final ComplexRPE P = new ComplexRPE();
        final ComplexRPE x = new ComplexRPE();

        for(int i =0; i<q; ++i){
            P.set(scanner.nextInt(), scanner.nextInt());
            final long k = scanner.nextLong();
            final int m = scanner.nextInt();

            P.pow(k, m, x);
            System.out.println(P);
        }

        scanner.close();
    }
    
}
 
/*
Class encapsulates a complex number specifically for calculating an exponent
on that complext number
*/


class ComplexRPE{
    private long a, b;

    public ComplexRPE(){
        this(0, 0);
    }

    public ComplexRPE(final long a, final long b){
        set(a, b);
    }

    public void set (final long a, final long b){
        this.a = a;
        this.b = b;
    }

    public void multiply(final ComplexRPE c, final int m){
        this.multiply(c.a, c.b, m);
    }

    public void multiply(final long a, final long b, final int m){
        final long newA = this.a * a - this.b * b;
        final long newB = this.a * b + this.b * a;

        this.a = newA;
        this.b = newB;

        mod(m);
    }

    public void square(final int m){
        final long newA = a * a - b * b;
        final long newB = 2L * a * b;

        this.a = newA;
        this.b = newB;

        mod(m);
    }

    private void mod(final int m){
        if(a > m || a < 0){
            a %=m;//dont fix negatives until end
        }
        if(b > m || b < 0){
            b%=m;//dont fix negatives until end
        }
    }

    private void fixMod(final int m){
        if(a < 0)
            a +=m;
        if(b < 0)
            b += m;
    }

    public void pow(long k, final int m, final ComplexRPE x){
        x.set(this);//copy this into x

        while(k%2 == 0){
            x.square(m);
            k >>= 1;
        }

        //copy x into this number
        this.set(x);
        k >>= 1;

        while(k > 0){
            x.square(m);
            if(k % 2 == 1){
                //multiply this by the current x
                this.multiply(x, m);
            }
            k >>= 1;
        }
        fixMod(m);
    }

    @Override
    public String toString(){
        return a + " " + b;
    }

}