class Solution {
    public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size();

        // count the zeroes
        int numZeroes = 0;
        for (int i = 0; i < n; i++) {
            numZeroes += (nums[i] == 0);
        }

        // make all the non-zero elements retain the original order.
        vector<int> ans;
        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                ans.push_back(nums[i]);
            }
        }

        // move all zeroes to the the end
        while (numZeroes--) {
            ans.push_back(0);
        }

        // combine the result
        for (int i = 0; i < n; i++) {
            nums[i] = ans[i];
        }
    }

    int main() {
        cout<<"hello";
    }
};