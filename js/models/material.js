LaserLog.Material = DS.Model.extend({
  title: DS.attr('string'),
  note: DS.attr('string'),
  projects: DS.hasMany('project')
});

LaserLog.Project = DS.Model.extend({
  userName: DS.attr('string'),
  projectName: DS.attr('string'),
  date: DS.attr('date'),
  material: DS.belongsTo('material'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  thickness: DS.attr('number'),
  cutSpeed: DS.attr('number'),
  cutPower: DS.attr('number'),
  engraved: DS.attr('boolean', {defaultValue: false}),
  passes: DS.attr('number'),
  laserRunTime: DS.attr('number'),
  cleanLaserStart: DS.attr('boolean'),
  cleanLaserAfter: DS.attr('boolean'),
  projectNotes: DS.attr('string')
});

LaserLog.Engrave = DS.Model.extend({
  project: DS.belongsTo('project'),
  engraveSpeed: DS.attr('number'),
  engravePower: DS.attr('number'),
  scanGap: DS.attr('number')
});
// LaserLog.Project.FIXTURES = [
// {
//   userName: 'Alisa Palson',
//   projectName: 'dickbutts',
//   date: '8/3/2014',
//   material: 'acrylic',
//   startTime: '8/3/2014 16:00:00'
//   endTime: '8/3/2014 16:16:00'
//   thickness: 5,
//   cutSpeed: 10,
//   cutPower: 65,
//   engraved: true,
//   passes: 0.1,
  
// }]
//   "Timestamp":"8/3/2014 16:17:41",
//     "Start Time":"8/3/2014 16:00:00",
//     "End Time":"8/3/2014 16:16:00",
//     "Project Title":"Panel face",
//     "Your Name":"Robert Douglass",
//     "Was the laser clean when you started?":"Yes",
//     "Did you clean the laser?":"Yes",
//     "Laser run time (in minutes) total for all parts/copies":3,
//     "Material":"Acrylic",
//     "Thickness (in mm)":5,
//     "Cutting Speed":10,
//     "Cutting Power":65,
//     "What type of use was this?":"",
//     "Engraving Scan Gap (if engrave)":"0.1",
//     "Number of passes":2,
//     "Project Notes":"Works great, this was a test run from being maintenanced.",
//     "Machine Notes":"",
//     "Engraving Speed":300,
//     "Engraving Power":30


LaserLog.Material.FIXTURES = [
{id: 1,
  title: 'Acrylic',
  note: null,
},
{id: 2,
  title: 'Anodized Aluminum',
  note: 'etching only'
},
{id: 3,
  title: 'Corrugated Cardboard',
  note: null
},
{id: 4,
  title: 'Glass',
  note: 'etching only'
},
{id: 5,
  title: 'Leather',
  note: 'naturally dyed only'
},
{id: 6,
  title: 'MDF',
  note: null
},
{id: 7,
  title: 'Paper',
  note: null
},
{id: 8,
  title: 'Plywood',
  note: null
},
{id: 9,
  title: 'Fabric',
  note: null
}];
