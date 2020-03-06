class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
 
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function display(stack) {
  let tempNode = stack.top;

  while(tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}

//allows you to look at the top of the stack without removing it
function peek(stack) {
  return stack.top.data;
}

function isEmpty(stack) {
  return stack.top === null ? true : false;
}


function main() {
  let starTrek = new Stack();
  let newStack = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(peek(starTrek));
  console.log(isEmpty(newStack));
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}

main();