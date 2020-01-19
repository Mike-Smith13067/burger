 // Create new burger
 $("#submit").on("click", function (event) {
    event.preventDefault();
    var newBurger = $("#newBurger").val().trim();
    if (newBurger == "") {
        // $("#error").html("Please enter a valid burger");

    } else {
        console.log(newBurger);
        var createdBurger = {
            burger_name: newBurger,
            devoured: false
        }
        $.post("api/burgers", createdBurger, function (data) {
            $("#newBurger").val("");
            location.reload();
        });
    };
});
// devour a burger
$(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devour = $(this).data("newdevour");
    console.log(id, devour);
    if(!devour) {
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then (function () {
            location.reload();
        });
    }else {
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        })
    }
});
