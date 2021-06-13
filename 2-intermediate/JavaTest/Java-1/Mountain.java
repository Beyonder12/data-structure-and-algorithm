
  public class Mountain {
    public static void main(String[] args) {
    printer(1);
    printer(5);
    }

    public static void printer(int initValue) {
      int n = 9, mid = initValue + 4, limit = initValue +1;

      for(int i = initValue; i < n+1+initValue; i++) {

        if(i < mid) {
          for(int j = i ; j < limit; j++) {
            System.out.print(j);
          }
          limit+=2;
        }
        else if(i >= mid) {
          int limit2 = limit;
          for(int j = i; j < limit2; j+=1) {
            System.out.print(j);
          }
          limit2-=1;
        }
        System.out.println();
      }
    }
  }
