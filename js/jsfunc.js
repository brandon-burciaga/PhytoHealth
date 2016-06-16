
/*
AJAX POST request connecting to GetRecipeURL.do Java servlet which handles request
and queries PostgreSQL database before writing results to a table and appending to DOM
*/
function getURL() {
    var $urlString = $('.txtUrl').val();
    var params = {url: $urlString};
    var jsonDataString = JSON.stringify(params);
    var $jumboContainer = $('.jumboContainer');
    $.ajax({
        type: "POST",
        url: "GetRecipeURL.do",
        contentType: "application/json",
        dataType: "text",
        data: jsonDataString,
        success: function(data) {
            $jumboContainer.empty();
            $jumboContainer.append(data);
            $jumboContainer.css("font-size", "18");
        },
        error: function(data) {
            $jumboContainer.clear();
            $jumboContainer.append("Could not load the data!")
        }
    });
    return false;
}