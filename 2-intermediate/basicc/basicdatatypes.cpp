/*
some c++ data types, their format specifier and their 
most common bit widths are as follows:

Int("%d"):32 Bit integer
Long("%ld"): 64 bit integer
char(%c): Character type
float("%f"): 32 bit real value
Double("%lf"): 64 bit real value
*/

#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    std::string s;
    for (int i=0; i<5; i++) {
        std::cin>>s;
        std::cout<< s<<std::endl;
    }
    return 0;
}
