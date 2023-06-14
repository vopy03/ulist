class Actionbar {
  static addBtn = document.querySelectorAll(".add-user-btn");

  static init() {

    this.addBtn.forEach((btn) => {
      btn.onclick = (e) => Modal.openAddModal();
    });

    $("form").off("submit");

    $("form").submit(function (event) {
      event.preventDefault();
      const choise = event.target[0].value;
      if (Actionbar.isActionSelected(choise) && Selection.isSomeChecked()) {
        let formData = Selection.getCheckedItemsId();

        if (choise === "1" || choise === "2") {
          // if selected 1: "actions/status/on" value is 1; else 0
          User.changeStatus({ids:formData, value: choise === "1" ? 1 : 0});
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
