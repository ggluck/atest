'use strict';

angular.module('ggluck.test.red',[])
.directive('red',function(){
	return {
		restrict:'A',
		link:function(scope,element,attr){
			element.css('background-color','red');
		}
	};
});