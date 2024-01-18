package Searching;

public class LinearSearch {
  public static void main(String[] args) {
    int[] nums = { 2, 4, 7, 1, 33 };
    System.out.println(LSearch(nums, 333));
  }

  static int LSearch(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == target)
        return i;
    }

    return -1;
  }
}
