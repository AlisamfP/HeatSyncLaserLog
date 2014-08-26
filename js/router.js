LaserLog.Router.map(function() {
  this.resource('material', { path: '/'}, function(){
    this.route('projects', { path: '/:material.title'});
  });
});

LaserLog.MaterialRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('material');
  }
});

LaserLog.ProjectsRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('projects');
    }
})

// LaserLog.CutsRoute = Ember.Route.extend({
//     model: function(){
//         Ember.$.getJSON('shortenedlaserlog.json').then(function(data){
//             console.log(data);
//         }, console.log('error'));
//     }
// })
