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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let strSplit = s.split('');
  let ssstack = new Stack();
  for(let i = 0; i < strSplit.length; i++) {
    ssstack.push(strSplit[i]);
  }
  for(let i = 0; i < strSplit.length; i++) {
    if(ssstack.pop() !== strSplit[i]) {
      return false;
    }
  }
  return true;
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matching(string) {
  let ssstack = new Stack();
  let count = 0;
  let strSplit = string.split('');
  let error = '';
  for(let i = 0; i < strSplit.length; i++) {
    ssstack.push(strSplit[i]);
  }
  for(let i = 0; i < strSplit.length; i++) {
    if(ssstack.pop() === ')') {
      count++;
    }
    else {
      count--;
    }
  }
  if(count < 0){
    error = ' ya got too many ( ';
  }
  if(count > 0){
    error = ' ya got too many ) ';
  }
  return count !== 0 ? error : true;
}

//console.log(matching('(((('))

function sort() {
  let stackA = new Stack();
  stackA.push(2);
  stackA.push(5);
  stackA.push(6);
  stackA.push(3);

  let stackB = new Stack();
  let temp;
  //let temp = stackA.pop()
  while(!isEmpty(stackA)) {

    // if(temp < stackA.peek()) {
    //   stackB.push(temp)
    //   temp = stackA.pop()
    // }
    // if(temp > stackA.peek()) {
    //   if(stackA.peek() > stackB.peek()) {
    //     stackB.push(stackA.pop())
    //   }
    //   //swap temp and a
    // }
  }
  stackB.push(temp);
}

class _NodeQ {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enQ(data) {
    const node = new _NodeQ(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  deQ() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peekQ(queue) {
  return queue.first.value;
}

function isEmptyQ(queue) {
  return queue.first === null ? true : false;
}

function displayQ(queue) {
  let tempNode = queue.first;

  while(tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}

function mainQ() {
  let starQ = new Queue();
  let emptyQ = new Queue();
  starQ.enQ('Kirk');
  starQ.enQ('Spock');
  starQ.enQ('Uhura');

  console.log(peekQ(starQ));
  console.log(isEmptyQ(starQ));
  console.log(isEmptyQ(emptyQ));
  starQ.deQ();
  starQ.deQ();
  displayQ(starQ);
  
}

//mainQ()

class _NodeQ2 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class Queue2 {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enQ(data) {
    const node = new _NodeQ2(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.previous = this.last;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  deQ() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.previous = null;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function mainQ2 () {
  let starQ = new Queue2();
  let emptyQ = new Queue2();
  starQ.enQ('Kirk');
  starQ.enQ('Spock');
  starQ.enQ('Uhura');
  //displayQ(starQ)
  // console.log(peekQ(starQ))
  // console.log(isEmptyQ(starQ))
  // console.log(isEmptyQ(emptyQ))
  starQ.deQ();

  displayQ(starQ);
  
}
//mainQ2()

class QueueStack {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enQ(data) {
    const node = new _NodeQ(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  deQ() {
    if (this.first === null) {
      return;
    }
    let stackB = new Stack();

  //  const node = this.first;
  //  this.first = this.first.next;
  //   //if this is the last item in the queue
  //  if (node === this.last) {
  //      this.last = null;
  //  }
  //  return node.value;
  }
}


function squareDance() {
  let tempQ = new Queue();
  let mainQ = new Queue();

  mainQ.enQ('F');
  mainQ.enQ('M');
  mainQ.enQ('M');
  mainQ.enQ('M');
  mainQ.enQ('F');
  mainQ.enQ('M');
  mainQ.enQ('M');
  mainQ.enQ('F');
  // displayQ(mainQ);
  // console.log(peekQ(mainQ));
  // console.log(mainQ.deQ());

  while(!isEmptyQ(mainQ)) { //while mainQ is not empty
    tempQ.enQ( mainQ.deQ()); // first val of main into temp
    //if they are a pair, deQ both of them
    if(peekQ(tempQ) !== peekQ(mainQ)) {
      console.log(`Dancer ${peekQ(tempQ)} is paired with ${peekQ(mainQ)}`);
      tempQ.deQ();
      mainQ.deQ();
    }
  }
  displayQ(tempQ);
}

// squareDance();


//ophidian
//out

function Ophidian() {
  let mainQ = new Queue();

  mainQ.enQ('true');
  mainQ.enQ('true');
  mainQ.enQ('false');
  mainQ.enQ('true');
  mainQ.enQ('true');
  mainQ.enQ('false');
  mainQ.enQ('true');
  mainQ.enQ('true');
  displayQ(mainQ);

  //don't know length of queue, so while loop
  //if customer is true, deQ because true paperwork
  //if peekQ(mainQ) === true ... mainQ.deQ()
  //else customer is false, bad paperwork
  // mainQ.enQ(mainQ.deq())
  //
  while(!isEmpty(mainQ)) {
    if(peekQ(mainQ) === 'true') {
      mainQ.deQ();
    }
    else {
      mainQ.enQ(mainQ.deQ());
    }
    console.log('_________________________________________');
    displayQ(mainQ);
  }
}

Ophidian();




