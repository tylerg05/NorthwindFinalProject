$(function () {
    $("#Unshipped").change(() => {
        $('#order_rows').html("");
        if (this.checked) {
            getUnshippedOrders();
        }
        else {
            getOrders();
        }
    });

    function getOrders() {
        var id = $('#order_rows').data('id');
        $.getJSON({
            url: "../../api/order" + id,
            success: function (response, textStatus, jqXhr) {
                console.log(response);
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) { /*
                    var css;
                    if (response[i].shippedDate == null) {
                        css = " class=\"unshipped\"";
                    }
                    else {
                        css = "";
                    }*/
                    var row = "<tr" + " data-id=\"" + response[i].orderId + "\" data-order-date=\"" + response[i].orderDate + "\" data-required-date=\"" + response[i].requiredDate + "\" data-shipped-date=\"" + response[i].shippedDate + "\">"
                        + "<td class=\"text-right\">" + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].shippedDate + "</td>"
                        + "</tr>";
                    $('#order_rows').append(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // log the error to the console
                console.log("The following error occured: " + textStatus, errorThrown);
            }
        });
    };

    function getUnshippedOrders() {
        $.getJSON({
            url: "../../api/order/unshipped",
            success: function (response, textStatus, jqXhr) {
                console.log(response);
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) {
                    var row = "<tr class=\"unshipped\"" + " data-id=\"" + response[i].orderId + "\" data-order-date=\"" + response[i].orderDate + "\" data-required-date=\"" + response[i].requiredDate + "\" data-shipped-date=\"" + response[i].shippedDate + "\">"
                        + "<td class=\"text-right\">" + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate + "</td>"
                        + "<td class=\"text-right\">" + "Unshipped" + "</td>"
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