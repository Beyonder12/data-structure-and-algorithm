class Animal {
  public String firstName;
  public String lastName;
  public double height,weight;

  Animal(String firstName, String lastName, double height, double weight) {


    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
  }

  public String fullName() {
    return this.firstName + " " + this.lastName;
  }

  public double idealBody() {
    return this.weight/this.height/this.height;
  }

 public void printData() {
   System.out.println("Animal name is" + this.fullName() + ".");
   System.out.println("Animal ideal body is" + Math.round(this.idealBody()) + ".");
 }
}
