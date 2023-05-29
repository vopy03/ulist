<?php

use App\Services\App;

$users = App::loadTable('users');
$roles = App::loadTable('roles');

foreach($users as $user) { ?>
                        <tr>
                          <td class="align-middle">
                            <div
                              class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                              <input type="checkbox" class="custom-control-input" data-id="<?=$user['id']?>" id="item-<?=$user['id']?>">
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