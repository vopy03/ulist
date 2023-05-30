
class Modal {

    static modal = null;

    static init = () => {
        // this.modal.addEventListener('submit', this.submit);

        $('#modal-form').submit(function (e) {
              let formData = {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                status: (e.target.status.checked) ? 1 : 0,
                role: e.target.role.value,
              };
          
              $.ajax({
                type: "POST",
                url: 'actions/user/create',
                data: formData,
              }).done(function (data) {
                List.refresh();
                
              });

            e.preventDefault();

            

            // form reset after submit
            e.target.reset();

            // close modal
            $("#user-form-modal").modal('hide');
            
          });
    }

}

Modal.init();