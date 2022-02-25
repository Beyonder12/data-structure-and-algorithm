import java.util.*;
import java.io.*;



class Worker{
  String name;
  String position;
  int age;

  public Worker(String name, String position, int age) {
    this.name = name;
    this.position = position;
    this.age = age;
  }

  public String Walking() {
    return "This creature walks using his two fucking feet";
  }

  public String Coding() {
    return "This creature program some code with java";
  }

  public String Info() {
    return "Name : " + this.name +"\nposition : " + this.position + "\nage : " + this.age;
  }
}

class Programmer extends Worker{
  public Programmer(String name, String position, int age) {
    super(name, position, age);
  }
}

public class Solution {
  public static void main(String[] args) {
    System.out.println("Inheritance Concept");
    System.out.println();
    Programmer juniorBackendSoftwareEngineer = new Programmer("Abi", "junior", 17);
    System.out.println(juniorBackendSoftwareEngineer.Info());
    System.out.println(juniorBackendSoftwareEngineer.Walking());
    System.out.println(juniorBackendSoftwareEngineer.Coding());
  }
}

