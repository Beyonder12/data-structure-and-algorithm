#include <iostream>
//iomanip is a library is used to manipulate the output of cpp
// program.
#include <iomanip>
using namespace std;

int main() {
    int T; cin >> T;
    cout << setiosflags(ios::uppercase);
    cout << setw(0xf) << internal;
    while(T--) {
        double A; cin >> A;
        double B; cin >> B;
        double C; cin >> C;

        printf("%#lx\n",(long int)A);
        printf("%.*s%+.2f\n",15 - to_string((int)B).length() - 4, "_________________", B);
        printf("%.9E\n",C);
    }
    return 0;
}