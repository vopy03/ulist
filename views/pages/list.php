<?php

use App\Services\Page;

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
                            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
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

                        <?php Page::part('userlist') ?>

                      </tbody>
                    </table>

                    <?php Page::part('actionbar'); ?>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <?php Page::part('modal'); ?>
        <?php Page::part('deleteConfirmModal'); ?>
        <?php Page::part('warningModal'); ?>

      </div>

    </div>
  </div>
</body>

</html>