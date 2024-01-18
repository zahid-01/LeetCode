import java.util.Arrays;

/**
 * insertionSort
 */
public class insertionSort {
  public static void main(String[] args) {
    int[] nums = {2,4,1,0,3,6,8,9,5,7};
    System.out.println(Arrays.toString(nums));
    sort(nums);
    System.out.println(Arrays.toString(nums));
  }

  static void sort(int[] nums){
    for(int i = 1; i < nums.length; i++){
      int key = nums[i];
      int j = i - 1;
      while (j >= 0 && key < nums[j]) {
        nums[j + 1] = nums[j];
        j--;
      }

      nums[j + 1] = key;
    }
  }
}