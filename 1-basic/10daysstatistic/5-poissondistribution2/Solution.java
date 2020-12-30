/*
The manager of a industrial plant is planning to buy a machine of either type  or type . For each day’s operation:

The number of repairs, , that machine  needs is a Poisson random variable with mean . The daily cost of operating  is .
The number of repairs, , that machine  needs is a Poisson random variable with mean . The daily cost of operating  is .
Assume that the repairs take a negligible amount of time and the machines are maintained nightly to ensure that they operate like new at the start of each day. Find and print the expected daily cost for each machine.

*/

import java.util.Scanner;

public class Solution {

    public static void main(String [] args) {
        Scanner scan = new Scanner(System.in);
        double A = scan.nextDouble();
        double B = scan.nextDouble();
        scan.close();

        /* E[x^2] = lambda + lambda^2. Plug this into each formula */
        double dailyCostA = 160 + 40 * (A +(A * A));
        double dailyCostB = 128 + 40 * (B + (B * B));

        System.out.format("%.3f%n", dailyCostA);
        System.out.format("%.3f%n", dailyCostB);

    }
    
}
