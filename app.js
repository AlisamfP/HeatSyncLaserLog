(function(){
    var app = angular.module('laserLog', [ ]);

    app.controller('LogController', function(){
        this.materials = materials;
    });

    app.controller('TabController', function(){
        this.tab = null;
        this.setTab = function(setTab){
            this.tab = setTab;
        };
        this.checkTab = function(checkTab){
            return this.tab === checkTab;
        };
    });
  
    app.directive('tabControl', function(){
      return{
        restrict: 'E',
        templateUrl: 'tab-control.html'
      };
    });

    app.directive('cutData', function(){
      return{
        restrict: 'E',
        templateUrl: 'cut-data.html'
      };
    });

    app.directive('inputForm', function(){
      return{
        restrict: 'E',
        templateUrl: 'input-form.html',
        controller: function(){
          this.cut = {};
          this.addNewCut = function(material){
            console.log(this.cut);
            this.cut.timestamp = Date.now();
            _.forEach(materials, function(item){
              if(_.contains(item, material)){
                console.log(this.cut);
                materials[item.id].cuts.push(this.cut);
              };
            });
            this.cut = {};
        };
        },
        controllerAs: "cutCtrl"
      };
    });


    var materials = [
        {id: 0,
          name: 'Acrylic',
          note: '',
          cuts: [{
  date: "8/8/2014",
  time: "19:06:42",
  userName: 'Alisa Palson',
  projectName: 'dickbutts',
  material: 'Acrylic',
  thickness: 3,
  speed: 100,
  power: 10,
  totalTime: 25,
  numPasses: 1,
  engrave: true,
  engraveSpeed: 30,
  engravePower: 300,
  engraveScanGap: 0.1,
  notes: 'word'
},
  {
    timestamp:"11/9/2013 22:39:26",
    date: "11/9/2013",
    time:"20:00:00",
    projectName:"VJ interface thingy",
    userName:"Moheeb Zara",
    totalTime:30,
    material:"Acrylic",
    thickness:6,
    speed:8,
    power:55,
    numPasses:null,
    engrave: false
  },
  {
    timestamp:"8/12/2014 15:53:01",
    date: "8/12/2014",
    time:"15:30:00",
    projectName:"Hazel 6900",
    userName:"Ryan McDermott",
    totalTime:6,
    material:"Acrylic",
    thickness:5,
    speed:15,
    power:70,
    numPasses:null,
    engrave: false
  },
{
  date: "8/7/2014",
  time: "16:33:24",
  userName: 'Dan Puffer',
  projectName: 'Blanket Puzzle',
  material: 'Acrylic',
  thickness: 6,
  speed: 10,
  power: 500,
  totalTime: 120,
  numPasses: '',
  engrave: false,
  notes: ''
}]
        },
        {id: 1,
          name: 'Anodized Aluminum',
          note: 'etching only',
          cuts: []
        },
        {id: 2,
          name: 'Corrugated Cardboard',
          // note: '',
          cuts: []
        },
        {id: 3,
          name: 'Glass',
          note: 'etching only',
          cuts: []
        },
        {id: 4,
          name: 'Leather',
          note: 'naturally dyed only',
          cuts: []
        },
        {id: 5,
          name: 'MDF',
          // note: '',
          cuts: [
          {
            Timestamp:"1/28/2014 20:19:00",
            date: "1/28/2014",
            time:"19:30:00",
            projectName:"Solder Plate 1.0",
            userName:"Eric Ose",
            totalTime:13,
            material:"MDF",
            thickness:2,
            speed:8,
            power:100,
            numPasses:null,
            engrave: false
          },
          {
            Timestamp:"3/11/2014 17:09:29",
            date:"3/11/2014",
            time:"17:07:00",
            projectName:"Arduino Case",
            userName:"Dave VanEss",
            totalTime:2,
            material:"MDF",
            thickness:3,
            speed:20,
            power:80,
            numPasses:null,
            engrave: false
          },
          {
            date: "10/11/2014",
            time: "14:33:24",
            userName: 'Penny The Cat',
            projectName: 'Cat Things',
            material: '',
            thickness: 3,
            speed: 20,
            power: 500,
            totalTime: 30,
            numPasses: '',
            engrave: false,
            notes: ''
        }]
        },
        {id: 6,
          name: 'Paper',
          // note: '',
          cuts: []
        },
        {id: 7,
          name: 'Plywood',
          // note: '',
          cuts: []
        },
        {id: 8,
          name: 'Fabric',
          // note: '',
          cuts: [  {
    Timestamp:"6/8/2014 20:46:43",
    date:"6/8/2014",
    time:"19:00:00",
    projectName:"Pokemon Pants",
    userName:"Chad Stearns",
    totalTime:75,
    material:"Fabric",
    thickness:null,
    speed: null,
    power: null,
    numPasses: null,
    engrave: true,
    engraveSpeed: 350,
    engravePower:25,
    engraveScanGap: null,
    notes:"A little too much power. I would do 21 next time"
  }]
        }
    ];


})();

