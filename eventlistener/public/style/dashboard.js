db.collection('branch').get().then(snapshot => {
 setupbranches(snapshot.docs);
});
//Cheking User status
auth.onAuthStateChanged(user => {
 if (user) {
   // console.log('user logged in: ', user);
   const login = document.querySelector('#nav-loggedin');
   const logout = document.querySelector('#nav-loggedout');
   logout.style.display ="none";
 } else {
   // console.log('user logged out');
   const login = document.querySelector('#nav-loggedin');
   const logout = document.querySelector('#nav-loggedout');
   login.style.display="none";
 }
});
// ******* LOGOUT **************
const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
     e.preventDefault();
     auth.signOut().then(() => {
       console.log('user signed out');
       alert ("You have successfully logged out!!");
       window.location.href = 'index.html';
     });
 });
 // ******* LOGIN & LOGOUT Display **************
