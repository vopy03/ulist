class User {
  static create(data) {
    const url = "actions/user/create";
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
    const url = "actions/user/edit";
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
    const url = "actions/user/delete";
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
    /*
     * @action: 'on', 'off'
     *
     */

    const url = "actions/change/status";

    $.ajax({
      type: "POST",
      url,
      data,
    }).done(function (data) {
      console.log(data);
      List.refresh();
    });
  }

  static get(id, func) {
    const url = "actions/user/get/" + id;

    $.ajax({
      url,
    }).then((data) => {
      data = JSON.parse(data);
      func(data);
    });
  }
}
