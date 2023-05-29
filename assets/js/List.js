class List {

    static refresh() {
        $.ajax({
            type: "POST",
            url: 'actions/list/refresh',
          }).done(function (data) {

            $("table tbody").html(data);
            Selection.update();
            
          });
    }
}