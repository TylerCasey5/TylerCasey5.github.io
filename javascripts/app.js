$("#modalOpen").click(function(e)
{
	OpenModal();
});

$("#modalClose").click(function(e)
{
	CloseModal();
});

function OpenModal()
{
	$("#modalOpen").prop("disabled",true);
	$("#modal").fadeIn();
	$("#overlay").fadeIn();
}

function CloseModal()
{
	$("#modalOpen").prop("disabled",false);
	$("#modal").fadeOut();
	$("#overlay").fadeOut();
}

$('form.ajax').on('submit', function(){
	var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};
		
	that.find('[name]').each(function(index, value)
	{
		var that = $(this),
			name = that.attr('name'),
			value = that.val();
			
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response)
		{
			console.log(response);
			alert("Successful");
			CloseModal();
		}
	});
	
//	CloseModal();
	return false;
});

$(document).ready(main);
