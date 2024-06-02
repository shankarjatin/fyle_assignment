$(document).ready(function () {
    var cardWidth = $('.service-card').outerWidth(true);
    var numCards = $('.service-card').length;
    var numVisibleCards = 3;
    var totalCardSets = Math.ceil(numCards / numVisibleCards);
    var currentCardSet = 0;

    // Initially hide all cards except the first set
    $('.service-card').slice(numVisibleCards).addClass('hide-card');

    // Create dots for navigation
    for (var i = 0; i < totalCardSets; i++) {
        $('.carousel-dots').append('<span class="dot"></span>');
    }
    $('.dot').eq(0).addClass('active');

    // Function to navigate to the specified card set
    function navigateToCardSet(cardSet) {
        var translateX = -cardWidth * numVisibleCards * cardSet;
        $('.card-group').css('transform', 'translateX(' + translateX + 'px)');
    }

    // Event listener for dot navigation
    $('.dot').on('click', function () {
        var dotIndex = $(this).index();
        currentCardSet = dotIndex;
        navigateToCardSet(currentCardSet);
        $('.dot').removeClass('active').eq(dotIndex).addClass('active');
    });
});
