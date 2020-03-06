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

//main();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let strSplit = s.split("")
  let ssstack = new Stack()
  for(let i = 0; i < strSplit.length; i++) {
    ssstack.push(strSplit[i])
  }
  for(let i = 0; i < strSplit.length; i++) {
    if(ssstack.pop() !== strSplit[i]) {
      return false
    }
  }
  return true
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matching(string) {
  let ssstack = new Stack()
  let count = 0;
  let strSplit = string.split("")
  let error = '';
  for(let i = 0; i < strSplit.length; i++) {
    ssstack.push(strSplit[i])
  }
  for(let i = 0; i < strSplit.length; i++) {
    if(ssstack.pop() === ')') {
      count++
    }
    else {
      count--
    }
  }
  if(count < 0){
    error = ' ya got too many ( '
  }
  if(count > 0){
    error = ' ya got too many ) '
  }
  return count !== 0 ? error : true
}

//console.log(matching('(((('))

[1,2,3,4,5,1,2,3]

1     
1    
2    1
2    5
3    4
3    3
4    2    2
5    1    3    