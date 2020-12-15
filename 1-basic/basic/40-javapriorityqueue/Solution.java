import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Comparator;
import java.util.PriorityQueue;

class Student {
    private final int id;
    private final String name;
    private final double cgpa;

    public Student(int id, String name, double cgpa) {
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }

    public int getID() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getCGPA() {
        return cgpa;
    }
}

class StudentComparator implements Comparator<Student> {
    @Override
    public int compare(Student o1, Student o2) {
        if (o1.getCGPA() == o2.getCGPA()) {
            if(o1.getName().equals(o2.getName())) {
                return Integer.compare(o2.getID(), o1.getID());
            } else {
                return o1.getName().compareTo(o2.getName());
            }
        }
        return Double.compare(o2.getCGPA(), o1.getCGPA());
    }
}

class Priorities {
    public List<Student> getStudents(List<String> events) {
        PriorityQueue pq = new PriorityQueue<>(events.size(), new StudentComparator());

        for (String event: events) {
            String parts[] = event.split("");

            if (parts[0].equals("ENTER")) {
                Student stu = new Student(Integer.parseInt(parts[3]), parts[1], Double.parseDouble(parts[2]));
                    pq.add(stu);
            } else {
                if (!pq.isEmpty()) {
                    pq.poll();
                }
            }
        }

        List<Student> students = new ArrayList<>();
        while (!pq.isEmpty()) {
            students.add((Student) pq.poll());
        }

        return students;
                
    }
}
public class Solution {
    private final static Scanner scan = new Scanner(System.in);
    private final static Priorities priorities = new Priorities();

    public static void main(String[] args) {
        int totalEvents = Integer.parseInt(scan.nextLine());
        List<String> events = new ArrayList<>();

        while (totalEvents-- !=0) {
            String event = scan.nextLine();
            events.add(event);
        }
        List<Student> students = priorities.getStudents(events);

        if (students.isEmpty()) {
            System.out.println("EMPTY");
        } else {
            for (Student st: students) {
                System.out.println(st.getName());
            }
        }
    }
}
