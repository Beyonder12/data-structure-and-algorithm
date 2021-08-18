result1 = {
    a: {
        p:1, s :0
    },
    b: {
        p:1, s :0
    },
    c: {
        p:1, s :0
    }
}

result2 = {
    a: {
        p:0, s :2
    },
    b: {
        p:1, s :1
    },
    c: {
        p:2, s :0
    }
}

resultTest = {};
resultTest.a = {},
resultTest.b = {},
resultTest.c = {},

resultTest.a.p = result1.a.p + result2.a.p;
resultTest.a.s = result1.a.s + result2.a.s;
resultTest.b.p = result1.b.p + result2.b.p;
resultTest.b.s = result1.b.s + result2.b.s;
resultTest.c.p = result1.c.p + result2.c.p;
resultTest.c.s = result1.c.s + result2.c.s;


// console.log(resultTest);


class Node{
    constructor(data, left, right) {
        this.data = data;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);


console.log(typeof(root));
