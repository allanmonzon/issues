
function renderTemplate(templateId, location, model) {
    var templateString = $(templateId).text();
    var templateFunction = _.template(templateString);
    var renderedTemplate = templateFunction(model);
    $(location).append(renderedTemplate);
}

$.ajax({
	type: 'GET',
	dataType: 'json',
	url: "https://api.github.com/issues",
	success: function(issue){
		_.each(issue, function(issues){
		renderTemplate('#issues-template', '.hero-unit', issues);
	 	})
	},
});


$(document).on('click', '.issues', function() {
    $.ajax({
        type: 'GET',
         url: $(this).attr('data-id')
    }).done(function(comment) {
        _.each(comment, function(comments){
        renderTemplate('#comments-template', '.hero-unit', comments);
      	})
    });
});



