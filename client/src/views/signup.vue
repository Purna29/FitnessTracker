  <template>
  <div class="justify-content-center wrapper">  <div class="modal fade" id="reset" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
 
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">{{modal_msg}}</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>

        </div>
      </div>
    </div>
  </div>
     <div class="loader" v-if="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="">




  <div class="container">

    <div class=" o-hidden border-0 shadow-lg py-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row justify-content-center">
       
          <div class="col-lg-7 my-4 cover">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-light mb-4">Register your Account!</h1>
              </div>
              <form class="user text-center">
                             <div class="alert alert-danger mx-0" role="alert" v-if="errors.length">
                <strong>{{ errors[0] }}</strong>
              </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user" id="exampleFirstName" v-model="name" placeholder="Name">
                  </div>
                  <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user" id="exampleLastName" v-model="surname" placeholder="Surname">
                  </div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-user" id="exampleInputEmail" v-model="email" placeholder="Email Address">
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user" id="exampleInputPassword" v-model='password' placeholder="Password">
                  </div>
                  <div class="col-sm-6">
                    <input type="password" class="form-control form-control-user" v-model="confirmPassword" id="exampleRepeatPassword" placeholder="Repeat Password">
                  </div>
                  <vue-recaptcha  @verify="verify" class="mt-3 ml-3" sitekey="6Lf4it0UAAAAAE5sH4TQpLfG5hOq6p41zLE-knn5" :loadRecaptchaScript="true">
                  
                </vue-recaptcha>
                </div>
                <a href="#" @click.prevent="create" class="button is-black">
                  Register Account
                </a>
              </form>
              <hr>
              <div class="text-center">
                <a class="small text-light" href="#" @click="$router.push({path : '/reset'})">Forgot Password?</a>
              </div>
              <div class="text-center">
                <a class="small text-light" href="#" @click="$router.push({path : '/login'})">Already have an account? Login!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

    </div>
    <!-- <div id="screen1" class="align-self-center" style="flex-grow: 0.5">
      <div class="container-fluid">
        <div class="row justify-content-center mt-5">
          <div class="col-sm-10">
            <form class="m-auto login-form rounded text-center bg-primary p-4">
              <h4 class="mb-4 text-light font-weight-bold">Create new account </h4>
              <h5 class="mb-4 text-light font-weight-bold">Enter the required details</h5>
              <div class="alert alert-danger mx-0" role="alert" v-if="errors.length">
                <strong>{{ errors[0] }}</strong>
              </div>
               <div class="col-sm-12 my-1">
                
                 
                  
              </div>
              <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Company</label>
                  <input v-model="TENANT_CODE" />
                </fieldset>
              </div>
              <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Name</label>
                  <input v-model="name" />
                </fieldset>
              </div>
              <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Surname</label>
                  <input v-model="surname" type="text"></input>
                </fieldset>
              </div>

               <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Email</label>
                  <input v-model="email" type="email"></input>
                </fieldset>
              </div>
               <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Password</label>
                  <input v-model='password' type="password"></input>
                </fieldset>
              </div>
               <div class="col-sm-12 my-1">
                <fieldset>
                  <label>Confirm Password</label>
                  <input type="password" v-model="confirmPassword"></input>
                </fieldset>
                
              </div>
              <div class="destination text-center mt-0">
                <vue-recaptcha  @verify="verify" sitekey="6Lf4it0UAAAAAE5sH4TQpLfG5hOq6p41zLE-knn5" :loadRecaptchaScript="true">
                  
                </vue-recaptcha>
                <button
                  class=" p-2 rounded w-32 bg-success text-light mt-3"
                  @click.prevent="create"
                >Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
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
      name: "",
      surname: "",
      password:'',
      email:'',
      confirmPassword:'',
      TENANT_CODE : "",
      loader:false,
      recaptcha:'', modal_msg:''
      
    };
  },

  mounted() {
    console.log(process.env.NODE_ENV);
    // this.$store.dispatch("booking/resetState");
    // jQuery(".modal").modal("hide");
    // this.company = substring(this.href.lastIndexOf('/') + 1)

  },

  methods: {
    verify(response) {
        this.recaptcha = response
    },

    signup() {
      this.$router.push({name: 'signup'})
    },
    create() {
      if (!this.name || !this.surname || !this.password || !this.email ||  !this.TENANT_CODE || !this.recaptcha) {
        this.errors.push("Please fill the required fields");
      } else {
        if (this.password !== this.confirmPassword) {
          this.errors.splice( 0,1 ,'Password doesnt match');
        }else {
          this.errors = []
                    
        var self = this;  self.$store.commit("Register/loader", true);
        var data;
        data = {
         TENANT_CODE : this.TENANT_CODE.toLowerCase(),
          email: this.email,
          name: this.name,
          surname: this.surname,
           password: this.password

        };
        Vue.axios
          .post("/api/auth/signup", data)
          .then(function(response) {
            self.loader = false
             jQuery('#reset').modal('show')
            self.modal_msg = "Controlla la tua posta elettronica";  self.$store.commit("Register/loader", false);
           
          })
          .catch(() => {
            self.$store.commit("Register/loader", false);
            jQuery('#reset').modal('show')
            self.modal_msg = "There is a problem, try again later"
          });
        }

      }
    }
  }
};
</script>
