$(function () {
    getOrders()

    function getOrders() {
        var id = $('#order_rows').data('id');
        var unshipped = $('#Unshipped').prop('checked') ? "/unshipped" : "";
        $.getJSON({
            url: "../../api/order/" + id + unshipped,
            success: function (response, textStatus, jqXhr) {
                //console.log(response);
                var empty, css;
                $('#order_rows').html("");
                for (var i = 0; i < response.length; i++) {
                    if (response[i].shippedDate == null) {
                        empty = "Not shipped";
                        var time = new Date();
                        console.log(time);
                        if (time > Date.parse(response[i].requiredDate.toString().substring(0, 10))) {
                            css = "class=\"unshipped\"";
                        }
                        else {
                            css = "class=\"overdue\"";
                        }
                    }
                    else {
                        empty = response[i].shippedDate.toString().substring(0, 10);
                        css = "";
                    }
                    var row = "<tr " + css + ">"
                        + "<td></td>"
                        + "<td class=\"text-left\">" + response[i].orderId + "</td>"
                        + "<td class=\"text-right\">" + response[i].orderDate.toString().substring(0, 10) + "</td>"
                        + "<td class=\"text-right\">" + response[i].requiredDate.toString().substring(0, 10) + "</td>"
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
        getOrders();
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});