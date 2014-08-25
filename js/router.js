LaserLog.Router.map(function() {
  this.resource('material', { path: '/' });
});

LaserLog.MaterialRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('material');
  }
});