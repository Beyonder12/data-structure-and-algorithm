import java.util.Arrays;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;

public class Singleton {
  private static Singleton obj;

  private Singleton() {}

  public static Singleton getInstance() {
    if(obj == null)
      obj = new Singleton();
      return obj;
  }

  public static void main(String[] args) {
    Singleton singleton = new Singleton();
    // ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
    // String json = ow.writeValueAsString(singleton);
    // System.out.println(json);
    // System.out.println(Arrays.toString(singleton.getInstance()));
  }
}
