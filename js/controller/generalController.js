var GeneralController = function() {
  var arrViews = new Array();
  var sbView = $("#portofolioView");
  var seaView = $("#sideBarView");
  var diView = $("#showProjectView");

  this.initiateViews = function(arr) {
    arrViews.push(sbView);
    arrViews.push(seaView);
    arrViews.push(diView);
  }

  this.showActiveView = function(name) {

    //hide all views
    for (i in arrViews){
      arrViews[i].hide();
    }

    //show only the selected
    switch (name) {
      case "welcome":
        seaView.show();
        sbView.show();
        break;
      case "overview":
        seaView.show();
        diView.show();
        break;
      default:
    }
  }
}
