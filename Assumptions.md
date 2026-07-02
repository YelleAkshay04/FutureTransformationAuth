# Assumptions

1. **Environment Setup**

   * The application is deployed in a stable test environment with
the React frontend and Spring Boot backend running correctly.
   * The frontend can communicate successfully with the backend APIs.
2. **JWT Authentication**

   * A valid JWT token is generated only after successful user
authentication.
   * Protected API endpoints and pages require a valid JWT token for
access.
3. **Token Expiration**

   * JWT tokens have a predefined expiration time.
   * Once a token expires, the user must log in again to obtain a new
valid token.
4. **Validation Rules**

   * Client-side validation provides immediate feedback to users.
   * Backend validation is always enforced, even if client-side
validation is bypassed.
5. **Email Handling**

   * Email addresses are converted to lowercase before storage.
   * Leading and trailing spaces are trimmed before validation.
   * Email addresses are unique regardless of letter case.



