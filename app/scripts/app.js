'use strict';

angular.module('confusionApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('app',{
		url:'/',
		views: {
			'header':{
				tamplateUrl : 'views/header.html'
			},
			'content':{
				tamplate : '<h1>To be Completed</h1>'
			},
			'footer':{
				tamplateUrl : 'views/footer.html'
			}
		}
	})
	.state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        template: '<h1>To be Completed</h1>'
                   }
                }
     })
	.state('app.contactus',{
		url:'aboutus',
		views: {
			'content@':{
				tamplateUrl : 'views/contactus.html',
				controller : 'ContactController'
			}
		}
	})
	.state('app.menu',{
		url:'menu',
		views: {
			'content@':{
				tamplateUrl : 'views/menu.html',
				controller : 'MenuController'
			}
		}
	})
	.state('app.dishdetails',{
		url:'menu/:id',
		views: {
			'content@':{
				tamplateUrl : 'views/dishdetail.html',
				controller : 'DishDetailController'
			}
		}
	});
	$urlRouterProvider.otherwise('/');
});
