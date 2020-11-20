$(function () {
    getProducts()

    function getProducts() {
        var id = $('#order_rows').data('id');
        $.getJSON({
            url: "../../api/order" + id,
            success: function (response, textStatus, jqXhr) {
                console.log(response);
                $('#order_row').html("");
                for (var i = 0; i < response.length; i++) {
                    var row = "<tr" + css + " data-id=\"" + response[i].orderId + "\" data-order-date=\"" + response[i].orderDate + "\" data-required-date=\"" + response[i].requiredDate +"\" data-order-date=\"" + response[i].shippedDate + "\">"
                        + "<td>" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">$" + response[i].orderDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].shippedDate + "</td>"
                        + "</tr>";
                    $('#order_row').append(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    }
});