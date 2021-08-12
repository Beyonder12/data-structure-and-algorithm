import java.util.Scanner;

class ComputeElectricityBill {
    public static void main(String[] args) {
        System.out.println("hello");
        Long units;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter number of units");
        units = sc.nextLong();
        double billpay = 0;
        if(units < 100) billpay = units*1.20;
        else if(units < 300) billpay = 100*1.20 + (units - 100)*2;
        else if(units > 300) billpay = 100*1.20+200*2+(units-300)*3;
        System.out.println("Bill to pay : " + billpay);

        System.out.println(test());
    }

    private static int test() {
        for(int i = 0; ;i++) {
            System.out.println(i);
        if(i == 2) return i;
    }
}
}