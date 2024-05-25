interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_GOOGLE_MAPS_API_KEY: string;
    // Add more environment variables here as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  