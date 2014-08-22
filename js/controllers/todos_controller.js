//Responds to action by using newTitle property
//as the title of a new todo whose isCompleted property is false. 

//Then it clears its newTitle property, synchronizing it to the 
//template and reseting the textfield.

//Finally, it persists any unsaved changes on the todo.

Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title) { return false; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});