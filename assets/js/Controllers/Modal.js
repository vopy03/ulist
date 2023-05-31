
class Modal {

  static modal = $('#user-form-modal');
  static modalForm = $('#modal-form');
  static modalSubmitBtn = $('#modal-form-submit');

  static deleteModal = $('#user-delete-modal');
  static deleteModalSubmitBtn = $('#modal-delete-submit');

  static init = () => {
      // this.modal.addEventListener('submit', this.submit);
      
  }

  static setData = (data) => {

    const inputs = $('#modal-form [name]')
    $.each(inputs, function(i, input){
      var split = $(input).attr('name');
      if( $(input).is(':checkbox') ) {

        if(Number(data[split]) ) {
          $(input).prop( "checked", true );
        } else {
          $(input).prop( "checked", false );
        }
        
      } else {
        $(input).val(data[split]);
      }
  })
  }

  static setUserData = (id) => {
    const url = 'actions/user/get/' + id;

    $.ajax({
      url,
    }).then(data => {
      data = JSON.parse(data)
      Modal.setData(data);
    });
  }

  static openEditModal = (id) => {
    Modal.changeModalType('edit');
    Modal.assignSubmitAction('edit');
    Modal.setUserData(id);
  }

  static openDeleteModal = (id) => {
    User.get(id, (data) => {
      $('#modal-delete-name').html(data.first_name + ' ' + data.last_name);
    })
    this.deleteModalSubmitBtn.on('click', (e) => {
      User.delete(id);
      Modal.deleteModal.modal('hide');
    });

  }

  static assignSubmitAction = (action) => {
    /*
     * @action: 'create', 'edit'
     *
     */

    // remove possible event listeners before assign new one
    this.modalForm.off('submit');

    this.modalForm.submit(function (e) {
      let formData = {
        id: (action == 'edit') ? e.target.id.value : null,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        status: (e.target.status.checked) ? 1 : 0,
        role_id: e.target.role_id.value,
      };
  
      $.ajax({
        type: "POST",
        url: 'actions/user/' + action,
        data: formData,
      }).done(function (data) {
        // console.log(data)
        List.refresh();
      });

    e.preventDefault();

    // form reset after submit
    e.target.reset();

    // close modal
    Modal.modal.modal('hide');
    
  });
    
  }

  static changeModalType = (type) => {

    const modatTitle = $('#UserModalLabel');

    if (type == 'create') {
        this.modal.data('modalType', 'create');
        this.modalForm.trigger("reset");
        modatTitle.html('Add user');
        this.modalSubmitBtn.html('Add');

        Modal.assignSubmitAction('create')
    } else if (type == 'edit') {
        this.modal.data('modalType', 'edit');
        modatTitle.html('Edit user');
        this.modalSubmitBtn.html('Edit');

        Modal.assignSubmitAction('edit')
    }
  }
}