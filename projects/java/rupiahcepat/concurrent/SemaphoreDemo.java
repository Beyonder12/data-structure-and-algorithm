

import java.util.concurrent.Semaphore;

public class SemaphoreDemo {

  // JAVA Concurrency Utilities
  // Synchronization: Semaphore
  public static void main(String[] args) {
    Semaphore sem = new Semaphore(1); // 1 denotes the permit count
    new IncThread(sem, "A");
    new DecThread(sem, "B");
  }
}

class Shared {
  static int count = 0;
}

class IncThread implements Runnable{
  String name;
  Semaphore sem;

  IncThread(Semaphore s, String n) {
    sem = s;
    name = n;
    new Thread(this).start();
  }

  public void run() {
    try {
      System.out.println(name + " is waiting for a permit.");
      sem.acquire();
      System.out.println(name + " gets a permit.");

      for(int i = 0; i < 5; i++) {
        Shared.count--;
        System.out.println(name + ": " + Shared.count);
        Thread.sleep(1);
      }

    }
    catch (InterruptedException e) {
      System.out.println(e);
    }
    System.out.println(name + ": relases the permit.");
    sem.release();
  }
}

class DecThread implements Runnable {
  String name;
  Semaphore sem;

  DecThread(Semaphore s, String n) {
    sem = s;
    name = n;
    new Thread(this).start();
  }

  public void run() {
    try {
      System.out.println(name + " is waiting for a permit.");
      sem.acquire();
      System.out.println(name + " gets a permit.");

      for(int i = 0; i < 5; i++) {
        Shared.count++;
        System.out.println(name + ": " + Shared.count);
        Thread.sleep(1);
      }
    }
    catch(InterruptedException e) {
      System.out.println(e);
    }
    System.out.println(name + ": releases the permit.");
    sem.release();
  }
}
