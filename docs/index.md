<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#DA4453" />

    <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
    <link href="https://fonts.googleapis.com/css?family=Baloo|Questrial&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="code/main.css">
    <title>Nature | Ut Enim Ad</title>
</head>
<body>
<nav class="nav">
    <div class="nav__logo">
        <svg class="nav__logo-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>tree</title>
            <path d="M20 10c0-1.361-0.758-2.616-2.031-3.622-0.002-0.001-0.004-0.001-0.005-0.003-0.362-3.572-3.787-6.375-7.964-6.375s-7.602 2.803-7.964 6.375c-0.001 0.002-0.003 0.002-0.005 0.003-1.273 1.006-2.031 2.261-2.031 3.622 0 3.112 3.947 5.669 9 5.97 0 0.338 0 0.683 0 1.030 0 1-1.821 1.911-1.821 1.911-0.099 0.049-0.148 0.173-0.109 0.277 0 0 0.305 0.812 0.93 0.812s1.124-0.5 2.374-0.5 2.439 0.432 2.439 0.432c0.102 0.038 0.251 0.005 0.329-0.073l0.717-0.717c0.078-0.078 0.058-0.173-0.046-0.212 0 0-1.812-0.68-1.812-1.93 0-0.312 0-0.706 0-1.121 4.564-0.555 7.999-2.976 7.999-5.879zM2 10c0-1.019 0.768-1.945 2.022-2.651-0.010-0.116-0.022-0.232-0.022-0.349 0-2.762 2.687-5 6-5s6 2.238 6 5c0 0.117-0.012 0.233-0.021 0.349 1.253 0.706 2.021 1.632 2.021 2.651 0 1.864-2.551 3.424-5.999 3.869 0-0.401 0-0.668 0-0.668 0-0.11 0.065-0.262 0.145-0.337l1.833-1.726c0.080-0.076 0.146-0.227 0.146-0.337v-0.851c0-0.11-0.078-0.155-0.172-0.099l-1.779 1.047c-0.096 0.056-0.173 0.012-0.173-0.099v-3.599c0-0.11-0.085-0.172-0.19-0.137l-2.621 0.874c-0.104 0.035-0.189 0.153-0.189 0.263v2.6c0 0.11-0.079 0.158-0.177 0.107l-2.022-1.064c-0.097-0.051-0.24-0.030-0.318 0.048l-0.342 0.342c-0.078 0.078-0.073 0.201 0.009 0.273l2.7 2.361c0.083 0.073 0.15 0.222 0.15 0.332 0 0 0 0.298 0 0.765-3.945-0.245-7.001-1.924-7.001-3.964z"></path>
        </svg>
        <h4 class="logo">NATURE</h4>
    </div>
    <ul class="nav__list">
        <li class="nav__list-item"><a href="#">HOME</a></li>
        <li class="nav__list-item"><a href="#">ABOUT</a></li>
        <li class="nav__list-item"><a href="#">WORK</a></li>
        <li class="nav__list-item"><a href="#">PROJECTS</a></li>
    </ul>
    <div class="nav__form">
        <input type="text" class="nav__form-searchin" placeholder="Search">
        <button type="button" class="nav__form-btn">
            <svg class="nav__form-btn-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>magnifying-glass</title>
                <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
            </svg>
        </button>
    </div>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
</nav>
<div class="carousel">
    <div class="carousel__body">
        <div class="carousel__body__el carousel__body-1">
            <img src="img/3.jpg" alt="1" class="carousel__body__el-img">
            <h1 class="carousel__body__el-h1 h1-0 h1-active">Hello!</h1>
            <p class="carousel__body__el-p p-0 p-active">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button type="button" class="carousel__body__el-btn">Get Started</button>
        </div>
        <div class="carousel__body__el carousel__body-2">
            <img src="img/1.jpg" alt="2" class="carousel__body__el-img">
            <h1 class="carousel__body__el-h1 h1-1">Ut enim</h1>
            <p class="carousel__body__el-p p-1">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="carousel__body__el carousel__body-3">
            <img src="img/2.jpg" alt="3" class="carousel__body__el-img">
            <h1 class="carousel__body__el-h1 h1-2">Duis aute</h1>
            <p class="carousel__body__el-p p-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    </div>

    <div class="carousel__overlay">
        <!--To get all images to have the same overlay-->
    </div>
    
    <button type="button" class="carousel__left" data-next="3">
        <div class="carousel__left-icon"></div>
    </button>
    <button type="button" class="carousel__right" data-next="2">
        <div class="carousel__right-icon"></div>
    </button>
