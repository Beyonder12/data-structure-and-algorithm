/*
Data Structures

A data structure is a group of data elements grouped together under
one name. These data elements, known as members, can have different
types and different lengths. Data structures can be declared in
C++ using the following syntax.

struct type_name {
member_type1 member_name1;
member_type2 member_name2;
member_type3 member_name3;
.
.
} object_names;

type_name : name for the strucure type
object_name

ex :



*/

// example about structures

/*
#include <iostream>
#include <string>
#include <sstream>
using namespace std;

struct movies_t {
  string title;
  int year;
} mine, yours;

void printmovie (movies_t movie);

int main ()
{
  string mystr;

  mine.title = "2001 A Space Odyssey";
  mine.year = 1968;

  cout << "Enter title: ";
  getline (cin,yours.title);
  cout << "Enter year: ";
  getline (cin,mystr);
  stringstream(mystr) >> yours.year;

  cout << "My favorite movie is:\n ";
  printmovie (mine);
  cout << "And yours is:\n ";
  printmovie (yours);
  return 0;
}

void printmovie (movies_t movie)
{
  cout << movie.title;
  cout << " (" << movie.year << ")\n";
}

*/

/*
input:
6
1 3 0 5 5 8
1 1 6 2 4 1

output:
4

*/


#include <iostream>

using namespace std;

// Define the structs Workshops and Available_Workshops.
// Implement the functions initialize and CalculateMaxWorkshops
typedef struct
{
    int start;
    int duration;
    int end;
} Workshop;

typedef struct 
{
    int n;
    Workshop *signedup;
} Available_Workshops;

int cmp_ws(const Workshop &ws1, const Workshop &ws2)
{
    if (ws1.end != ws2.end)
        return ws1.end < ws2.end;
    else
        return ws1.duration < ws2.duration;
}

void prt_ws(Workshop *ws)
{
    cerr << ws->start << " " << ws->duration << " " << ws->end << endl;
}

void prt_av_ws(Available_Workshops *aw)
{
    Workshop *ws = aw->signedup;

    for (int i = 0;i < aw->n;++i, ++ws)
    {
        prt_ws(ws);
    }
}

Available_Workshops *initialize(int *start, int *duration, int n)
{
    Available_Workshops *aw = new Available_Workshops;
    aw->n = n;
    aw->signedup = new Workshop[n];

    for (int i = 0; i < n; ++i)
    {
        aw->signedup[i].start = start[i];
        aw->signedup[i].duration = duration[i];
        aw->signedup[i].end = start[i] + duration[i];
    }

    //cerr << "Input:" << endl;
    //prt_av_ws(aw);
    sort(aw->signedup, aw->signedup + n, cmp_ws);
    //cerr << "Sorted input:" << endl;
    //prt_av_ws(aw);

    return aw;
}

int CalculateMaxWorkshops(Available_Workshops *aw)
{
    int total = 0;
    int next = 0;
    Workshop *ws = aw->signedup;

    for (int i = 0; i < aw->n;++i,++ws)
    {
        if (ws->start >= next)
        {
            ++total;
            next = ws->end;
        }
    }
    
    return total;
}

int main(int argc, char *argv[])
{
    int n; //number of workshops
    cin >> n;
    //create arrays of unknown size n
    int* start_time = new int[n];
    int* duration = new int[n];

    for(int i=0; i < n; i++){
        cin >> start_time[i];
    }
    for(int i=0; i < n; i++){
        cin >> duration[i];
    }

    Available_Workshops * ptr;
    ptr = initialize(start_time, duration, n);
    cout << CalculateMaxWorkshops(ptr) << endl;
    return 0;
}