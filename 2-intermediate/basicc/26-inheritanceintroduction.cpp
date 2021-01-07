#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Triangle{
    public:
        void triangle(){
            cout<<"I am a triangle\n";
        }
};

class Isosceles : public Triangle{
    public:
    void description(){
        cout<<"In an isosceles triangle two sides are equal"<<endl;
    }
        void isosceles(){
            cout<<"I am an isosceles triangle\n";
        }
};
int main(){
    Isosceles isc;
    isc.isosceles();
    isc.description();
    isc.triangle();
    return 0;
}