</div>

<div class="container">
    <section class="info">
        <div class="info__sec info__sec-1">
            <svg class="info__sec-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>thermometer</title>
                <path d="M13 10.123v-9.123c0-0.553-0.447-1-1-1h-4.201c-0.552 0-0.799 0.447-0.799 1v9.123c-1.444 0.969-2.4 2.608-2.4 4.477 0 2.982 2.418 5.4 5.4 5.4s5.4-2.418 5.4-5.4c0-1.869-0.956-3.508-2.4-4.477zM10 17.9c-1.823 0-3.3-1.477-3.3-3.3 0-1.472 0.97-2.703 2.3-3.129v-7.471h2v7.471c1.33 0.426 2.3 1.657 2.3 3.129 0 1.822-1.477 3.3-3.3 3.3z"></path>
            </svg>
            <div class="anim"></div>
            <h2 class="info__sec-title">
                Ut pharetra
            </h2>
            <p class="info__sec-p">
                Sed velit dignissim sodales ut eu sem integer vitae. Penatibus et magnis dis parturient. Porttitor lacus luctus acq cumsan.
            </p>
        </div>
        <div class="info__sec info__sec-2">
            <svg class="info__sec-icon tree" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>tree</title>
                <path d="M20 10c0-1.361-0.758-2.616-2.031-3.622-0.002-0.001-0.004-0.001-0.005-0.003-0.362-3.572-3.787-6.375-7.964-6.375s-7.602 2.803-7.964 6.375c-0.001 0.002-0.003 0.002-0.005 0.003-1.273 1.006-2.031 2.261-2.031 3.622 0 3.112 3.947 5.669 9 5.97 0 0.338 0 0.683 0 1.030 0 1-1.821 1.911-1.821 1.911-0.099 0.049-0.148 0.173-0.109 0.277 0 0 0.305 0.812 0.93 0.812s1.124-0.5 2.374-0.5 2.439 0.432 2.439 0.432c0.102 0.038 0.251 0.005 0.329-0.073l0.717-0.717c0.078-0.078 0.058-0.173-0.046-0.212 0 0-1.812-0.68-1.812-1.93 0-0.312 0-0.706 0-1.121 4.564-0.555 7.999-2.976 7.999-5.879zM2 10c0-1.019 0.768-1.945 2.022-2.651-0.010-0.116-0.022-0.232-0.022-0.349 0-2.762 2.687-5 6-5s6 2.238 6 5c0 0.117-0.012 0.233-0.021 0.349 1.253 0.706 2.021 1.632 2.021 2.651 0 1.864-2.551 3.424-5.999 3.869 0-0.401 0-0.668 0-0.668 0-0.11 0.065-0.262 0.145-0.337l1.833-1.726c0.080-0.076 0.146-0.227 0.146-0.337v-0.851c0-0.11-0.078-0.155-0.172-0.099l-1.779 1.047c-0.096 0.056-0.173 0.012-0.173-0.099v-3.599c0-0.11-0.085-0.172-0.19-0.137l-2.621 0.874c-0.104 0.035-0.189 0.153-0.189 0.263v2.6c0 0.11-0.079 0.158-0.177 0.107l-2.022-1.064c-0.097-0.051-0.24-0.030-0.318 0.048l-0.342 0.342c-0.078 0.078-0.073 0.201 0.009 0.273l2.7 2.361c0.083 0.073 0.15 0.222 0.15 0.332 0 0 0 0.298 0 0.765-3.945-0.245-7.001-1.924-7.001-3.964z"></path>
            </svg>
            <h2 class="info__sec-title">
                Massa tincidunt
            </h2>
            <p class="info__sec-p">
                Adipiscing commodo elit at imperdiet dui accumsan sit. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
            </p>
        </div>
        <div class="info__sec info__sec-3">
            <svg class="info__sec-icon rain" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>water</title>
                <path d="M9.882 9.093c-0.511 4.115-3.121 4.847-3.121 7.708 0 1.766 1.483 3.199 3.239 3.199s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-0.016-0.123-0.219-0.123-0.235 0zM3.883 0.093c-0.511 4.115-3.121 4.846-3.121 7.708 0 1.765 1.482 3.199 3.238 3.199s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-0.015-0.123-0.219-0.123-0.234 0zM15.883 0.093c-0.511 4.115-3.121 4.847-3.121 7.708 0 1.765 1.482 3.199 3.238 3.199s3.238-1.434 3.238-3.199c0-2.861-2.61-3.593-3.121-7.708-0.016-0.123-0.219-0.123-0.234 0z"></path>
            </svg>
            <h2 class="info__sec-title">
                Venenatis lectus
            </h2>
            <p class="info__sec-p">
                Amet justo donec enim diam vulputate ut pharetra. Ut pharetra sit amet aliquam id diam maecenas.
            </p>
    
        </div>
    </section>

    <section class="album">
        <div class="album__left">
            <img src="img/img-1.jpg" alt="img-1" class="album__left-img-1 album__left-img" data-id="1">
            <img src="img/img-2.jpg" alt="img-2" class="album__left-img-2 album__left-img" data-id="2">
            <img src="img/img-3.jpg" alt="img-3" class="album__left-img-3 album__left-img" data-id="3">
            <img src="img/img-4.jpg" alt="img-4" class="album__left-img-4 album__left-img" data-id="4">
        </div>
        <div class="album__right">
            <h2 class="album__right-title">Viverra Justo Nec</h2>
            <p class="album__right-p">D1`iam phasellus vestibulum lorem sed risus ultricies tristique. Faucibus pulvinar elementum integer enim neque. Nibh ipsum consequat nisl vel pretium lectus quam id. Nibh praesent tristique magna sit amet purus. Id venenatis a condimentum vitae. Tortor pretium viverra suspendisse potenti nullam.</p>
        </div>
    </section>

    <section class="para">
        <div class="para__div">
            <h2 class="para__div-title">
                Sed risus pretium
            </h2>
            <p class="para__div-p">
                Duis at consectetur lorem donec massa sapien. Sapien pellentesque habitant morbi tristique senectus et netus. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
            </p>
        </div>
        <div class="para__div">
            <h2 class="para__div-title">
                Quis blandit turpis
            </h2>
            <p class="para__div-p">
                Quis blandit turpis cursus in hac habitasse. Lectus magna fringilla urna porttitor rhoncus. Elementum curabitur vitae nunc sed velit. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.
            </p>
        </div>
        <div class="para__div">
            <h2 class="para__div-title">
                Purus sit amet
            </h2>
            <p class="para__div-p">
                Eros donec ac odio tempor orci. Id donec ultrices tincidunt arcu non sodales neque sodales. Netus et malesuada fames ac turpis egestas sed tempus urna. In hac habitasse. Netus et malesuada fames. 
            </p>
        </div>

    </section>

    <section class="board">
        <div class="board__left">
            <h2 class="board__left-title">Egestas fringilla</h2>
            <p class="board__left-p">Donec massa sapien faucibus et molestie ac. Adipiscing enim eu turpis egestas. Ac felis donec et odio pellentesque diam volutpat commodo. Purus gravida quis blandit turpis cursus.</p>
        </div>
        <div class="board__right">
            <div class="board__right__carousel">
                <img src="img/img-1.jpg" alt="img-1" class="board__right__carousel-img" data-num = "1">
                <img src="img/img-2.jpg" alt="img-2" class="board__right__carousel-img" data-num = "2">
                <img src="img/img-3.jpg" alt="img-3" class="board__right__carousel-img" data-num = "3">
                <img src="img/img-4.jpg" alt="img-4" class="board__right__carousel-img" data-num = "4">
            </div>
        </div> 
    </section>

    <section class="offers">
        <div class="offers__card card1">
            <div class="offers__card-img img1"></div>
            <h3 class="offers__card-title">Eripuit Dolorum</h3>
            <p class="offers__card-para">Autem eleifend incorrupte at vel, ad quo erat ullum, semper delicatissimi ius cu. Rebum facer blandit vix an. Qui error molestiae ut, et discere pertinax eum, his diam legimus volumus ad. </p>
        </div>
        <div class="offers__card card2">
            <div class="offers__card-img img2"></div>
            <h3 class="offers__card-title">Eum Everti</h3>
            <p class="offers__card-para">Epicuri deleniti intellegebat ne quo, solum propriae maiestatis id per, stet quas facete eos an. Vix ad aliquid fierent philosophia. Te sonet inermis sed. An eum alii nemore euripidis. Vel dico fabulas an.</p>
        </div>
        <div class="offers__card card3">
            <div class="offers__card-img img3"></div>
            <h3 class="offers__card-title">Adhuc Summo</h3>
            <p class="offers__card-para">An vim dicta perfecto accusata, vel velit diceret eu, ex deleniti principes pri. In latine atomorum eos, posse volumus praesent sea ea. Cu dolor disputationi vix, no sit autem virtute. Vix no impetus quaeque argumentum.</p>
        </div>
    </section>

    <section class="signup">
        <div class="signup__div">
            <div class="signup__div__form">
                <h3 class="signup__div__form-h3">CONTACT US</h3>
                <input type="text" class="signup__div__form-input" placeholder="Email">
                <input type="password" class="signup__div__form-input" placeholder="Password">
                <input type="text" class="signup__div__form-message" placeholder="Your Message">
                <button class="signup__div__form-btn">SUBMIT</button>
            </div>
            <div class="signup__div__pics">
                <div class="signup__div__pics-top"></div>
                <div class="signup__div__pics-bottom"></div>
            </div>
        </div>
    </section>

</div>

<footer class="footer">

    <svg class="backlogo" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>tree</title>
        <path d="M20 10c0-1.361-0.758-2.616-2.031-3.622-0.002-0.001-0.004-0.001-0.005-0.003-0.362-3.572-3.787-6.375-7.964-6.375s-7.602 2.803-7.964 6.375c-0.001 0.002-0.003 0.002-0.005 0.003-1.273 1.006-2.031 2.261-2.031 3.622 0 3.112 3.947 5.669 9 5.97 0 0.338 0 0.683 0 1.030 0 1-1.821 1.911-1.821 1.911-0.099 0.049-0.148 0.173-0.109 0.277 0 0 0.305 0.812 0.93 0.812s1.124-0.5 2.374-0.5 2.439 0.432 2.439 0.432c0.102 0.038 0.251 0.005 0.329-0.073l0.717-0.717c0.078-0.078 0.058-0.173-0.046-0.212 0 0-1.812-0.68-1.812-1.93 0-0.312 0-0.706 0-1.121 4.564-0.555 7.999-2.976 7.999-5.879zM2 10c0-1.019 0.768-1.945 2.022-2.651-0.010-0.116-0.022-0.232-0.022-0.349 0-2.762 2.687-5 6-5s6 2.238 6 5c0 0.117-0.012 0.233-0.021 0.349 1.253 0.706 2.021 1.632 2.021 2.651 0 1.864-2.551 3.424-5.999 3.869 0-0.401 0-0.668 0-0.668 0-0.11 0.065-0.262 0.145-0.337l1.833-1.726c0.080-0.076 0.146-0.227 0.146-0.337v-0.851c0-0.11-0.078-0.155-0.172-0.099l-1.779 1.047c-0.096 0.056-0.173 0.012-0.173-0.099v-3.599c0-0.11-0.085-0.172-0.19-0.137l-2.621 0.874c-0.104 0.035-0.189 0.153-0.189 0.263v2.6c0 0.11-0.079 0.158-0.177 0.107l-2.022-1.064c-0.097-0.051-0.24-0.030-0.318 0.048l-0.342 0.342c-0.078 0.078-0.073 0.201 0.009 0.273l2.7 2.361c0.083 0.073 0.15 0.222 0.15 0.332 0 0 0 0.298 0 0.765-3.945-0.245-7.001-1.924-7.001-3.964z"></path>
    </svg>

    <div class="footer__top">
        <div class="footer__top__logo">
            <svg class="footer__top__logo-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>tree</title>
                <path d="M20 10c0-1.361-0.758-2.616-2.031-3.622-0.002-0.001-0.004-0.001-0.005-0.003-0.362-3.572-3.787-6.375-7.964-6.375s-7.602 2.803-7.964 6.375c-0.001 0.002-0.003 0.002-0.005 0.003-1.273 1.006-2.031 2.261-2.031 3.622 0 3.112 3.947 5.669 9 5.97 0 0.338 0 0.683 0 1.030 0 1-1.821 1.911-1.821 1.911-0.099 0.049-0.148 0.173-0.109 0.277 0 0 0.305 0.812 0.93 0.812s1.124-0.5 2.374-0.5 2.439 0.432 2.439 0.432c0.102 0.038 0.251 0.005 0.329-0.073l0.717-0.717c0.078-0.078 0.058-0.173-0.046-0.212 0 0-1.812-0.68-1.812-1.93 0-0.312 0-0.706 0-1.121 4.564-0.555 7.999-2.976 7.999-5.879zM2 10c0-1.019 0.768-1.945 2.022-2.651-0.010-0.116-0.022-0.232-0.022-0.349 0-2.762 2.687-5 6-5s6 2.238 6 5c0 0.117-0.012 0.233-0.021 0.349 1.253 0.706 2.021 1.632 2.021 2.651 0 1.864-2.551 3.424-5.999 3.869 0-0.401 0-0.668 0-0.668 0-0.11 0.065-0.262 0.145-0.337l1.833-1.726c0.080-0.076 0.146-0.227 0.146-0.337v-0.851c0-0.11-0.078-0.155-0.172-0.099l-1.779 1.047c-0.096 0.056-0.173 0.012-0.173-0.099v-3.599c0-0.11-0.085-0.172-0.19-0.137l-2.621 0.874c-0.104 0.035-0.189 0.153-0.189 0.263v2.6c0 0.11-0.079 0.158-0.177 0.107l-2.022-1.064c-0.097-0.051-0.24-0.030-0.318 0.048l-0.342 0.342c-0.078 0.078-0.073 0.201 0.009 0.273l2.7 2.361c0.083 0.073 0.15 0.222 0.15 0.332 0 0 0 0.298 0 0.765-3.945-0.245-7.001-1.924-7.001-3.964z"></path>
            </svg>
            <div class="footer__top__logo-h1">
                NATURE
            </div>
        </div>
        <div class="footer__top__nav">
            <ul class="footer__top__nav__list">
                <li class="footer__top__nav__list-item"><a href="#">HOME</a></li>
                <li class="footer__top__nav__list-item"><a href="#">ABOUT</a><a</li>
                <li class="footer__top__nav__list-item"><a href="#">WORK</a></li>
                <li class="footer__top__nav__list-item"><a href="#">PROJECTS</a></li>
            </ul>
        </div>
    </div>
    <div class="footer__bottom">
        <div class="footer__bottom__social">
            <svg class="footer__bottom__social-icon babyblue" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>twitter</title>
                <path d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z"></path>
            </svg>                    
            <svg class="footer__bottom__social-icon blue" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>facebook</title>
                <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h7v-7h-2v-2.475h2v-2.050c0-2.164 1.212-3.684 3.766-3.684l1.803 0.002v2.605h-1.197c-0.994 0-1.372 0.746-1.372 1.438v1.69h2.568l-0.568 2.474h-2v7h4c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2z"></path>
            </svg>
            <svg class="footer__bottom__social-icon pink" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>instagram</title>
                <path d="M17 1h-14c-1.1 0-2 0.9-2 2v14c0 1.101 0.9 2 2 2h14c1.1 0 2-0.899 2-2v-14c0-1.1-0.9-2-2-2zM9.984 15.523c3.059 0 5.538-2.481 5.538-5.539 0-0.338-0.043-0.664-0.103-0.984h1.581v7.216c0 0.382-0.31 0.69-0.693 0.69h-12.614c-0.383 0-0.693-0.308-0.693-0.69v-7.216h1.549c-0.061 0.32-0.104 0.646-0.104 0.984 0 3.059 2.481 5.539 5.539 5.539zM6.523 9.984c0-1.912 1.55-3.461 3.462-3.461s3.462 1.549 3.462 3.461-1.551 3.462-3.462 3.462c-1.913 0-3.462-1.55-3.462-3.462zM16.307 6h-1.615c-0.382 0-0.692-0.312-0.692-0.692v-1.617c0-0.382 0.31-0.691 0.691-0.691h1.615c0.384 0 0.694 0.309 0.694 0.691v1.616c0 0.381-0.31 0.693-0.693 0.693z"></path>
            </svg>
            <svg class="footer__bottom__social-icon red" version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>youtube</title>
                <path d="M10 2.3c-9.828 0-10 0.874-10 7.7s0.172 7.7 10 7.7 10-0.874 10-7.7-0.172-7.7-10-7.7zM13.205 10.334l-4.49 2.096c-0.393 0.182-0.715-0.022-0.715-0.456v-3.948c0-0.433 0.322-0.638 0.715-0.456l4.49 2.096c0.393 0.184 0.393 0.484 0 0.668z"></path>
            </svg>
        </div>
        <div class="footer__bottom__copy">
            <p class="footer__bottom__copy-para">
                This website is created by OMARALI. Copyright © 2019 Nature Inc. All rights reserved.
            </p>
        </div>
    </div>
    
</footer>

<script src="code/bundle.js"></script>
</body>
</html>
