const breadthFirst = (startingNode, callback) => {
  const queue = [startingNode];
  while(queue.length) {
    const node = queue.shift();
    callback(node)
    queue.push(...node.children)
  }
}

const depthFirstPreOrder = (startingNode, callback) => {
  callback(startingNode);
  startingNode.children.forEach(node=> {
    depthFirstPreOrder(node, callback);
  })
}

const depthFirstPostOrder = (startingNode, callback) => {
  startingNode.children.forEach(node => {
    depthFirstPostOrder(node, callback);
  });
  callback(startingNode)
}

function node(value) {
  return {
    value,
    children: [],
  };
}
const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);
