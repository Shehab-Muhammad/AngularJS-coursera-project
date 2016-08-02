
angular.module('confusionApp')
    .controller('MenuController', ['$scope','menuFactory', function($scope,menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.dishes = menuFactory.getDishes();
                        
            $scope.selectTab = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope,$stateParams,menuFactory) {

            var dish = menuFactory.getDish(parseInt($stateParams.id,10));
            
            $scope.dish = dish;
            $scope.sortText = '';
            $scope.changeOrder = function(text){
              $scope.sortText = text;
              console.log(text);
            };
            
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.dishFeedback = {name:"", rating:'5', comment:""};

            
            $scope.submitComment = function () {
                
                var submitTime = new Date().toISOString();
                
                var commentObj = {rating:$scope.dishFeedback.rating, 
                                  comment:$scope.dishFeedback.comment, 
                                  author:$scope.dishFeedback.name,
                                  date:submitTime
                                };
                
                $scope.dish.comments.push(commentObj);
                console.log(commentObj);
                
                $scope.commentForm.$setPristine();
                
                $scope.dishFeedback = {name:"", rating:'5', comment:""};
            }
        }])

;
