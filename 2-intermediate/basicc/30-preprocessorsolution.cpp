#define INF 1000000
#define io(v) cin >> v
#define toStr(string) #string
#define foreach(v, i) for(int i = 0; i < v.size(); i++)
#define FUNCTION(name, operation)
#define minimum(x, y) if(x>y) {x = y;}
#define maximum(x, y) if(x < y) {x = y;}

/*
semicolon is a command in c++ that lets the compiler
know that it's reached the end of a command. semicolon is often
used to delimit one bit of C++ source code, indicating its 
intentionally seperated from the respective code
usage of semicolon in C++ is after class and structure definitions, v
variable declarations, function declarations, after each statement 
generally.

input:
5
32 332 -23 -154 65

output:
Result = 486%

*/

#include  <iostream>
#include <vector>
using namespace std;

#if !defined toStr || !defined io || !defined FUNCTION || !defined INF
#error Missing preprocessor definitions
#endif
FUNCTION(minimum, <)
FUNCTION(maximum, >)

int main() {
    int n; cin >> n;
    vector<int> v(n);
    foreach(v, i) {
        io(v)[i];
    }
    int mn = INF;
    int mx = -INF;
    foreach(v, i) {
        minimum(mn, v[i]);
        maximum(mx, v[i]);
    }
    int ans = mx - mn;
    cout << toStr(Result =) << ' ' << ans;
    return 0;
}