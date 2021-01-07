#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cassert>
using namespace std;

/*
input: 

3
string John Doe
int 1 2
float 4.0 1.5

output:

JohnDoe
3
5.5
*/

int will_run_before_main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    return 0;
}

int r = will_run_before_main();

#define endl '\n';
template <typename T>
class AddElements {
    private:
        T element1{};
    public:
        AddElements(T elem): element{elem} {}
        T add(T element2) {
            return element1 + element2;
        }
};

template <>
class AddElements <string> {
    private:
        string element1{};
    public:
        AddElements(string str): element1{str}{}
        string concatenate(string element2) {
            return element1.append(element2);
        }
};
int main() {
    int n,i;
    cin >> n;
    for(i=0;i<n;i++) {
        string type;
        cin >> type;
        if(type=="float") {
            double element1,element2;
            cin >> element1 >> element2;
            AddElements<double> myfloat (element1);
            cout << myfloat.add(element2) << endl;

        }
        else if (type == "int") {
            int element1, element2;
            cin >> element1 >> element2;
            addElements<int> myint (element1);
            cout << myint.add(element2) << endl;
        }
        else if(type == "string") {
            string element1, element2;
            cin >> element1 >> element2;
            AddElements<string> mystring (element1);
            cout << mystring.concatenate(element2) << endl;
        }
    }
    return 0;
}