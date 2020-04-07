<template>
  <div class>
  <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      v-if="$route.path !== '/home'"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href @click="$router.push({path: '/'})">
          <img src="/img/logo.png" />
        </a>

        <a
          :class="{ 'is-active':isOpen }"
          @click="isOpen = !isOpen"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="{ 'is-active':isOpen }" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
          <router-link to="/about" class="navbar-item" active-class="is-current">About Us</router-link>
          <router-link to="/whyjoin" class="navbar-item" active-class="is-current">Why join?</router-link>
          <router-link to="/contact" class="navbar-item" active-class="is-current">Contact Us</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" href @click="$router.push({path: '/signup'})">
                <strong>Register</strong>
              </a>
              <a class="button is-warning" href @click="$router.push({path: '/login'})">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
      v-if="$route.path === '/home'"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href @click="$router.push({path: '/'})">
          <img src="/img/logo.png" />
        </a>

        <a
          :class="{ 'is-active':isOpen }"
          @click="isOpen = !isOpen"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="{ 'is-active':isOpen }" class="navbar-menu">
        <div class="navbar-start">
          <!-- 

      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      <router-link to="/about" class="navbar-item" active-class="is-current">About Us</router-link>
      <router-link to="/whyjoin" class="navbar-item" active-class="is-current">Why join?  </router-link>
          <router-link to="/contact" class="navbar-item" active-class="is-current">Contact Us</router-link>-->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="dropdown">
              <button
                class="btn mt-1 dropdown-toggle d-flex"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Paul Adams <div class="image-cover mx-2">
                <img src="/img/user.jpg" />
              </div></button>
              
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Logout</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
};
</script>

<style>
.is-current {
  font-weight: bold;
  color: blueviolet;
}
.image-cover {
  height: 48px;
  /* width: 40px; */
  width: 48px;
  border-radius: 40px;
  overflow: hidden;
}
.dropdown button {
  align-items: center;
}
.navbar-item {
  height: 45px;
  font-size: 19px !important;
}
.navbar-item img {
  max-height: unset !important;
  width: 250px !important;
}
</style>