/*
static indicates that the particular member belongs
to a type itself, rather than to an instance of that type
this means that only one instance of that static member
is created which is shared across  all the instances
of the class.

public access modifier
specify  how to access classes, methods, and fields
the access level is everywhere
-inside a class, outside class, inside/outside package

private access modifier
the access level is only inside the class

static non-access modifier
you can acces fields/methods using the class name
ex:
System.out 
out is a static field of system

*/


import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.lang.reflect.*;

public class Singleton {
    private volatile static Singleton instance;
    public static String str;
    private Singleton() {}

    static Singleton getSingleInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    
}
