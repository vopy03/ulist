<?php 

use App\Services\Page;
use App\Services\App;
// use App\Services\Router;

?>
<!DOCTYPE html>
<html lang="en">
<?php Page::part('head')  ?>
<body>
  
  <div class="container">
    <div class="row flex-lg-nowrap">
      <div class="col">
        <div class="row flex-lg-nowrap">
          <div class="col mb-3">
            <div class="e-panel card">
              <div class="card-body">
                <div class="card-title">
                  <h6 class="mr-2"><span>Users</span></h6>
                </div>
                <div class="e-table">
                  <div class="table-responsive table-lg mt-3">

                    <?php Page::part('actionbar'); ?>

                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th class="align-top">
                            <div
                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                              <input type="checkbox" class="custom-control-input" id="all-items">
                              <label class="custom-control-label" for="all-items"></label>
                            </div>
                          </th>
                          <th class="max-width">Name</th>
                          <th class="sortable">Role</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>

                      <?php

                      $users = App::loadTable('users');
                      $roles = App::loadTable('roles');
                      
                      foreach($users as $user) { ?>
                        <tr>
                          <td class="align-middle">
                            <div
                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                              <input type="checkbox" class="custom-control-input" id="item-<?=$user['id']?>">
                              <label class="custom-control-label" for="item-<?=$user['id']?>"></label>
                            </div>
                          </td>
                          <td class="text-nowrap align-middle"><?=$user['first_name']?> <?=$user['last_name']?></td>
                          <td class="text-nowrap align-middle"><span><?=$roles[$user['role_id']]['name']?></span></td>
                          <td class="text-center align-middle"><i class="fa fa-circle <?=$user['status'] ? 'active-circle' : ''?>"></i></td>
                          <td class="text-center align-middle">
                            <div class="btn-group align-top">
                              <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal"
                                data-target="#user-form-modal">Edit</button>
                              <button class="btn btn-sm btn-outline-secondary badge" type="button"><i
                                  class="fa fa-trash"></i></button>
                            </div>
                          </td>
                        </tr>
                        <?php } ?>

                      </tbody>
                    </table>

                    <?php Page::part('actionbar'); ?>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- User Form Modal -->
        
        <div class="modal fade" id="user-form-modal" tabindex="-1" aria-labelledby="user-form-modal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="UserModalLabel">Add user</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="first-name" class="col-form-label">First Name:</label>
                    <input type="text" class="form-control" id="first-name">
                  </div>
                  <div class="form-group">
                    <label for="last-name" class="col-form-label">Last Name:</label>
                    <input type="text" class="form-control" id="last-name">
                  </div>
                  
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
          </div>
        </div>

        <!-- User Form Modal -->
      </div>

    </div>
  </div>
</body>
</html>