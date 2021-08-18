

class MyCircularQueue {
    final int[] a;
    int front, rear = -1, len = 0;

    MyCircularQueue(int k) {
        a = new int[k];
    }
    
    boolean enQueue(int val) {
        if(!isFull()) {
            rear = (rear + 1) % a.length;
            a[rear] = val;
            len++;
            return true;
        } else return false;
    }

    boolean deQueue() {
        if(!isEmpty()) {
            front = (front + 1) % a.length;
            len--;
            return true;
        } else return false;
    }

    int Front() {return isEmpty() ? - 1 : a[front];}

    int Rear() {return isEmpty() ? -1 : a[rear];}

    boolean isEmpty() {return len == 0;}

    boolean isFull() { return len == a.length;}

    public static void main(String[] args) {
        MyCircularQueue myCircularQueue = new MyCircularQueue(5);
        System.out.println(myCircularQueue.enQueue(1));
        System.out.println(myCircularQueue.enQueue(2));
        System.out.println(myCircularQueue.enQueue(3));
        System.out.println(myCircularQueue.enQueue(4));
        System.out.println(myCircularQueue.enQueue(5));
        System.out.println(myCircularQueue.Front());
        System.out.println(myCircularQueue.Rear());
        Node root = new Node(1);
        root.left = new Node (2);
        root.right = new Node(3);
        System.out.println(root.val);
    }
}

class Node {
    int val;
    Node left;
    Node right;

    Node(int _val) {
        val = _val;
    }
}
