import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
  HashMap<Integer, Integer> winners = new HashMap<>();
  HashMap<Integer, Integer> loosers = new HashMap<>();

  public void findWinners(int[][] matches) {
      for(int i = 0; i<matches.length;i++){
        int zero = matches[i][0];

        if(winners.containsKey(zero)){
          int currentValue = winners.get(zero);
          winners.put(zero, ++currentValue);
        }else{
          winners.put(zero, 1);
        }
      }

      for(int i = 0; i<matches.length;i++){
        int one = matches[i][1];

        if(loosers.containsKey(one)){
          if(winners.containsKey(one)) winners.remove(one);
          int currentValue = loosers.get(one);
          loosers.put(one, ++currentValue);
        }else{
          loosers.put(one, 1);
        }
      }

    // List<List<Integer>> resultList = new ArrayList<>();

    for(Map.Entry<Integer,Integer> entry: winners.entrySet()){
      System.out.print(entry.getKey() + " ");
    }
    System.out.println();
  }
}


public class zeroOrOneLosses {
  public static void main(String[] args) {
    int [][]matches = {{1,3},{2,3},{3,6},{5,6},{5,7},{4,5},{4,8},{4,9},{10,4},{10,9}};
    new Solution().findWinners(matches);
  }
  
}
