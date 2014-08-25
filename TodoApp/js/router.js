//tells ember to detect when url === '/'
//and to render the todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function(){
    this.route('active');
    this.route('completed');
  });
});


//implement a TodosRoute class with a model function that returns all the existing todos:
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

//
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});


 //model data is the collection of todos whose isCompleted = false
Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
// Normally transitioning into a new route changes the template rendered into the parent {{outlet}},
//in this case we'd like to reuse the existing todos/index template.
//We implement the renderTemplate method and call render with the specific template & controller options.
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo){
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller) {
        this.render('todos/index', {controller:controller});
    }
});