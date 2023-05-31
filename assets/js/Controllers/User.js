
class User {

    static create(data) {

    }

    static edit(data, id) {
      Modal.changeModalType('edit');
      console.log(data);
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

    static get(id) {
        const url = 'actions/user/get/' + id;

        $.ajax({
          type: "GET",
          url,
        }).done(function (data) {
          return JSON.parse(data);
        });
    }

}