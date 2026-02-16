# Social Authentication Flow (Google OAuth)

## Backend Flow

### Step 1: Install Dependencies

```bash
npm install express passport passport-google-oauth20 cookie-session express-session
```

### Step 2: Configure Passport (`config/passport.js`)

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken, profile);
   
      // Use profile info (email, name, picture)
      // Find or create user in database
      // Then return user object
      return done(null, profile);
    }
  )
);


// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
```

### Step 3: Authentication Routes (`routes/auth.js`)

```js
app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failed' }),
  (req, res) => {
    // Successful authentication
    // Generate JWT and send to React client
    res.redirect('/login/success');
  }
);
```

---

## Frontend Flow (React)

### Step 1: Install Dependency

```bash
npm install @react-oauth/google
```

### Step 2: Authentication UI

```jsx
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = () => {
  const clientId = "YOUR_CLIENT_ID";

  const onSuccess = (credentialResponse) => {
    fetch('/google-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: credentialResponse.credential
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Store backend JWT
        // Manage user session
      });
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
```
