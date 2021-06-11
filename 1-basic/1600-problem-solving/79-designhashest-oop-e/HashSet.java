class HashSet {
  private boolean[] array = new boolean[1000001];

  /** Initialize your data structure here. */
  public HashSet() {

  }

  public void add(int key) {
      array[key] = true;
  }

  public void remove(int key) {
      array[key] = false;
  }

  /** Returns true if this set contains the specified element */
  public boolean contains(int key) {
      return array[key];
  }

  public void show() {
    for(int i = 0; i < array.length; i++) {
      if (array[i]) System.out.print(i + " ");
    }
  }

  public static void main(String[] args) {
    HashSet hash = new HashSet();
    hash.add(2);
    hash.add(3);
    hash.add(4);
    hash.add(4);
    System.out.println(hash.contains(1));
    hash.show();
  }
}


