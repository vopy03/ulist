
class User {

    static create(data) {

    }

    static edit(data, id) {

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

}