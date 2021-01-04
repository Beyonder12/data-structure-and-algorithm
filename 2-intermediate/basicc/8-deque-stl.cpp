#include <iostream>
#include <algorithm> 
#include <deque>
#include <array>

/*
the header <algorithm> defines a collection of functions
especially designed to be used on ranges of elements.
A range is any squence of objects that can be accessed through 
iterators or pointers, such as an array or an instance
of some of the stl containers.

A container is a holder object that stores a collection of other objects (its elements)
they are implemented as class templates, which allows a great flexibility in the types supported as
elements.
*/

using namespace std;

void printKMax(int arr[], int n, int k) {
    int maxnum(-1);
    deque<int> mydeque;
    for (int i = 0; i<k; i++){
        mydeque.push_back(arr[i]);
    }
    maxnum = *max_element(mydeque.begin(), mydeque.end());
    cout << maxnum;
    for(int i=k; i<n; i++) {
        mydeque.push_back(arr[i]);
        if(mydeque[0]==maxnum){
            mydeque.pop_front();
            maxnum = *max_element(mydeque.begin(), mydeque.end());
            cout << " " << maxnum;
        }else{
            mydeque.pop_front();
            if(arr[i]>maxnum){
                maxnum=arr[i];
            }
            cout << " " << maxnum;
        }
    }
    cout << endl;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    int t;
    cin >> t;
    while(t>0) {
        int n,k;
        cin >> n >> k;
        int i;
        int arr[n];
        for(i=0;i<n;i++)
            cin >> arr[i];
        printKMax(arr, n, k);
        t--;
    }
    return 0;
}