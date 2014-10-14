(function(){
    var app = angular.module('laserLog', [ ]);

    app.controller('LogController', function(){
        this.materials = materials;
        // this.cuts = cuts;
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


//     function findByName(array, name){
//     _.forEach(array, function(obj){
//         if(_.contains(obj, name)){
//           console.log(obj.id);
//             return obj.id;
//         }
//     })
// }
  
    app.directive('tabControl', function(){
      return{
        restrict: 'E',
        templateUrl: 'tab-control.html'
      }
    })

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
              // console.log(item);
              if(_.contains(item, material)){
                console.log(this.cut);
                materials[item.id].cuts.push(this.cut);
              };
            })
            this.cut = {};
        };
        },
        controllerAs: "cutCtrl"
      };
    })


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
            engrave: { },
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
          cuts: []
        }
    ];

var cuts = [
  {
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
  engrave: true,
  engraveSpeed: 30,
  engravePower: 300,
  engraveScanGap: 0.1,
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
  engrave: false,
  notes: ''
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
  engrave: { },
  notes: ''
  }
];

})();

