import java.util.Arrays;

public class mergeSort {
  public static void main(String[] args) {
    int[] nums = {2,4,1,0,3,100,6,100,8,9,5,7};
    System.out.println(Arrays.toString(nums));
    MSort(nums, 0, nums.length -1);
    System.out.println(Arrays.toString(nums));
  }  

  static void MSort(int[] nums, int p, int q){
    if(p<q){
      int r = (p+q)/2;
      MSort(nums, p, r);
      MSort(nums, r +1, q);
      merge(nums, p, r, r+1, q);
    }
  }

  static void merge(int[] nums, int p, int r, int s, int q){
    int[] n1 = new int[r-p + 2];
    int[] n2 = new int[q-s + 2];

    int l1 = 0;
    int l2 = 0;

    for(int i = p; i<=r; i++){
      n1[l1++] = nums[i];
    }
    
    for(int j = s; j<=q; j++){
      n2[l2++] = nums[j];
    }
    n1[l1] = Integer.MAX_VALUE;
    n2[l2] = Integer.MAX_VALUE;
    
    int p1 = 0;
    int p2 = 0;
    int h = p;
    while(true){
      if(n1[p1] > n2[p2])
      nums[h++] = n2[p2++]; 
      
      if(n1[p1] < n2[p2])
      nums[h++] = n1[p1++];
      if(h>q) break;
      
      if(n1[p1] == n2[p2]){
        nums[h++] = n1[p1++];
        nums[h++] = n2[p2++];
      }
    }
  }
}
