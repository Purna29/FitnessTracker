  <template>
  <div class>
    <div class="wrapper">
      <div class="container">
        <!-- Outer Row -->

        <!-- <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0"> -->
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-lg-5 cover my-4">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-light mb-4">Join 24/7 Fitness now!</h1>
                  </div>
                  <form class="user text-center">
                    <div class="alert alert-danger mx-0" role="alert" v-if="errors.length">
                      <strong>{{ errors }}</strong>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        v-model="email"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        v-model="password"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <!-- <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>-->
                    <a
                      href="#"
                      @click.prevent="login"
                      class="button is-black"
                    >Login</a>
                  </form>
                  <hr />

                  <div class="text-center">
                    <a class="small text-light" @click="forgot" href="#">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small text-light" @click="signup" href="#">Create an Account!</a>
                  </div>
                </div>
              </div>
        
        </div>
      </div>
    </div>
    <div id="screen1" class="align-self-center" style="flex-grow: 0.5">
      <!-- <div class="container-fluid">
        <div class="row justify-content-center mt-5">
          <div class="col-sm-10">
            <form class="m-auto login-form rounded text-center bg-primary p-4" >
              <h4 class="mb-4 text-light font-weight-bold">Management System for Visitors Entrance</h4>
              <h5 class="mb-4 text-light font-weight-bold">Login to your Account</h5>
              <div class="alert alert-danger mx-0" role="alert" v-if="errors.length">
                <strong>{{ errors[0] }}</strong>
              </div>
              <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Enter your Email</label>
                  <input v-model="apiKey" />
                </fieldset>
              </div>
              <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Enter your Password</label>
                  <input v-model="apiSecrete" type="password"></input>
                </fieldset>
              </div>
              <div class="destination text-center mt-0">
                <button
                  class=" p-2 rounded w-32 bg-danger text-light mt-3"
                  @click.prevent="login"
                >LOGIN</button>
                <h3 class="mt-2" @click="forgot">Forget password?</h3>
                <h3 class="mt-2" @click="signup">Create new account?</h3>
              </div>
            </form>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<style scoped>
.wrapper {
        background: aliceblue;
}
.cover {
    background: #0067b3;
    box-shadow: 3px 15px 5px 5px #0269b4;
}
</style>
<script type="text/javascript">
import Vue from "vue";
export default {
  data() {
    return {

      config: "",
      apiKey: "",
      apiSecrete: "",
      loader: false,
      email:'',
      password:'',
      errors:""
    };
  },

  mounted() {
    console.log(process.env.NODE_ENV);
    // this.$store.dispatch("booking/resetState");
    // jQuery(".modal").modal("hide");
  },

  methods: {
    forgot() {
      this.$router.push({ name: "reset" });
    },
    signup() {
      this.$router.push({ name: "signup" });
    },
    login() {}
  }
};
</script>
