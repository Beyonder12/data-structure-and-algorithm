public class Solution {

    public TreeNode buildTreePostIn(int[] inorder, int[] postorder) {
        if(inorder == null || postorder == null || inorder.length != postorder.length) return null;
        HashMap<Integer, Integer> hashMap = new HashMap<Integer, Integer>();
        for(int element : inorder) hashMap.put(element, i);
        return buildTreePostIn(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, hashMap);
    }

    private TreeNode buildTreePostIn(int[] inorder, int inorderStart, int inorderEnd, int[] postorder, int postorderStart, int postorderEnd, HashMap<Integer, Integer> hashMap) {
        if(postorderStart > postorderEnd || inorderStart > inorderEnd) return null;
        TreeNode root = new TreeNode(postorder[postorderEnd]);
        int rootIndex = hashMap.get(postorder[postorderEnd]);
        TreeNode leftchild = buildTreePostIn(inorder, inorderStart, rootIndex - 1, postorder, postorderStart, postorderStart + rootIndex - inorderStart - 1, hashMap);
        TreeNode rightchild = buildTreePostIn(inorder, rootIndex + 1, inorderEnd, postorder, postorderStart + rootIndex - inorderStart, postorderEnd - 1, postorderEnd - 1, hashMap);
    }
    
}


