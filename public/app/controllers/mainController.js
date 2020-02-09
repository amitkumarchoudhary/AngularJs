
angular.module('mainController', [])

.controller("MainCtrl",function($scope,mainConSvc){
    var mainCon=this;
    mainCon.dataSize=[];
    console.log('main controller is called....');
    mainCon.hello="amit kumar choudhary";
    mainCon.fruits=['apple','banana','mango','milk','apple1','papaya'];
      
    
    mainCon.deleteUser=function(employee_id){
        //  alert('done worked...deleteUser');
        console.log(employee_id);
    }

    mainCon.selectCheckBoxItem=function(employee_id){
        

        
        mainCon.dataSize.push(employee_id);
        mainCon.deleteUser(mainCon.dataSize);

        // alert('done worked...'+employee_id);
   }
    
    // userApp.filter('myfilter',function(){
    //      return function(input){
    //      return input;
    //      }
    // })

    // mainCon.criteriaMatch = function( criteria ) {
    //     return function( item ) {
    //       return item.name === criteria.name;
    //     };
    //   };
    
      mainCon.fatchAlldata=function(){
        mainConSvc.getAllDetailsService().then(function(response){
            mainCon.dataAll=response.data;
            // console.log("....dataAll......."+dataAll);
         });
     }
     mainCon.fatchAlldata();
});