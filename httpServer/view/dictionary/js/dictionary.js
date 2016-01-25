$(document).ready(function () {

    // Get JSON data then call printTerms to handle terms.
    $.getJSON('/dictionary-api', printTerms);

    // Register submit handler.
    $('form').submit(function (e) {

        // Prevent default actions to process.
        e.preventDefault();

        // url, data, function to call after execution.
        $.post('/dictionary-api', { term: $('#term').val(), defined: $('#defined').val() }, printTerms);

        // set html items to initial default value.
        this.reset();
    });

});

function printTerms(terms) {
    $('body>dl').empty();

    $.each(terms, function () {
        $('<dt>').text(this.term).appendTo('body>dl');
        $('<dd>').text(this.defined).appendTo('body>dl');
    });

    // off : remove original event handler.
    $('dt').off('dblclick').dblclick(function() {
        $.ajax({
            url: '/dictionary-api/' + $(this).text(),
            type: 'DELETE',
            success: printTerms
        });
    });
}
