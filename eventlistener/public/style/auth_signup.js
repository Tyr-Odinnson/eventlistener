/******* Create new user- SIGN UP **************/
const signupForm = document.querySelector('#signup-form');
 signupForm.addEventListener('submit', (e) => {
     e.preventDefault();
   // get user info
     const email = signupForm['signup-email'].value;
     const password1 = signupForm['signup-password1'].value;
     const password2 = signupForm['signup-password2'].value;
         if(password1 === password2){
                 auth.createUserWithEmailAndPassword(email, password1).then(cred => {
                      window.location.href = 'index.html';
                      });
         }
         else {
           alert ("Please enter same Password");
            window.location.href = 'signup.html';
         }
 });
