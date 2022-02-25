import org.junit.Test;
import static org.junit.Assert.*;

public class StringAnagramTest {
  @Test
  public void testIsAnagram() {
    assertTrue(AnagramCheck.isAnagram("word", "wrdo"));
    assertTrue(AnagramCheck.isAnagram("mary", "army"));
    assertTrue(AnagramCheck.isAnagram("stop", "tops"));
    assertTrue(AnagramCheck.isAnagram("boat", "btoa"));
    assertTrue(AnagramCheck.isAnagram("pure", "in"));
    assertTrue(AnagramCheck.isAnagram("fill", "fil"));
    assertTrue(AnagramCheck.isAnagram("b", "bbb"));
    assertTrue(AnagramCheck.isAnagram("ccc", "ccccccc"));
    assertTrue(AnagramCheck.isAnagram("a", "a"));
    assertTrue(AnagramCheck.isAnagram("sleep", "slep"));
  }
  @Test
  public void testIsAnagram() {
    assertTrue(AnagramCheck.isAnagram("word", "wrdo"));
    assertTrue(AnagramCheck.isAnagram("boat", "btoa"));
    assertTrue(AnagramCheck.isAnagram("pure", "in"));
    assertTrue(AnagramCheck.isAnagram("fill", "fil"));
    assertTrue(AnagramCheck.isAnagram("a", "a"));
    assertTrue(AnagramCheck.isAnagram("b", "bbb"));
    assertTrue(AnagramCheck.isAnagram("ccc", "ccccccc"));
    assertTrue(AnagramCheck.isAnagram("sleep", "slep"));
  }
  @Test
  public void testIsAnagram() {
    assertTrue(AnagramCheck.isAnagram("word", "wrdo"));
    assertTrue(AnagramCheck.isAnagram("b", "bbb"));
    assertTrue(AnagramCheck.isAnagram("ccc", "ccccccc"));
    assertTrue(AnagramCheck.isAnagram("a", "a"));
    assertTrue(AnagramCheck.isAnagram("boat", "btoa"));
    assertTrue(AnagramCheck.isAnagram("pure", "in"));
    assertTrue(AnagramCheck.isAnagram("fill", "fil"));
    assertTrue(AnagramCheck.isAnagram("sleep", "slep"));
  }
}
