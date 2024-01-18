import java.util.*;
class RandomizedSet {
    Set<Integer> integerSet = new HashSet<>();
    public RandomizedSet() {
    }
    
    public boolean insert(int val) {
      if(!integerSet.contains(val)){
        integerSet.add(val);
        return true;
      }

      return false;
    }

    public boolean remove(int val) {
        return integerSet.remove(val);
    }

    public int getRandom() {
      List<Integer> integers = new ArrayList<>(integerSet);
      
      
        // Create a Random object
        Random random = new Random();

        // Get a random index
        int randomIndex = random.nextInt(integers.size());

        // Return the element at the random index
        return integers.get(randomIndex);

    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */

public class order1Operations {
    public static void main(String[] args) {
        // RandomizedSet so = new RandomizedSet();
    }
}
