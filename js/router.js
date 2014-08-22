//tells ember to detect when url === '/'
//and to render the todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});


//implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});