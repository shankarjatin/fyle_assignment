$(document).ready(function() {
    $('#contactButton').on('click', function() {
        $('#contactModal').modal('show');
    });

    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        const formData = {
            work_email: $('#workEmail').val(),
            first_name: $('#firstName').val(),
            last_name: $('#lastName').val(),
            terms: $('#terms').is(':checked'),
        };

        $.ajax({
            url: 'https://getform.io/f/zazkjyxb',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submitted successfully');
                $('#contactModal').modal('hide');
            },
            error: function(error) {
                alert('There was an error submitting the form');
            }
        });
    });
});
