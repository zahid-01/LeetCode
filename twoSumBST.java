
//  Definition for a binary tree node.

import java.util.HashMap;

class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }
 
class Solution {
  HashMap<Integer, Boolean> nodes = new HashMap<>();

  public boolean findTarget(TreeNode root, int k) {
    if(root == null ) return false;
    int val = root.val;  
    if(nodes.containsKey(k - val)) return true;
    if(!nodes.containsKey(val)) nodes.put(val, true);

   return findTarget(root.left, k) ||  findTarget(root.right, k);
  }
}

public class twoSumBST {
  
}
