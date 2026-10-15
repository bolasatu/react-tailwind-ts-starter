import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import App from './components/EmailCoupon.tsx'
// import App from './components/EmailOnBoarding.tsx'
// import App from "./components/EmailOrderConfimed.tsx"
// import App from "./components/EmailFeaturedPost.tsx"
import App from "./components/EmailCta.tsx"

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
