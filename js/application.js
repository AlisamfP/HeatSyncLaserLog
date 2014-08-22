//create a new instance of Ember.Application and
//makes a variable named Todos within your browser's JavaScript environment
window.Todos = Ember.Application.create();

//Sets your application's ApplicationAdapter as an extension of the DS.FixtureAdapter
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();