
class BangunDatar {
  public double sisi;
  private double keliling;
  private double luas;

  public double getLuas() {
    return this.luas;
  }
  public double getKeliling() {
    return this.keliling;
  }


  public void luas(double sisi) {
    this.luas = sisi * sisi;
  }

  public void keliling(double sisi) {
    this.keliling = 4*sisi;
  }
}
