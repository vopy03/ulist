class List {
  static roles = [];

  static init() {
    List.updateListeners();

    // List.getUsers((data) => {
    //   this.users = data.users;
    //   // console.log(this.users);
    // });

    List.getRoles((data) => {
      this.roles = data.roles;
      // console.log(this.roles);
    });
  }

  static updateListeners() {
    const deleteBtns = document.querySelectorAll(".delete-user-btn");
    const editBtns = document.querySelectorAll(".edit-user-btn");
    // console.log(btns);
    deleteBtns.forEach((btn) => {
      btn.onclick = (e) => Modal.openDeleteModal(Number(e.target.dataset.id));
    });

    editBtns.forEach((btn) => {
      btn.onclick = (e) => Modal.prepareUserToEdit(Number(e.target.dataset.id));
    });
  }

  static refreshList() {
    $.ajax({
      type: "POST",
      url: "list/refresh",
    }).done(function (data) {
      $("table tbody").html(data);
      Selection.update();
      List.updateListeners();
    });
  }

  static updateUser(data) {
    const userFullname = $("tr[data-id=" + data.id + "] .user-fullname");
    const userRole = $("tr[data-id=" + data.id + "] .user-role");
    const userStatus = $("tr[data-id=" + data.id + "] i.fa-circle");
    userFullname.html(data.first_name + " " + data.last_name);
    userRole.html(List.roles[data.role_id]);

    if (data.status === "1") {
      userStatus.removeClass("not-active-circle");
      userStatus.removeClass("active-circle");

      userStatus.addClass("active-circle");
    } else {
      userStatus.removeClass("not-active-circle");

      userStatus.addClass("not-active-circle");
      userStatus.removeClass("active-circle");
    }
  }

  static updateUserStatuses(data) {
    // console.log(data);
    data.ids.forEach((id) => {
      const userStatus = $("tr[data-id=" + id + "] i.fa-circle");
      if (data.userStatus == 1) {
        userStatus.removeClass("not-active-circle");
        userStatus.removeClass("active-circle");

        userStatus.addClass("active-circle");
      } else {
        userStatus.removeClass("not-active-circle");

        userStatus.addClass("not-active-circle");
        userStatus.removeClass("active-circle");
      }
    });
  }

  static deleteUsers(data) {
    // console.log(data.ids);
    if (Number.isInteger(Number(data.ids))) {
      const user = document.querySelector("tr[data-id='" + data.ids + "']");
      user.remove();
    } else {
      data.ids.forEach((id) => {
        const user = document.querySelector("tr[data-id='" + id + "']");
        user.remove();
      });
    }
    Selection.update();
  }

  static createUser(data) {
    const user = data.user;
    const user_status =
      user.status == "1" ? "active-circle" : "not-active-circle";
    let tr =
      '<tr data-id="' +
      user.id +
      '">' +
      '<td class="align-middle">' +
      '<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">' +
      '<input type="checkbox" class="custom-control-input" data-id="' +
      user.id +
      '" id="item-' +
      user.id +
      '">' +
      '<label class="custom-control-label" for="item-' +
      user.id +
      '"></label>' +
      "</div>" +
      "</td>" +
      '<td class="text-nowrap align-middle">' +
      '<span class="user-fullname">' +
      user.first_name +
      " " +
      user.last_name +
      "</span>" +
      "</td>" +
      '<td class="text-nowrap align-middle">' +
      '<span class="user-role">' +
      List.roles[user.role_id] +
      "</span>" +
      "</td>" +
      '<td class="text-center align-middle">' +
      '<span class="user-status"><i class="fa fa-circle ' +
      user_status +
      '"></i>' +
      "</td>" +
      '<td class="text-center align-middle">' +
      '<div class="btn-group align-top">' +
      '<button class="btn btn-sm btn-outline-secondary badge edit-user-btn" type="button" data-id="' +
      user.id +
      '" >' +
      '<i class="fa fa-pencil" data-id="' +
      user.id +
      '"></i>' +
      "</button>" +
      '<button class="btn btn-sm btn-outline-secondary badge delete-user-btn" data-id="' +
      user.id +
      '" type="button">' +
      '<i class="fa fa-trash" data-id="' +
      user.id +
      '"></i>' +
      "</button>" +
      "</div>" +
      "</td>" +
      "</tr>";

    $("tbody").append(tr);
    Selection.update();
    List.updateListeners();
  }

  static getUsers(callback) {
    $.ajax({
      type: "POST",
      url: "list/get/users",
    }).done(function (data) {
      data = JSON.parse(data);
      callback(data);
    });
  }
  static getRoles(callback) {
    $.ajax({
      type: "POST",
      url: "list/get/roles",
    }).done(function (data) {
      // Selection.update();
      // console.log(data);
      data = JSON.parse(data);
      callback(data);
      // List.init();
    });
  }
}
