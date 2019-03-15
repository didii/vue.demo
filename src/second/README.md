# Second

A typical example how other frameworks such as Angular and React handle changes.

1. Pass the variable to the child component
2. Subscribe to changes for when the child changes the value
3. Update the value in the parent
4. Pass this through to the child again
5. Child sees the new value and updates its view

This is cumbursome and leads to a lot of boilerplate code that most of the time always does the same. With Vue (as you can see in the first example), the child can simply edit the value and the parent will know of this change. Mind that you'll need to pass an object for this to work. Vue cannot listen to changes on a primitive value.