angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

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
