class User {
  static create(data, callback) {
    const url = "user/create";
    return $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      data = JSON.parse(data);
      
      callback(data);
      if (data.status === true) {
        List.createUser(data);
      }
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
      if (data.status === true) {
        List.updateUser(data.user);
      }
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
      if (data.status === true) {
        List.deleteUsers(data);
      }
      else {
        Modal.openWarningModal(data.error.message)
      }
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
      data = JSON.parse(data)
      List.updateUserStatuses(data);
    });
  }

  static get(id, callback) {
    const url = "user/get/" + id;

    $.ajax({
      url,
    }).then((data) => {
      data = JSON.parse(data);
      if(data.status) {
        callback(data);
      } else {
        Modal.openWarningModal(data.error.message)
      }
      
    });
  }
}
