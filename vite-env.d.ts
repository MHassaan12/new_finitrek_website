interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_GOOGLE_MAPS_API_KEY: string;
    readonly VITE_PAYPAL_MERCHANTID: string;
    readonly VITE_PAYPAL_CLIENTID: string;
    readonly VITE_STRIPE_PUBLISHABLE: string;
    // Add more environment variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  