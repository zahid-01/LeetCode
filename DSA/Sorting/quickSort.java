import java.util.Arrays;

public class quickSort {
  public static void main(String[] args) {
    int[] nums = { 100, 2, 4, 1, 0, 3, 6, 8, 9, 100, 5, 7 };
    // int[] nums = { 1, 5, 2, 6, 5 };
    System.out.println(Arrays.toString(nums));
    QSort(nums, 0, nums.length - 1);
    System.out.println(Arrays.toString(nums));
  }

  // QSort(array, startingIndex, pivot)
  static void QSort(int[] nums, int initial, int pivot) {
    if (initial >= pivot)
      return;
    int i = initial;
    int pv = pivot;

    while (pv > i) {
      if (nums[pv] < nums[i]) {
        int temp = nums[pv];
        nums[pv] = nums[i];
        nums[i] = nums[pv - 1];
        nums[pv - 1] = temp;
        pv--;
        continue;
      }
      i++;

    }
    QSort(nums, initial, pv - 1);
    QSort(nums, pv + 1, pivot);
  }
}
