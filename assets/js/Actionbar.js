class Actionbar {
  static addBtn = $("#add-user-btn");

  static init() {
    this.addBtn.off("click");
    this.addBtn.click(() => {
      Modal.changeModalType("create");
    });

    $("form").off("submit");

    $("form").submit(function (event) {
      event.preventDefault();
      const choise = event.target[0].value;
      if (Actionbar.isActionSelected(choise) && Selection.isSomeChecked()) {
        let formData = {ids:Selection.getCheckedItemsId()};

        if (choise === "1" || choise === "2") {
          formData.value = choise === "1" ? 1 : 0; // if selected 1: "actions/status/on" value is 1; else 0
          User.changeStatus(formData);
        } else {
          Modal.openDeleteModal(formData);
        }
      } else if (
        Actionbar.isActionSelected(choise) &&
        !Selection.isSomeChecked()
      ) {
        Modal.openWarningModal("Please, select some users");
      } else if (!Actionbar.isActionSelected(choise)) {
        Modal.openWarningModal("Please, select action");
      }
    });
  }

  static isActionSelected(choise) {
    return Number.isInteger(Number(choise));
  }
}
