$(document).ready(function(){
	var reMove = '<button class="delete">Remove</button>';
	var doneMark = '<button class="strike">Done</button>';

//When the user press enters
	$('#tip-off').keyup(function(enter){
		if(enter.keyCode == 13){
			enter.preventDefault();
			postList();
		}
	});

//When the user clicks on the button
	$('#add').click(function(){
			postList();
		
	});

		

	function postList(){
		var grocery_list = $('#add-items').val();
		var list = $('<p class="length">' + reMove + grocery_list + doneMark + '</p>');

		if(grocery_list == '' || grocery_list == null){
			alert('Please fill in an item');
		}else{
			$('#list-area').prepend(list);
			$('#add-items').val('');

		}
	}
	
		$(document).on('click', '.delete', function(){
			$(this).closest('p').fadeOut('slow');
		})

		$(document).on('click', '.strike', function(){
			$(this).closest('p').toggleClass('strike-through');
			$(this).closest('p').fadeOut('slow');
		})

});


