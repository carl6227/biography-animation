$(document).ready(function() {

    $(window).on('load', function() {
        $(".loader").fadeOut(2000);
        $("#content").fadeIn(2000);
    });
    setInterval(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/comments",
            dataType: "json",
            success: function(data) {
                var index = Math.floor(Math.random() * data.length);
                $("#commentHolder").text(data[index].body);
                $("#nameHolder").text("From: " + data[index].name);
            },
        });
    }, 3000);
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
        $.each(data, function(index) {
            $("#myTable").append('<tr id="myTableBody"> <td>' + data[index].name + '</td><td>' + data[index].email + '</td></tr>')
            $("#myInput").on("keyup", function() {
                var value = $(this).val().toLowerCase();
                $("#myTable #myTableBody").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });

        });
    });
    $("#introBtn").click(function() {
        $("#alert").toggle();
    });
    count = 0
    $(".movie").click(function() {
        if (count % 2 == 0) {
            $(this).animate({
                width: "70%",
            });
            count++;
        } else {
            $(this).animate({
                width: "80%",


            });
            count++;
        }


    })
    $(".movie").mouseover(function() {
        if (count % 2 == 0) {
            $(this).animate({
                opacity: "0.5"
            });
            count++;
        } else {
            $(this).animate({
                opacity: "1"
            });
            count++;
        }


    })
});