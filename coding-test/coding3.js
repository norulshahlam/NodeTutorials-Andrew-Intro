var head = null;

// Link list node
class Node {
  constructor(next, val) {
    this.data = val;
    this.next = next;
  }
}

// Function to get the middle of
// the linked list
function printMiddle(head) {
  var count = 0;
  var mid = head;

  while (head != null) {
    // Update mid, when 'count'
    // is odd number
    if (count % 2 == 1) mid = mid.next;

    ++count;
    head = head.next;
  }

  // If empty list is provided
  if (mid != null)
    document.write("The middle element is [" + mid.data + "]<br/><br/>");
}

function push(head_ref, new_data) {
  // Allocate node
  var new_node = new Node(head_ref, new_data);

  // Move the head to povar to the new node
  head = new_node;
  return head;
}

// A utility function to prvar a
// given linked list
function printList(head) {
  while (head != null) {
    document.write(head.data + "-> ");
    head = head.next;
  }
  document.write("null<br/>");
}

// Driver code

for (i = 5; i > 0; i--) {
  head = push(head, i);
  printList(head);
  printMiddle(head);
}
