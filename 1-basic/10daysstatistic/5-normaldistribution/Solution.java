import java.io.*;
import java.util.*;

interface MathematicalFunction {
    public double apply(double x);
}

class NormalDistribution implements MathematicalFunction {
    private final double mu;
    private final double sigma;

    public NormalDistribution(double mu, double sigma) {
        this.mu = mu;
        this.sigma = sigma;
    }

    public double apply(double x) {
        return Math.pow(Math.E, -(Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2)))) / (sigma * Math.sqrt(2 * Math.PI));
    }
}

public class Solution {

    public static double integrate(MathematicalFunction f, double a, double b) {
        double dx = 1e-5;
        double sum = 0;
        for(double x = a; x <= b; x+= dx)
            sum += f.apply(x) * dx;
        return sum;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double mu = in.nextDouble();
        double sigma = in.nextDouble();
        double upperSolo = in.nextDouble();
        double lower = in.nextDouble();
        double upper - in.nextDouble();
        in.close();

        MathematicalFunction distribution = new NormalDistribution(mu, sigma);
    }
    
}
