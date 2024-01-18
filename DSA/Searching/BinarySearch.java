package Searching;

public class BinarySearch {
  public static void main(String[] args) {
    int[] nums = { 1, 2, 3, 6, 12, 37, 88, 92 };
    System.out.println(BnrySearch(nums, 22, 0, 8));
  }

  static int BnrySearch(int[] nums, int target, int startIndex, int lastIndex) {
    if (startIndex >= lastIndex)
      return -1;

    int middlePoint = (lastIndex + startIndex) / 2;
    if (target == nums[middlePoint])
      return middlePoint;

    if (target > nums[middlePoint])
      return BnrySearch(nums, target, middlePoint + 1, lastIndex);

    if (target < nums[middlePoint])
      return BnrySearch(nums, target, startIndex, middlePoint - 1);

    return -1;
  }
}
