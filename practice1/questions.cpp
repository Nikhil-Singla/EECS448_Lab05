/* 
Time complexities for various activities on vectors
• Randomly accessing any value → O(1)
• Insertion of an element→ O(n)
• Insertion of an element at the end → O(1)
• Deletion of an element → O(n)
• Deletion of an element at the end → O(1)
• Calculating the size of vector → O(1)
• Resizing the vector → O(n)
*/

//Following struct is a linked list.
struct Node {
  int data;
  struct Node* next;
}; 

//We can delete node by copying the next node details to current node to delete.
void del (Node *target_del)
{
  node* temp;
  temp = target_del->next;
  target_del->next = temp->next;
  delete temp; //Free memory
}

//Following is doubly linked list
struct Node {
  struct Node* previous;
  int data;
  struct Node* next;
};
