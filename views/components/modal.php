<?php

use App\Services\App;

$roles = App::loadTable('roles');

?>
<div class="modal fade" id="user-form-modal" data-modalType="create" tabindex="-1" aria-labelledby="user-form-modal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="UserModalLabel">Add user</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" action="#" id='modal-form'>
                <p id="modal-error-message"></p>
                <input type="number" class="form-control" name="id" value="0" id="id" hidden>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="first-name" class="col-form-label">First Name:</label>
                        <input type="text" class="form-control" name="first_name" id="first-name">
                    </div>

                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Last Name:</label>
                        <input type="text" class="form-control" name="last_name" id="last-name">
                    </div>

                    <div class="form-group">
                        <label class="cl-switch">
                            <span class="label">Status</span>
                            <input type="checkbox" name="status" id="status" value="0">
                            <span class="switcher"></span>
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="last-name" class="col-form-label">Role</label>
                        <select class="custom-select" name="role_id" id="actionSelect">
                            <?php foreach ($roles as $role) {   ?>
                                <option value="<?= $role->id ?>"><?= $role->name ?></option>
                            <?php } ?>
                        </select>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" id="modal-form-submit" class="btn btn-primary">Save</button>
                </div>
            </form>

        </div>
    </div>
</div>