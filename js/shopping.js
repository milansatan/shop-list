$(document).ready(function(){
	var xMark = '<button class="delete">Remove</button>';

	$('#add').click(function(){
			postList();
		
	});

	function postList(){
		var sum = 0;
		var grocery_list = $('#add-items').val();
		var grocery_qty = +$('#qty').val();
		var grocery_price = +$('#price').val();
		var amount = grocery_price.toFixed(2);
		var total = (grocery_qty * amount)

		$('#shopping-item').append('<p>' + xMark + grocery_list + '</p>');
		$('#shopping-qty').append('<p>' + grocery_qty + '</p>');
		$('#shopping-price').append('<p>$' + amount + '</p>');
		$('#first_total').append('<p>$' + total + '</p>');
		$('#add-items').val('');
		$('#qty').val('');
		$('#price').val('');

		this.each(function(){
					sum += parseFloat(this.value);
				});
			$('#zen-total').html(sum.toFixed(2));
		})
		
	}


});

