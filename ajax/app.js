var posts = [];
$(document).ready(function() {
	var url = 'https://jsonplaceholder.typicode.com/posts/';
	getPosts();
	



	function getPosts(){
		
		$.ajax({
			url: url,
			dataType: "json",
			success: bindData
		});



	}

	function bindData(data) {
		var postno;
		$.each(data, function(k)
		{	

			postno = data[k]['id'];
			var cList = $('ul.list-group')


			var li = $('<li/>')
			.addClass('list-group-item')
			.attr('id', data[k]['id'])
			.attr('onclick' , 'postDetails('+postno+');')
			.html('<h1>OK</h1>')
			.text(data[k]['title'])
			.appendTo(cList);

			

			li.prepend('<span class="glyphicon glyphicon-hand-right">&nbsp;</span>');
			


			var span = $('<span/>')
			.text(data[k]['body'].substr(0,50) + ' . . .')
			.addClass('smalltext')
			.appendTo(li);

			
		});

	}	

	


});

function postDetails(postno){
	alert(postno);
}

