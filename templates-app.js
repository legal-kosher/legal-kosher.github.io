angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'settings/settings.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    Here's where I would explain the project...\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "</div>\n" +
    "<div id=\"navcontainer\">\n" +
    "  <ul>\n" +
    "    <li ng-repeat=\"(key, value) in newData\" class=\"dependency\" ng-class=\"value.pass ? 'pass' : 'fail'\" ng-include=\"'tree_item_renderer.html'\"></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div>\n" +
    "<p>sajkghsakghalksg</p>\n" +
    "<div showonhoverparent></div>\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "<script type=\"text/ng-template\"  id=\"tree_item_renderer.html\">\n" +
    "    {{key}}\n" +
    "    <ul>\n" +
    "        <li class=\"dependency\" ng-class=\"value.pass ? 'pass' : 'fail'\" ng-repeat=\"(key, value) in value.dependencies\" ng-include=\"'tree_item_renderer.html'\"></li>\n" +
    "        <div showonhoverparent></div>\n" +
    "    </ul>\n" +
    "</script>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Is your repo legal to keep private?</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    You might be using dependencies that require you to open-source your private projects. Oh no! Check now. Give us money? yes.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <!-- add social things? -->\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Github Repo\n" +
    "    </a>\n" +
    "    <a href=\"\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Button Fun\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("settings/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("settings/settings.tpl.html",
    "<script type=\"text/ng-template\" id=\"field_renderer.html\">\n" +
    "</script>\n" +
    "<h1>Settings</h1>\n" +
    "<h4>Select which licenses are accepted</h4>\n" +
    "\n" +
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row vertical-buffer\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Add a License</button>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"panel panel-success\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">Approved</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\" data-drop=\"true\" ng-model='approved' jqyoui-droppable=\"{multiple:true}\">\n" +
    "                    <div class=\"panel panel-default\"  ng-repeat=\"item in approved\" ng-show=\"item\" data-drag=\"true\" data-jqyoui-options=\"{revert: 'invalid'}\" ng-model=\"approved\" jqyoui-draggable=\"{index: {{$index}},animate:true}\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            {{item}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"panel panel-danger\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">Not Approved</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\" data-drop=\"true\" ng-model='notApproved' jqyoui-droppable=\"{multiple:true}\">\n" +
    "                    <div class=\"panel panel-default\"  ng-repeat=\"item in notApproved\" ng-show=\"item\" data-drag=\"true\" data-jqyoui-options=\"{revert: 'invalid'}\" ng-model=\"notApproved\" jqyoui-draggable=\"{index: {{$index}},animate:true}\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            {{item}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <div class=\"panel panel-warning\">\n" +
    "                <div class=\"panel-heading\">\n" +
    "                    <h3 class=\"panel-title\">Waiting for Approval</h3>\n" +
    "                </div>\n" +
    "                <div class=\"panel-body\" data-drop=\"true\" ng-model='waitingForApproval' jqyoui-droppable=\"{multiple:true}\">\n" +
    "                    <div class=\"panel panel-default\"  ng-repeat=\"item in waitingForApproval\" ng-show=\"item\" data-drag=\"true\" data-jqyoui-options=\"{revert: 'invalid'}\" ng-model=\"waitingForApproval\" jqyoui-draggable=\"{index: {{$index}},animate:true}\">\n" +
    "                        <div class=\"panel-body\">\n" +
    "                            {{item}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "        <h4 class=\"modal-title\">Modal title</h4>\n" +
    "      </div>\n" +
    "      <div class=\"modal-body\">\n" +
    "        <p>One fine body&hellip;</p>\n" +
    "      </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n" +
    "      </div>\n" +
    "    </div><!-- /.modal-content -->\n" +
    "  </div><!-- /.modal-dialog -->\n" +
    "</div><!-- /.modal -->\n" +
    "\n" +
    "");
}]);
