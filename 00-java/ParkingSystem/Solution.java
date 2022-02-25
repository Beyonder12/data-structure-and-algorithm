public class Solution {
  public static void main(String[] args) {
    System.out.println("hello");
    ParkingSystem ps = new ParkingSystem(1, 1, 1);
    System.out.println(ps.addCar(1));
    System.out.println(ps.addCar(1));
    System.out.println(ps.addCar(1));
  }
}

class ParkingSystem {
  private int[] size;
  public ParkingSystem(int big, int medium, int small) {
      this.size = new int[]{big, medium, small};
  }

  public boolean addCar(int carType) {
      return size[carType-1]-->0;
  }
}
