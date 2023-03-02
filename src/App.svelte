
<script>
    import {auth,googleProvider} from './firebase';
    import {authState } from 'rxfire/auth';
  

    let user;

    const unsubscribe = authState(auth).subscribe(usr => user = usr);


    function login(){
      auth.signInWithPopup(googleProvider);
    }    

    function logout(){
      auth.signOut();
    }

</script>


<!--!  -->
<!--!  -->
<!--!  -->

<main>
    <button>dsafdf</button>

  {#if user}

        Logged in as user.uid

  {:else}

    <button on:click={login}>
        <i class= 'fa fa-google'></i>
        Sign in with Google
    </button>

  {/if}

</main>

<!-- ! -->
<!-- ! -->
<!-- ! -->

<style>
 
    main{
      position:fixed;
      top:50%;
      left:50%;
      transform:translate(-50% , -50%); 
      width:100%;
      height:100%;
      max-width:400px;

    }

</style>
