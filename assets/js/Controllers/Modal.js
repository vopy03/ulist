
class Modal {

  static modal = null;

  static init = () => {
      // this.modal.addEventListener('submit', this.submit);
      this.modal = $('#user-form-modal');

      
  }

  static assignSubmitAction = (action) => {
    /*
     * @action: 'create', 'edit'
     *
     */

    $('#modal-form').submit(function (e) {
      let formData = {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        status: (e.target.status.checked) ? 1 : 0,
        role: e.target.role.value,
      };
  
      $.ajax({
        type: "POST",
        url: 'actions/user/' + action,
        data: formData,
      }).done(function (data) {
        List.refresh();
      });

    e.preventDefault();

    // form reset after submit
    e.target.reset();

    // close modal
    this.modal.modal('hide');
    
  });
    
  }

  static changeModalType = (type) => {

    const modatTitle = $('#UserModalLabel');
    const modalSubmit = $('#modal-form-submit');

    if (type == 'create') {
        this.modal.data('modalType', 'create');
        modatTitle.html('Add user');
        modalSubmit.html('Add');
    } else if (type == 'edit') {
        this.modal.data('modalType', 'edit');
        modatTitle.html('Edit user');
        modalSubmit.html('Edit');
    }
  }
}