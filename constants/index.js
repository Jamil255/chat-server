const corsOption = {
  origin: 'http://localhost:5173', // Your client app URL
  credentials: true, // Allow cookies with cross-origin requests
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'], // Allow GET, POST, and OPTIONS methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
}

export { corsOption }
