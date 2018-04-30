var ShowProjectView = function (container, model,gc){

  model.addObserver(this);

  var writeProject = function (){
    container.append($("<div>").attr("id","showProject"));
    project = container.find("#showProject")

    projectList=model.getDish(model.getChosenId());

    project.append($("<h1>").attr("id","projectName").html(projectList.name));
    project.append($("<img>").attr("class","img-responsive img-thumbnail").attr("id","primaryImage").attr("src","images/"+projectList.image));
    project.append($("<p>").attr("id","projectData").html("<br>"+"Course: "+projectList.course + "<br>" + "Tools: " +projectList.tools+"<br>" +"Role: "+ projectList.role+"<br>" +"Team: "+projectList.team));
    project.append($("<h4>").attr("id","projectTitle").html("<br>"+"Description"));
    project.append($("<p>").attr("id","projectDescription").html(projectList.description));

    if(projectList.video.length!=0){
      for (var i = 0; i < projectList.video.length; i++) {
        project.append($("<iframe>").attr("class","projectVideo").attr("src",projectList.video[i].link));
      }
    }

    if(projectList.imageList.length!=0){
      for (var i = 0; i < projectList.imageList.length; i++) {
        project.append($("<img>").attr("class","img-responsive img-thumbnail").attr("id","primaryImage").attr("src","images/"+projectList.imageList[i].image));
      }
    }

    if(projectList.links.length!=0){
      for (var i = 0; i < projectList.links.length; i++) {
        var str = projectList.links[i].site;
        var result =str.link(projectList.links[i].site);
        project.append($("<p>").attr("id","projectData").html(result + " ("+projectList.links[i].explain+")"));
      }
    };
  }


  this.update = function(obj) {
    switch (obj){
        case "listOfProject":
          container.find("#showProject").remove();
          writeProject();
          break;
    }
  }

}
