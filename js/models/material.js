LaserLog.Material = DS.Model.extend({
  title: DS.attr('string')
  // note: DS.attr('string')
});

LaserLog.Material.FIXTURES = [
{
  id: 1,
  title: 'Acrylic'
},
{
  id: 2,
  title: 'Anodized Aluminum'
  // note: 'etching only'
},
{
  id: 3,
  title: 'Corrugated Cardboard'
},
{
  id: 4,
  title: 'Glass'
  // note: 'etching only'
},
{
  id: 5,
  title: 'Leather'
  // note: 'naturally dyed only'
},
{
  id: 6,
  title: 'MDF'
},
{
  id: 7,
  title: 'Paper'
},
{
  id: 8,
  title: 'Plywood'
},
{
  id: 9,
  title: 'Fabric'
}
];