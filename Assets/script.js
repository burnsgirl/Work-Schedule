$(document).ready(function () {

    //9am - 5pm    
    //Current Day and Time
    var today = moment();
    $('#currentDay').text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));

    //Save button to store in local storage for that time
    $('.saveBtn').on('click', function () {
        var input = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, input);
    });


    //Changing colors with hrs:
    function hourTracker () {
        

        var currentHour = moment().hours();
       
            $('.time-block').each(function () {
                var hourEl = parseInt($(this).attr('id').split('h')[1]);
            
                console.log(hourEl);

            if (hourEl < currentHour) {
                $(this).addClass('past');
            } else if (hourEl === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('.past');
                $(this).removeClass('.present');
                $(this).addClass('.future');
            }
        });
    };

    hourTracker();

    var timeChecker = setInterval(hourTracker, 1000);

    //Get Info From Local Storage
    $('#h9 .description').val(localStorage.getItem('h9'));
    $('#h10 .description').val(localStorage.getItem('h10'));
    $('#11 .description').val(localStorage.getItem('h11'));
    $('#h12 .description').val(localStorage.getItem('h12'));
    $('#h1 .description').val(localStorage.getItem('h1'));
    $('#h2 .description').val(localStorage.getItem('h2'));
    $('#h3 .description').val(localStorage.getItem('h3'));
    $('#h4 .description').val(localStorage.getItem('h4'));
    $('#h5 .description').val(localStorage.getItem('h5'));

});

