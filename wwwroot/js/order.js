$(function () {
    getProducts()

    function getProducts() {
        var id = $('#order_rows').data('id');
        $.getJSON({
            url: "../../api/order" + id,
            success: function (response, textStatus, jqXhr) {
                console.log(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    }
});