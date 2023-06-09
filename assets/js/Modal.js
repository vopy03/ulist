class Modal {
  static modal = $("#user-form-modal");
  static modalForm = $("#modal-form");
  static modalSubmitBtn = $("#modal-form-submit");
  static modalErrorMessage = $("#modal-error-message");

  static deleteModal = $("#user-delete-modal");
  static deleteModalSubmitBtn = $("#modal-delete-submit");

  static warningModal = $("#warning-modal");
  static warningModalMessage = $("#warning-modal-message");

  static init = () => {
    // this.modal.addEventListener('submit', this.submit);
  };

  static setData = (data) => {
    const inputs = $("#modal-form [name]");
    $.each(inputs, function (i, input) {
      var split = $(input).attr("name");
      if ($(input).is(":checkbox")) {
        if (Number(data[split])) {
          $(input).prop("checked", true);
        } else {
          $(input).prop("checked", false);
        }
      } else {
        $(input).val(data[split]);
      }
    });
  };

  static prepareUserToEdit = (id) => {
    User.get(id, (data) => {
      if(data.status) {
        Modal.setData(data.user);
        Modal.openEditModal()
      } else {
        Modal.openWarningModal(data.error.message)
      }
      
    });
  };

  static openEditModal = () => {
    if(this.modalForm.find("#id").val() != "0") {
      Modal.modal.modal("show");
    } else {
      Modal.modal.modal("hide");
    }
    Modal.changeModalType("edit");
    Modal.assignSubmitAction("edit");
  };

  static openWarningModal = (message) => {
    this.warningModal.modal("show");
    this.warningModalMessage.html(message);
  };

  static openDeleteModal = (data) => {
    const deleteMessage = $("#modal-delete-message");
    // console.log(Array.isArray(data))
      if (Array.isArray(data) && data.length == 1) {
        User.get(data[0], (data) => {
          Modal.deleteModal.modal("show");
          const user = data.user;
          deleteMessage.html(user.first_name + " " + user.last_name);
        });
      } else if (!Array.isArray(data)) {
        // console.log(data)
        User.get(data, (data) => {
          Modal.deleteModal.modal("show");
          const user = data.user;
          deleteMessage.html(user.first_name + " " + user.last_name);
        });
      } else {
        Modal.deleteModal.modal("show");
        deleteMessage.html(data.length + " users");
      }

    this.deleteModalSubmitBtn.off("click");
    this.deleteModalSubmitBtn.on("click", (e) => {
      // console.log(data)
      User.delete({ids:data});
      Modal.deleteModal.modal("hide");
    });
  };

  static assignSubmitAction = (action) => {
    /*
     * @action: 'create', 'edit'
     *
     */

    // remove possible event listeners before assign new one
    this.modalForm.off("submit");

    // hide possible error message
    Modal.modalErrorMessage.hide();

    this.modalForm.submit(function (e) {
      e.preventDefault();

      const formData = {
        id: action == "edit" ? e.target.id.value : null,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        status: e.target.status.checked ? 1 : 0,
        role_id: e.target.role_id.value,
      };

      const callbackActions = (data) => {
        // console.log(data)
        if (data.status === true) {
          // form reset after submit
          e.target.reset();

          // clear error message
          Modal.modalErrorMessage.hide();

          // close modal
          Modal.modal.modal("hide");
          
        } else {
          Modal.modalErrorMessage.show();
          Modal.modalErrorMessage.html("Помилка:<br>" + data.error.message);
        }
      };

      if (action == "create") {
        User.create(formData, callbackActions);
      } else {
        User.edit(formData, callbackActions);
      }
    });
  };

  static changeModalType = (type) => {
    const modatTitle = $("#UserModalLabel");

    if (type == "create") {
      this.modal.data("modalType", "create");
      this.modalForm.trigger("reset");
      modatTitle.html("Add user");
      this.modalSubmitBtn.html("Add");

      Modal.assignSubmitAction("create");
    } else if (type == "edit") {
      this.modal.data("modalType", "edit");
      modatTitle.html("Edit user");
      this.modalSubmitBtn.html("Edit");

      Modal.assignSubmitAction("edit");
    }
  };
}
