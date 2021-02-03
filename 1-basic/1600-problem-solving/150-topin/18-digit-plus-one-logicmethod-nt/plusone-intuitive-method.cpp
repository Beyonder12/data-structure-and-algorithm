#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
    static vector<int> plusOne(vector<int>& digits) {
        for(int i = digits.size() - 1; i >= 0; i--) {
            if(digits[i] != 9) {
                digits[i]++;
                return digits;
            }
            else
                digits[i] = 0;
        }
        digits.insert(digits.begin(), 1);
        return digits;
    }
};

int main() {
    vector<int> vect; 
    vect.push_back(0); 
    vect.push_back(0); 
    cout <<Solution::plusOne(vect)<< endl;

    return 0;
}