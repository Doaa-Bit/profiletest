
/*const spans =document.queryselectorAll('h1 span')
spans.forEach(span =>span.addEventlistener('mouseeover',function(e){
	span.classlist.add('animated','rubberband')
}))
spans.forEach(span =>span.addEventlistener('mouseeout',function(e){
	span.classlist.remove('animated','rubberband')
}))*/


'use strict'
console.log('Here\'s a hidden message');
let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;