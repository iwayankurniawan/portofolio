var PortofolioView = function (container, model){

  model.addObserver(this);

  this.containerProject = container;

  var showProject = function (){
    templist=model.getFullList(model.getProjectType());
    var year = model.getYear();

    for (var j = 0; j < year.length; j++) {
        container.append($("<div>").attr("id",year[j]).attr("class","row"));
        container.find("#"+year[j]).append($("<h1>").html(year[j]));
    }

    for (i=0;i<templist.length;i++){
          tempDish = templist[i];
          container.find("#"+tempDish.year).append($("<div>").attr("class","col-sm-3 imageList").attr("id","project"+tempDish.id))

          container.find("#project"+tempDish.id).append($("<a>").attr("href","#").attr("id",tempDish.id)
            .append($("<img>").attr("class","img-responsive img-thumbnail").attr("id",tempDish.id).attr("src","images/"+tempDish.image)));

          container.find("#project"+tempDish.id).append($("<p>").attr("id",tempDish.id).html(tempDish.name));
      }
  }

  var removeProject = function(){
    templist=model.getFullList();
    var year = model.getYear();
    for (var j = 0; j < year.length; j++) {
      row = container.find("#"+year[j]);
      row.remove();
    }
    for (var i = 1; i <= templist.length; i++) {
      row = container.find("#project"+i);
      row.remove();
    }
  }

  //inisialization
  showProject();

  this.update = function(obj) {
    switch (obj){
        case "listOfProject":
          removeProject();
          showProject();
          break;
    }
  }
}
