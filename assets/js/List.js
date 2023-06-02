class List {
  static init() {
    const deleteBtns = document.querySelectorAll(".delete-user-btn");
    const editBtns = document.querySelectorAll(".edit-user-btn");
    // console.log(btns);
    deleteBtns.forEach((btn) => {
      btn.onclick = (e) => Modal.openDeleteModal(e.target.dataset.id);
    });

    // fix this. This for submit event. Not for opening the modal
    editBtns.forEach((btn) => {
      btn.onclick = (e) => Modal.openEditModal(e.target.dataset.id);
    });
  }

  static refresh() {
    $.ajax({
      type: "POST",
      url: "actions/list/refresh",
    }).done(function (data) {
      $("table tbody").html(data);
      Selection.update();
      List.init();
    });
  }
}
