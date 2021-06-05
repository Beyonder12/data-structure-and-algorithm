import java.util.*;

abstract class Pet {
  public abstract void makeSound();
}

class Cat extends Pet {
  @Override
  public void makeSound() {
    System.out.println("Meouw");
  }
}

class Dog extends Pet {
  public void makeSound() {
    System.out.println("Woof!");
  }
}

public class PolymorphismDemo {
  public static void main(String[] args) {
    List<Pet> pets = new ArrayList<Pet>();
    pets.add(new Cat());
    pets.add(new Dog());

    for(Pet pet : pets) {
      pet.makeSound();
    }
  }
}
