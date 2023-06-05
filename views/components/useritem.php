<tr data-id="<?= $user['id'] ?>">
    <td class="align-middle">
      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
        <input type="checkbox" class="custom-control-input" data-id="<?= $user['id'] ?>" id="item-<?= $user['id'] ?>">
        <label class="custom-control-label" for="item-<?= $user['id'] ?>"></label>
      </div>
    </td>
    <td class="text-nowrap align-middle">
      <span class="user-fullname"><?= $user['first_name'] ?> <?= $user['last_name'] ?></span>
    </td>
    <td class="text-nowrap align-middle"><span class="user-role"><?= $roles[$user['role_id']] ?></span></td>
    <td class="text-center align-middle"><span class="user-status"><i class="fa fa-circle <?= $user['status'] ? 'active-circle' : 'not-active-circle' ?>"></i></td>
    <td class="text-center align-middle">
      <div class="btn-group align-top">
        <button class="btn btn-sm btn-outline-secondary badge edit-user-btn" type="button" data-id="<?= $user['id'] ?>" data-toggle="modal" data-target="#user-form-modal"><i class="fa fa-pencil" data-id="<?= $user['id'] ?>"></i></button>
        <button class="btn btn-sm btn-outline-secondary badge delete-user-btn" data-id="<?= $user['id'] ?>" type="button" data-toggle="modal" data-target="#user-delete-modal"><i class="fa fa-trash" data-id="<?= $user['id'] ?>"></i></button>
      </div>
    </td>
  </tr>