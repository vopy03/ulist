class User {
  static create(data) {
    const url = "user/create";
    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      // console.log(data)
      List.refresh();
    });
  }

  static edit(data) {
    const url = "user/edit";
    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      // console.log(data);
      List.refresh();
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
      List.refresh();
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
      List.refresh();
    });
  }

  static get(id, func) {
    const url = "user/get/" + id;

    $.ajax({
      url,
    }).then((data) => {
      data = JSON.parse(data);
      func(data);
    });
  }
}
