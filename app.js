(function(){
    var app = angular.module('laserLog', [ ]);

    app.controller('LogController', function(){
        this.materials = materials;
        this.projects = projects;
    });

    app.controller('TabController', function(){
        this.tab = 0;
        this.setTab = function(setTab){
            this.tab = setTab;
        };
        this.checkTab = function(checkTab){
            return this.tab === checkTab;
        };
    });


    var materials = [
        {id: 1,
          name: 'Acrylic',
          note: '',
          projects : [{
            date: "8/8/2014",
            time: "19:06:42",
            userName: 'Alisa Palson',
            projectName: 'dickbutts',
            material: 'Acrylic',
            thickness: 6,
            speed: 10,
            power: 40,
            totalTime: 25,
            numPasses: 1,
            engrave: {
                cut: 30,
                power: 300,
                scanGap: 0.1,
            },
            notes: 'word'
          },
          {
            date: "8/7/2014",
            time: "16:33:24",
            userName: 'Dan Puffer',
            projectName: 'Blanket Puzzle',
            material: 'Acrylic',
            thickness: 6,
            speed: 10,
            power: 50,
            totalTime: 120,
            numPasses: '',
            engrave: { },
            notes: ''
          }]
        },
        {id: 2,
          name: 'Anodized Aluminum',
          note: 'etching only'
        },
        {id: 3,
          name: 'Corrugated Cardboard',
          note: ''
        },
        {id: 4,
          name: 'Glass',
          note: 'etching only'
        },
        {id: 5,
          name: 'Leather',
          note: 'naturally dyed only'
        },
        {id: 6,
          name: 'MDF',
          note: ''
        },
        {id: 7,
          name: 'Paper',
          note: ''
        },
        {id: 8,
          name: 'Plywood',
          note: ''
        },
        {id: 9,
          name: 'Fabric',
          note: ''
        }
    ];


    var projects = [{
            time: "8/8/2014 19:06:42",
            userName: 'Alisa Palson',
            projectName: 'dickbutts',
            material: 'Acrylic',
            thickness: 6,
            speed: 10,
            power: 40,
            totalTime: 25,
            numPasses: 1,
            engrave: {
                cut: 30,
                power: 300,
                scanGap: 0.1,
            },
            notes: 'word'
          },
          {
            time: "8/7/2014 16:33:24",
            userName: 'Dan Puffer',
            projectName: 'Blanket Puzzle',
            material: 'Acrylic',
            thickness: 6,
            speed: 10,
            power: 50,
            totalTime: 120,
            numPasses: '',
            engrave: { },
            notes: ''
          }]
})();




  // {
  //   "Timestamp":"8/8/2014 19:06:42",
  //   "Start Time":"8/8/2014 18:00:00",
  //   "End Time":"8/8/2014 19:00:00",
  //   "Project Title":"die",
  //   "Your Name":"Tim M",
  //   "Was the laser clean when you started?":"No",
  //   "Did you clean the laser?":"Yes",
  //   "Laser run time (in minutes) total for all parts/copies":25,
  //   "Material":"Acrylic",
  //   "Thickness (in mm)":6,
  //   "Cutting Speed":10,
  //   "Cutting Power":40,
  //   "What type of use was this?":"",
  //   "Engraving Scan Gap (if engrave)":"0.1",
  //   "Number of passes":1,
  //   "Project Notes":"",
  //   "Machine Notes":"laser is crazy dirty,",
  //   "Engraving Speed":300,
  //   "Engraving Power":30
  // },