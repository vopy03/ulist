class User {
  static create(data, callback) {
    const url = "user/create";
    return $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      data = JSON.parse(data);
      console.log();
      callback(data);
      List.refreshList();
    });
  }

  static edit(data, callback) {
    const url = "user/edit";
    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      // console.log(data);
      data = JSON.parse(data);
      callback(data);
      List.updateUser(data.user);
    });
  }

  static delete(data) {
    const url = "user/delete";
    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      // console.log(data);
      data = JSON.parse(data);
      List.deleteUsers(data.ids);
      // List.refreshList();
    });
  }

  static changeStatus(data) {
    const url = "user/status/change";

    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      // console.log(data);
      List.refreshList();
    });
  }

  static get(id, callback) {
    const url = "user/get/" + id;

    $.ajax({
      url,
    }).then((data) => {
      data = JSON.parse(data);
      callback(data);
    });
  }
}
