import java.util.*;
import java.nio.file.*;


public class HiddenWordQ {
  public static void main(String[] args) {
    List<String> sampleList = new ArrayList<>();
    try {
      sampleList = Files.readAllLines(Paths.get("hiddenWord.data"));
      // System.out.println(sampleList);
    } catch (Exception e) {
      e.printStackTrace();
    }
    List<List<String>> sampleData = new ArrayList<>();
    for(String sample : sampleList) {
      List<String> samples = Arrays.asList(sample.split(" "));
      sampleData.add(samples);

    }
    // System.out.println(sampleData);
    // for (List<String> data : sampleData) {
    //   System.out.println(data);
    // }

    assetTrue(countTargetOccurrence(sampleData,"dog") == 30);
  }

  public static void assetTrue(boolean v) {
    if(!v) {
      Thread.dumpStack();
      System.exit(0);
    }
  }

  public static int countTargetOccurrence(List<List<String>> sample, String target) {
    int count = 0;
    HashMap<String, Integer> hashMap = new HashMap<String, Integer>();
    for (List<String> data : sample) {
      for(String s : data) {
        if(hashMap.containsKey(s)) {
          hashMap.put(s, hashMap.get(s) + 1);
        }
        else {
          hashMap.put(s, 1);
        }
      }

    }
    System.out.println(hashMap);
    for (String t : target) {
      System.out.println(t);
    }
    System.out.println(target.toUpperCase());
    return count;
  }
}
