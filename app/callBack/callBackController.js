bookmyshowApp.controller('callBackController',
    function callBackController($scope, $q, $timeout) {
    
   function async1(){
     var deferred = $q.defer();
     $timeout(function(){ 
         deferred.resolve("First done");
        }, Math.random()*1000);
     return deferred.promise;
   };
    
    function async2(){
     var deferred = $q.defer();
     $timeout(function(){ 
         deferred.resolve("Second done");
        }, Math.random()*1000);
     return deferred.promise;
   };
    
    function async3(){
     var deferred = $q.defer();
     $timeout(function(){ 
         deferred.resolve("Third done");
        }, Math.random()*1000);
     return deferred.promise;
   };
    
    var promise1 = async1().then(function(data) {
        console.log('Success!', data);
    }, function(error) {
        console.log('Failure...', error);
    });
    
    var promise2 = async2().then(function(data) {
        console.log('Success!', data);
    }, function(error) {
        console.log('Failure...', error);
    });
    
    var promise3 = async3().then(function(data) {
        console.log('Success!', data);
    }, function(error) {
        console.log('Failure...', error);
    });
     
    var allPromise = $q.all([  
    promise1,
    promise2,
    promise3
  ]);

allPromise.then(function(values) {  
    console.log(values.length, 'all done');
});
});