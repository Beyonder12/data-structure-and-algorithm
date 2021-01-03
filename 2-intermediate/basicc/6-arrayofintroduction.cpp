#include <vector>
#include <iostream>
#include <iterator>

int main() {

    std::size_t size {}; // here we use std::size_t instead of int because an array size cannot be negative

    std::cin >> size;
    std::vector<int> vect(size);
    for (std::size_t i{}; i < size; ++i)
        std::cin >> vect[i];

    
    // one of the many advantages to use c++ STL containers:
    // we can use reverse iterators
    
    for (auto rit = vect.rbegin(); rit != vect.rend(); ++rit)
        std::cout << *rit << ' ';
    std::cout << std::endl;
    return 0;

}