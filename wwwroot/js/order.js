/*
$(function () {
    getOrders()

    function getOrders() {
        var id = $('#order_rows').data('id');
        var unshipped;
        if ($('#Unshipped').prop('checked')) {
            unshipped = "/unshipped";
        }
        else {
            unshipped = "";
        }
        $.getJSON({
            url: "../../api/order" + id + "/" + unshipped,
            success: function (response, textStatus, jqXhr) {
                //console.log(response);
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) { 
                    var empty, css;
                    if (response[i].shippedDate == null) {
                        empty = "None";
                        css = "class=\"unshipped\""
                    }
                    else {
                        empty = response[i].shippedDate;
                        css = "";
                    }
                    var row = "<tr" + css + " data-id=\"" + response[i].orderId + "\" data-order-date=\"" + response[i].orderDate + "\" data-required-date=\"" + response[i].requiredDate + "\" data-shipped-date=\"" + response[i].shippedDate + "\">"
                        + "<td class=\"text-right\">" + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderDate + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate + "</td>"
                        + "<td class=\"text-right\">" + empty + "</td>"
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

    $('#Unshipped').on('change', function () {
        $('#order_rows').data('id', $(this).val());
        getOrders();
    });
});
*/

$(function () {
    getOrders()

    function getOrders() {
        var id = $('#order_rows').data('id');
        var unshipped = $('#Unshipped').prop('checked') ? "" : "/unshipped";
        $.getJSON({
            url: "../../api/order/" + id + "/" + unshipped,
            success: function (response, textStatus, jqXhr) {
                //console.log(response);
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) {
                    var row = "<tr>"
                        + "<td>" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">$" + response[i].orderDate + "</td>"
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

    $('#Unshipped').on('change', function () {
        getOrders();
    });
});