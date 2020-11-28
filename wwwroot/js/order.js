$(function () {
    getOrders()

    function getOrders() {
        var id = $('#order_rows').data('id');
        $.getJSON({
            url: "../../api/order" + id,
            success: function (response, textStatus, jqXhr) {
                console.log(response);
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) {
                    var row = "<tr>" + " data-id=\"" + response[i].orderId + "\" data-order-date=\"" + response[i].orderDate + "\" data-required-date=\"" + response[i].requiredDate
                        + "<td class=\"text-right\">" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate + "</td>"
                        + "</tr>";
                    $('#order_rows').append(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    }
});