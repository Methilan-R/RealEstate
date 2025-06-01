import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://dev-3ymfqt2ur1k4pnj6.us.auth0.com",  // Also use https
  tokenSigningAlg: "RS256"
});

export default jwtCheck;
