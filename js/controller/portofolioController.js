var PortofolioController = function(view,model,gc){
    view.containerProject.click(function(event){
      templist=model.getFullList();
      var chosenIdFromController;
      for (var i = 1; i <= templist.length; i++){
        if(event.target.id == "project"+i){
          chosenIdFromController=i;
          break;
        }else{
          chosenIdFromController=event.target.id;
        }
      }
      model.setChosenId(chosenIdFromController);
      gc.showActiveView("overview");
  });
}
