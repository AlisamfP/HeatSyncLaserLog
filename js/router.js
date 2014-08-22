//tells ember to detect when url === '/'
//and to render the todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

// Todos.TodosRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('todo');
//   }
// });