import java.util.Arrays;

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int p = 0, q = numbers.length-1;

        while (numbers[p] + numbers[q] != target && p < q) {
            if(numbers[p] + numbers[q] > target) q--;
            else p++;
        }

        return new int[]{p+1,q+1};
    }
}

public class twoSumSorted {
    public static void main(String[] args) {
        int[] arr = new Solution().twoSum(new int[]{-1,0}, -1);

        System.out.println(Arrays.toString(arr));
    }
}