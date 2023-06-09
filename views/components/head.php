<head>
  <meta charset="utf-8">
  <title>Users table</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/js/bootstrap.bundle.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

  <link href="<?= $_SERVER['REQUEST_URI'] ?>/assets/css/styles.css" rel="stylesheet">
  <link href="<?= $_SERVER['REQUEST_URI'] ?>/assets/css/clean-switch.css" rel="stylesheet">
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/Selection.js" defer></script>
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/User.js" defer></script>
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/List.js" defer></script>
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/Modal.js" defer></script>
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/Actionbar.js" defer></script>
  <script src="<?= $_SERVER['REQUEST_URI'] ?>/assets/js/App.js" defer></script>

  <script defer>
    window.onload = function() {
      App.init();
    }
  </script>
</head>