import java.util.*;
import java.io.*;

//Polymorphism (overrid and overload)
class Enemy{
  public String getInformation(){
    return "Attack!";
  }
}

// overriding
class Ninja extends Enemy {
  public String getInformation(int a) {
    return "Oike No Jutsu";
  }
}

//overloading
class Monster extends Enemy {
  public String getInformation() {
    return "Ninja";
  }
  public String getInformation(String additionalInformation) {
    return "Monster attack with " + additionalInformation;
  }
}

public class Solution {
  public static void main(String[] args) {
    Monster naga = new Monster();
    Ninja ninja = new Ninja();
    Enemy enemy = new Enemy();

    System.out.println(enemy.getInformation());

    System.out.println(ninja.getInformation());

    System.out.println(naga.getInformation());
    System.out.println(naga.getInformation("claw"));

  }


}

