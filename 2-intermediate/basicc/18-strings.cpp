#include <iostream>
#include <string>
using namespace std;

/*declarative region that provides a scope to the identifiers (the names
of types, functions, variables) inside it. Namespaces
are used to organize code into logical groups
and to prevent name collisions that can occur especially when your code base includes
multiple libraries
*/

int main() {

    string a;
    string b;

    cin >> a;
    cin >> b;
    cout << a.size() << " "<<b.size()<<endl;
    cout << a+b << endl;
    cout << b.front() + a.substr(1, a.size() - 1) << " " << a.front() + b.substr(1, b.size() - 1);
    return 0;


}