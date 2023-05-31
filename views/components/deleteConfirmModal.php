<?php 

use App\Services\App;

?>
<div class="modal fade" id="user-delete-modal" data-modalType="delete" tabindex="-1" aria-labelledby="user-delete-modal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="UserModalDeleteLabel">User delete confirmation</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                    <div class="modal-body">
                    
                    <p>You are about to delete <b id="modal-delete-name"></b></p>
                    <p>Are you sure you want to delete this user ?</p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" id="modal-delete-submit" class="btn btn-danger" >Delete</button>
                    </div>
              
          </div>
        </div>
</div>