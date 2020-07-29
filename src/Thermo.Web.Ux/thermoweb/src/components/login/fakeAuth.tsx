export const fakeAuth = {
    isAuthenticated: false,
    
    authenticate() {
      fakeAuth.isAuthenticated = true;
      //setTimeout(cb, 100); // fake async
    },
    signout() {
      fakeAuth.isAuthenticated = false;
      //setTimeout(cb, 100);
    }
  };