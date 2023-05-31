
class User {

    static create(data) {

    }

    static edit(id) {
      const url = 'actions/user/edit/' + id;
      $.ajax({
          type: "POST",
          url,
        }).done(function (data) {
          // console.log(data);
          List.refresh();
        });
    }

    static delete(ids) {
      const url = 'actions/user/delete/' + ids;
      $.ajax({
          type: "GET",
          url,
        }).done(function (data) {
          // console.log(data);
          List.refresh();
        });
    }

    static get(id, func) {
      const url = 'actions/user/get/' + id;

      $.ajax({
        url,
      }).then(data => {
        data = JSON.parse(data)
        func(data);
      });
  }
}