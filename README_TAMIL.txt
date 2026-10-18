SMART CAMPUS CANTEEN — FIREBASE BACKEND STARTER

Ithu backend setup-ku starter pack. Firebase project config set pannitu, integration helpers-ai frontend UI-oda connect pannina thaan multi-phone live sync work aagum.

STEP 1 — Firebase project
1. https://console.firebase.google.com open pannu.
2. Create project -> project name: smart-campus-canteen.
3. Project create aanathum, Web app (</>) add pannu.
4. Firebase config values copy pannu.

STEP 2 — Authentication
1. Firebase Console -> Build -> Authentication -> Get started.
2. Sign-in method -> Email/Password enable pannu.
3. Users tab -> Add user -> admin email/password create pannu.
4. Admin email-ai yaar kittayum share panna vendam.

STEP 3 — Firestore database
1. Build -> Firestore Database -> Create database.
2. Database create pannu.
3. Firestore -> Rules tab-la firestore.rules file content paste pannu.
4. Rules-la irukkura REPLACE_WITH_ADMIN_EMAIL-ai un admin account email-oda replace pannu.

STEP 4 — Config
1. firebase-config.js open pannu.
2. Firebase Web App config-la irukkura values-ai placeholder-ku badhila paste pannu.
3. firebase-config.js-ai public repository-la secrets-oda upload pannalam-nu bayappada vendam: Firebase web config itself public-facing; aana security Firestore Rules + Authentication-la irukkanum. Service account/private keys-ai browser-la podakoodathu.

IMPORTANT
- Current index.html existing prototype UI. firebase-backend.js reusable Firebase connection helpers; it is not yet wired into every existing button/form automatically.
- To make all UI actions use live Firestore, frontend script must be updated to import and call these helpers, and the site must be served over a local web server (not opened as file://).
- Don't deploy with placeholder config or placeholder admin email.
- Demo login in the old prototype is NOT real security. Create a Firebase Auth admin account and use Firebase Authentication in the finished integration.
- Test with two devices after hosting: admin updates menu -> student device should receive live menu updates.
