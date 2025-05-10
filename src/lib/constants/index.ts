// Application-wide constants

export const APP_NAME = 'Dashboard Demo'
export const COPYRIGHT_YEAR = new Date().getFullYear()

// Feature flags
export const FEATURES = {
  ANALYTICS: true,
  TEAM_MANAGEMENT: true,
  DARK_MODE: true,
}

// API endpoints
export const API = {
  BASE_URL: '/api',
  ENDPOINTS: {
    USERS: '/users',
    TEAMS: '/teams',
    ANALYTICS: '/analytics',
  },
}
