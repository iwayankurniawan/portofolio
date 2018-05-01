//DinnerModel Object constructor
var PortofolioModel = function() {

var observers = [];
var projectTypeChosen;
var chosenId;
var year = [2018,2017,2016];

  var notifyObservers = function(obj) {
    $.each(observers, function(index, observer){
      observer.update(obj);
    });
  }

  this.addObserver = function(observer) {
    observers.push(observer);
  }


  this.getYear = function(){
    return year;
  }
//save chosen ID when user clicked a project
  this.setChosenId =function(id){
    chosenId=id;
    notifyObservers("listOfProject");
  }

  this.getChosenId = function(){
    return chosenId; alert(chosenId)
  }

  this.setProjectType=function(project){
    projectTypeChosen=project;
    notifyObservers("listOfProject");
  }

  this.getProjectType = function(){
    return projectTypeChosen;
  }

  this.getFullList = function(project) {
		return this.getAllDishes(project);
    notifyObservers("listOfProject");
	}

  this.getDish = function (id) {
    for(key in projectList){
      if(projectList[key].id == id) {
        return projectList[key];
      }
    }
    return -1;
    notifyObservers("listOfProject");
  }

  this.getAllDishes = function (type) {
    return projectList.filter(function(dish) {
      var found = true;
      if (type) {
        return dish.type == type && found;
      }
      else {
        return found;
      }
      });
      notifyObservers("listOfProject");
    }

	var projectList = [{
		'id':1,
		'name':'Timelapse Game',
		'type':'it',
		'image':'timelapse.jpg',
    'year':'2017',
    'course':'DH2650 Computer Game Design',
    'tools':'Blender, Photoshop',
    'role':'Character Modelling and Animation (Rigging and Weighing)',
    'team':'Antoine Ladrech, Victor Kesten, Fredrik Ljung, I Wayan Kurniawan Aditya Wardana, Tianli Zhang, Enrique Perez Soler',
		'description':'The game was created for the course DH2650 Computer Game Design at Kungliga Tekniska Högskolan in Stockholm, Sweden. The motivation behind creating a rhythm based game was that there currently is a shortage of said games within the PC market. We established that this perhaps was because of the genre being out of style. However – this game aims to not only revive the genre but also revolutionize it by adding 3rd person bird’s-eye view shooter elements!. In this project my part is to build a model called “small enemy” in blender and put the animation for that model, so this model can be used in the game. Also, I worked to put animation in another model like “final boss” model and “crazy girl” model using blender.',
    'video':[
      {
        'link':'https://www.youtube.com/embed/m334LAF9AeE'
      },{
        'link':'https://www.youtube.com/embed/4yWVmdotADo'
      }],
    'imageList':[],
    'links':[
      {
        'site':'https://projecttimelapse.wordpress.com/',
        'explain':'Webpage for the game'},
      {
        'site':'http://techraveller.com/category/game-development/',
        'explain':'My diary post about the development of this game'},
      {
        'site':'https://goo.gl/iAoDYg',
        'explain':'Playable Demo'}]
      },{
      'id':2,
  		'name':'Spotify Game',
  		'type':'it',
  		'image':'spotify.jpg',
      'year':'2017',
      'course':'DM2601 Media Technology and Interaction Design',
      'tools':'Android Studio, Unity',
      'role':'Programmer in both android studio and unity, Conduct Evaluation for the Design',
      'team':'Fredd Duque, Harianas Dewang, I Wayan Kurniawan',
  		'description':"This project is part of the course of Media Technology and Interaction Design in KTH Royal Institute of Technology. During this course, we try to implement double diamond design process to redesign music streaming service. In this project, we choose Spotify for the music streaming service we want to redesign. Through all the double diamond design process, we found a lot of new insights and idea, at the end we conclude to put game inside Spotify." +
      "The idea to put game in Spotify, because while doing user interview we found that user listen to music in spotify when doing another activity, one of the activity is playing game. Then we want to give experience to the user about playing game based on the rhythm of the music they listen in Spotify. Also, Spotify has huge library of music, so users can play any rhythm game with no limitation of the music." +
      "From this idea, we try to replicate the spotify interfaces using android studio and build the game mechanics using Unity. Then combine it into one application. So, the spotify interfaces will have new button for playing the rhythm game and tournament interfaces to make people attach to the game.",
      'video':[],
      'imageList':[
        {
          'image':'spotify1.png'
        }],
      'links':[
        {
          'site':'https://github.com/iwayankurniawan/SpotifyGame ',
          'explain':'All Part'},
        {
          'site':'https://github.com/iwayankurniawan/RhythmGame-Unity',
          'explain':'Unity Part'}]
    },{
      'id':3,
  		'name':'Basic Chemistry Learning Apps for Junior High School Students',
  		'type':'it',
  		'image':'chemistry.jpg',
      'year':'2017',
      'course':'-',
      'tools':'Android Studio',
      'role':'Programmer',
      'team':'Alvin, Richard, Wawan',
  		'description':"My 2nd paid job for develop an android app. The purpose of this app is as learning tool for junior high student to learn basic chemistry. There are several features inside the app, there are. Periodic Table. This feature consists of periodic table, elements explanation and elements sorting based on type. When users see the periodic table, they can get explanation every element in the table by pressing the element name. Also, if users want to categorize the element based on type, there is a feature to sorting it in the periodic table. Memorize Technique. The problem of learn basic chemistry is to memorize the chemical element group. This app helps the student by providing memorize technique for all chemical group and drag and drop game, so student can train and learn in this app. Chemistry Formula. Give brief explanation of basic chemistry formula like electron affinity, atomic radius etc. If users press the picture, they will get more explanation of it.",
      'video':[],
      'imageList':[
        {
        'image':'chemistry1.png'
        }],
      'links':[
        {
          'site':'https://github.com/iwayankurniawan/TabelPeriodik',
          'explain':'Github'}
        ]
    },{
      'id':4,
  		'name':'English Learning Apps for Elementary School Students',
  		'type':'it',
  		'image':'english.jpg',
      'year':'2017',
      'course':'-',
      'tools':'Android Studio',
      'role':'Programmer',
      'team':'Alvin, Richard, Wawan',
  		'description':"This is my first project in android environment. With 2 of my friends, we try to build an app for elementary students to help them to learn English. This app consists with 3 features, there are: 1. Listening menu that help student to learn new English word by listening to the word and see the picture of the word. This menu have several categories like animals, times, activities, numbers, people around us and months. If students get confuse with the English word, we provide a Indonesia-English Dictionary to translate the English word into Indonesia. 2. Video, this feature help student, to learn English by watching some videos in several categories. The video resources are obtain from youtube using youtube API. 3. Quiz, after learning from the material above. We make a quiz for the students to test their knowledge with 20 questions. In the end their final score will be shows to them.",
      'video':[],
      'imageList':[
        {
          'image':'english1.jpg'
        }],
      'links':[
        {
          'site':'https://github.com/iwayankurniawan/LearnEnglishApp',
          'explain':'Github'}
        ]
    },{
      'id':5,
  		'name':'DC/DC Converter Using State Feedback Control',
  		'type':'electrical',
  		'image':'converter.jpg',
      'year':'2016',
      'course':'-',
      'tools':'Arduino,Eagle,Matlab',
      'role':'Hardware Design, Control Design',
      'team':'I Wayan Kurniawan, Darian Verdy',
  		'description':"In the era of renewable energy, DC-DC Converter become one important part in renewable era because most of source of renewable, like photovoltaic only produce DC voltage so it need a converter to change their voltage level to another level. With the increase renewable energy especially PV, make the usage of DC Bus to connect all the renewable source become inevitable. To connect to DC Bus all source must have same voltage with the DC Bus that’s why DC-DC Converter become one important component. One of the topology from DC-DC Converter that can work in this situation is Buck-Boost, this topology has huge advantage because it can work in two mode, the first mode to increase the voltage and the other mode to reduce the output of the voltage."+
      "However, the usage of this topology is not enough because most of the input from the renewable source is not steady and always changing, with this condition make the open loop controller that usually use for Buck-Boost topology cannot work. This condition need close loop control that can solve the unsteady input and make the output voltage always steady. Beside of that the effect of inductor usage make the system vulnerable to the oscillation, to tackle that problem people always use resistor, but it will increase losses to the system. One of control system that can help to solve this problem is state feedback controller. This controller will move the pole position of the system to the stable area and work like using resistor in the system.",
      'video':[],
      'imageList':[
        {
          'image':'converter1.jpg'
        },
        {
          'image':'converter2.jpg'
        },
        {
          'image':'converter3.jpg'
        }],
      'links':[
        {
          'site':'',
          'explain':''}
        ]
    },{
      'id':6,
  		'name':'Nao Robot as sign language tutor',
  		'type':'electrical',
  		'image':'nao.jpg',
      'year':'2018',
      'course':'DT2140 Multimodal Interaction and Interfaces',
      'tools':'-',
      'role':'-',
      'team':'I Wayan Kurniawan, Fredd Duque, Vincent Erik Wong, Malin Augustsson',
  		'description':"",
      'video':[],
      'imageList':[],
      'links':[
        {
          'site':'https://vimeo.com/250599780',
          'explain':'video'}
        ]
    },{
      'id':7,
  		'name':'Away from home',
  		'type':'it',
  		'image':'away.png',
      'year':'2018',
      'course':'DH2321 Information Visualization',
      'tools':'d3.js, javascript',
      'role':'-',
      'team':'I Wayan Kurniawan, Kaua Melo, ',
  		'description':"",
      'video':[],
      'imageList':[],
      'links':[
        {
          'site':'https://sonia-ch.github.io/ivis-project/',
          'explain':'website'},
        {
          'site':'https://vimeo.com/265391354',
          'explain':'video'
          }
        ]
    }];

}
