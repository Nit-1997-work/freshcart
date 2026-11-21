import { signOut } from './auth.js';

// Fills the signed-in header on the stores pages: shows the email and wires the Sign out button.
export function mountAccountHeader(session) {
  const email = document.querySelector('#account-email');
  email.textContent = session.email;
  email.title = session.email;
  document.querySelector('#sign-out').addEventListener('click', () => {
    signOut();
    location.assign('/login.html');
  });
}
