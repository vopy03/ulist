<nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="<?=$_SERVER["PHP_SELF"]?>">My PHP Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="<?=$_SERVER["PHP_SELF"]?>">Home</a>
        </li>
      </ul>
    </div>
    
    <div class="d-flex gap-4">
      <?php if(!isset($_SESSION["user"])) {?>
        <a class="nav-link" href="login">Login</a>
        <a class="nav-link" href="register">Register</a>
      <?php } else {?>
        <a class="nav-link" href="profile">Profile</a>
        <form action="auth/logout" method="post">
          <button class="nav-link" type="submit">Logout</button>
        </form>
      <?php } ?>
      </div>  
  </div>
</nav>