var SideBarController = function(view,model,gc){

 view.allButton.click(function(){
   model.setProjectType(view.allButton.val());
   gc.showActiveView("welcome");
 });

 view.itButton.click(function(){
    model.setProjectType(view.itButton.val());
    gc.showActiveView("welcome");
 });

 view.electricalButton.click(function(){
    model.setProjectType(view.electricalButton.val());
    gc.showActiveView("welcome");
 });
}
