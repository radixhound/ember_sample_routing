$(function(){
  
  App = Em.Application.create();

  // Instantiated and wired up for you in App.initialize()
  App.ApplicationController = Em.Controller.extend();
  App.ApplicationView       = Em.View.extend({ templateName: 'application' });

  App.NavbarController  = Em.Controller.extend();
  App.NavbarView        = Em.View.extend({ templateName: 'navbar' });
  // Your stuff
  App.HomeController    = Em.Controller.extend({});
  App.HomeView          = Em.View.extend({ templateName: 'home' });

  App.AboutController = Em.Controller.extend({});
  App.AboutView       = Em.View.extend({ 
      templateName: 'about',
      doTwo: function() {
          alert("two");        
      }
  });

  App.Router =  Em.Router.extend({
    enableLogging: true,
    location: 'hash',
    root: Em.Route.extend({
      // EVENTS
      goHome: function(router){router.transitionTo('home')},
      viewAbout: function(router){router.transitionTo('about')},
      
      // STATES
      index: Em.Route.extend({
          route: "/",
          redirectsTo: 'home'
      }),

      home: Em.Route.extend({
          route: '/home',
          connectOutlets: function(router, context) {
              var appController = router.get('applicationController');
              appController.connectOutlet({name: 'home'});
          }
      }),
        
      about: Em.Route.extend({
          route: '/about',
              connectOutlets: function(router, context) {
                var appController = router.get('applicationController');
                appController.connectOutlet('about');
              }
          }),

      doOne: function() {
          alert("ONE");
      },
    }) 
  });

  App.initialize();
});
