class List {

    static init() {
      const btns = document.querySelectorAll('.delete-user-btn');
      // console.log(btns);
      btns.forEach(btn => {
        btn.onclick = (e) => User.delete(e.target.dataset.id);
      });
    }

    static refresh() {
        $.ajax({
            type: "POST",
            url: 'actions/list/refresh',
          }).done(function (data) {

            $("table tbody").html(data);
            Selection.update();
            List.init();

          });
    }
}

List.init();