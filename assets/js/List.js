class List {
  static users = [];
  static roles = [];

  static init() {
    List.updateListeners();

    List.getUsers((data) => {
      this.users = data.users;
      // console.log(this.users);
    });

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
      btn.onclick = (e) => Modal.openDeleteModal( Number(e.target.dataset.id) );
    });

    // fix this. This for submit event. Not for opening the modal
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
    console.log(data);
    data.ids.forEach(id => {
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
      const user = document.querySelector(
        "tr[data-id='" + data.ids + "']"
      );
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
    List.getUserItem(data, (data) => {
      $("tbody").append(data);
      Selection.update();
      List.updateListeners();
    })
  }

  static getUserItem(data, callback) {

    $.ajax({
      type: "POST",
      data,
      url: "list/get/useritem",
    }).done(function (data) {
      callback(data);
      List.updateListeners();
    });
  }

  static getUsers(callback) {
    $.ajax({
      type: "POST",
      url: "list/get/users",
    }).done(function (data) {
      // Selection.update();
      // console.log(data);
      data = JSON.parse(data);
      callback(data);
      // List.init();
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
