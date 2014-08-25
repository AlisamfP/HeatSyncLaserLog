//create a new instance of Ember.Application and
//makes a variable named Todos within your browser's JavaScript environment
window.Todos = Ember.Application.create();

//Sets your application's ApplicationAdapter as an extension of the DS.FixtureAdapter
//Adapters are responsible for communicating with a source of data for your application
//Typically this will be a web service API,
//but in this case we are using an adapter designed to load fixture data:
Todos.ApplicationAdapter = DS.FixtureAdapter.extend({
    namespace: 'todos-emberjs'
});