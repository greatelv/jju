$(function() {

  //on paging
  var projects = function(){};
  var project = function(id){
    console.log(id);
  };
  var about = function(){};
  var contact = function(){};

  //div scene change handler
  var changeScene = function() {
    var route = window.location.hash.slice(2);
    var sections = $('section');
    var section;

    section = sections.filter('#'+route);

    if (section.length) {
      sections.hide(250);
      section.show(250);
    }
  };

  var router = Router({
    '/projects': projects,
    '/project/:id': project,
    '/about': about,
    '/contact': contact
  });

  router.configure({
    on: changeScene
  });

  router.init();


});
