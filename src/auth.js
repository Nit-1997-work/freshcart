// UI-only fake sign-in. The session lives in sessionStorage, so it lasts for the browser tab.
export const SESSION_KEY = 'freshcart.session';

export function getSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem(SESSION_KEY));
    return session && typeof session.email === 'string' ? session : null;
  } catch {
    return null;
  }
}

export function signIn(email) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ email }));
}

export function signOut() {
  sessionStorage.removeItem(SESSION_KEY);
}

export function requireSession(redirectTo = '/login.html') {
  const session = getSession();
  if (!session) location.replace(redirectTo);
  return session;
}
