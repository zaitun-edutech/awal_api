$.getJSON("pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
        console.log(data);
    });
});