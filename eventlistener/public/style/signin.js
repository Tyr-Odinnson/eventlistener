const loginForm = document.querySelector('#signinForm');
 loginForm.addEventListener('submit', (e) => {
     e.preventDefault();
   // get user info
     const email = loginForm['login-email'].value;
     const password = loginForm['login-password'].value;
   // log the user in
     auth.signInWithEmailAndPassword(email, password).then((cred) => {
      window.location.href = 'dashboard.html';
     });
 });
