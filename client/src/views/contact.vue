  <template>
  <div class>
    <div class="wrapper">
      <div class="container">
        <!-- Outer Row -->

        <!-- <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">-->
        <!-- Nested Row within Card Body -->
        <div class="row justify-content-center">
          <div class="col-lg-5 cover my-4 py-3">
               <h1 class="h4 text-light mb-4">Feedback</h1>
            <div class="field">
              <label class="label text-light">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Enter you name " />
                 <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label text-light">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input "
                  type="email"
                  placeholder="Enter your email"
                
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                 
                </span>
              </div>
            </div>

            <div class="field mt-4">
              <div class="control">
                <textarea class="textarea" placeholder="Leave you feedback"></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-black">Submit</button>
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
      errors: [],
      config: "",
      apiKey: "",
      apiSecrete: "",
      loader: false
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
