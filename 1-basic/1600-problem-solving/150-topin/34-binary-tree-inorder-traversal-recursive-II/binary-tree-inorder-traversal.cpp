#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
    vector<int> vec;
    vector<int> inorderTraversal(TreeNode* root) {
        if(root == nullptr) return {};
        inorderTraversal(root->left);
        vec.push_back(root->val);
        inorderTraversal(root->right);
        return vec;
    }
}

int main() {
    return 0;
}