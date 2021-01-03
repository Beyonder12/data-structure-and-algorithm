#include <stdio.h>

/*
input and output operations can also be performed
in c++ using the c standard input and output library
(cstdio, known as stdio.h in the c language).
this library uses what are called streams to operate
with physical devices such as keyboards, printers, terminals
or with any other type of files supported by the system

*/

void update(int *a, int *b) {
    int sum = *a + *b;
    int absDifference = *a - *b > 0 ? *a - *b : -(*a - *b);
    *a = sum;
    *b = absDifference;
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;

    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}