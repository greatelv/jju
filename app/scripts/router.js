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
    var route = window.location.hash.slice(2).split('/')[0];
    var sections = $('section');
    var section;

    section = sections.filter('#'+route);

    if (section.length) {
      sections.hide();
      section.show();
    }
  };

  var router = Router({
    '/projects': projects,
    '/project/:id': project,
    '/about': about,
    '/contact': contact,
  });

  router.configure({
    on: changeScene
  });

  router.init();
});
