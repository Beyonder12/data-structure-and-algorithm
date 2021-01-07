#include <iostream>

using namespace std;
class Rectangle
{
    protected:
        int width;
        int height;
    
    public:
    void display() {
        cout<<"d"<<" "<<"fa";
    }
};

class RectangleArea : public Rectangle {
    public:
    void read_input(){
        cin>>width>>height;
    }

    void display() {
        cout<<endl<<width*height;
    }
};

int main()
{
    //declare a RectangleArea object
    RectangleArea r_area;
    //read the width and height
    r_area.read_input();
    //print the width and height
    r_area.Rectangle::display();
    //print the area
    r_area.display();

    return 0;
}