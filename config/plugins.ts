module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
      providerOptions: {
        publicKey: env('IMAGEKIT_PUBLIC_KEY', 'localhost'),  
        privateKey: env('IMAGEKIT_PRIVATE_KEY', 'localhost'),  
        urlEndpoint: env('IMAGEKIT_URL_ENDPOINT', 'localhost'),    // Example: https://ik.imagekit.io/username

        // Optional
        params: {
          folder: "/production/images"  // Defaults to "/" if value is not supplied
        }
      }
    }
  }
});