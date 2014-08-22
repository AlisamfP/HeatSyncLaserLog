Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle'); //sets newTitle property as title of new todo
      if (!title) { return false; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false //sets isCompleted to false (because if they already completed it why did they add it to a todo list!)
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  },
// remaining property returns the # of todos whose isCompleted property===false.
// If isCompleted of any todo changes, this property will be recomputed.

// inflection property returns either item or items
//depending on how many todos are currently in the list.

  remaining: function() {
  return this.filterBy('isCompleted', false).get('length');
}.property('@each.isCompleted'),

inflection: function() {
  var remaining = this.get('remaining');
  return remaining === 1 ? 'item' : 'items';
}.property('remaining')
});