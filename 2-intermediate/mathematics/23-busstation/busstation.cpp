#undef NDEBUG
#ifdef ssul
#define _GLIBCXX_DEBUG
#endif

#include <algorithm>
#include <functional>
#include <numeric>
#include <iostream>
#include <cstdio>
#include <cmath>
#include <cstdlib>
#include <ctime>
#include <cstring>
#include <cassert>
#include <vector>
#include <list>
#include <map>
#include <set>
#include <deque>
#include <queue>
#include <bitset>
#include <sstream>

/*
input:
8
1 2 1 1 1 2 1 3

output
3 4 6 12
*/

using namespace std;

#define fore(i, l, r) for(int i = int(l); i < int(r); ++i)
#define forn(i, n) fore(i, 0, n)
#define fori(i, l, r) fore(i, l, (r) + 1)
#define sz(v) int((v).size())
#define all(v) (v).begin(), (v).end()
#define pb push_back
#define mp make_pair
#define X first
#define Y second

template<typename T> inline T abs(T a) { return ((a < 0) ? - a: a); }
template<typename T> inline T sqr(T a) {return a * a; }

typedef long long li;
typedef long double ld;
typedef pair<int, int> pt;

bool check(const vector<int>& a, int block){
    int cur = 0;
    forn(i, sz(a)){
        if(cur + a[i] > block)
            return false;

        cur += a[i];

        if(cur == block)
            cur = 0;
    }
    return cur == 0;
}

int main() {
    #ifdef ssul
        assert(freopen("input.txt", "rt", stdin));
    #endif

        int n, sum = 0;
        cin >> n;
        vector<int> a(n);

        forn(i, n){
            cin >> a[i];
            sum += a[i];
        }

        vector<int> result;
        for(int d = 1; d * d <= sum; d++){
            if(sum % d == 0){
                if(check(a, d))
                    result.pb(d);
                if(sum / d != d && check(a, sum / d))
                    result.pb(sum / d);
            }
        }

        sort(all(result));
        forn(i, sz(result)){
            if(i)
                cout << " ";
            cout << result[i];
        }
        cout << endl;
    #ifdef ssul
        cerr << "\nTime = " << double(clock()) / CLOCKS_PER_SEC << endl;
    #endif 
        return 0;
}