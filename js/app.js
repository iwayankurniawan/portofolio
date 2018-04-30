$(function() {

	var model = new PortofolioModel();
	var generalController = new GeneralController();

	var portofolioView = new PortofolioView($("#portofolioView"),model);
	var portofolioController = new PortofolioController(portofolioView,model,generalController);

	var sideBarView = new SideBarView($("#sideBarView"),model);
	var sideBarController = new SideBarController(sideBarView,model,generalController);

	var showProjectView = new ShowProjectView($("#showProjectView"),model);
	var showProjectController = new ShowProjectController(showProjectView,model,generalController);

	generalController.initiateViews();
	generalController.showActiveView("welcome");
});
