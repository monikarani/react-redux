export const environment = {
  API_ROOT:
    window.location.protocol === "https:"
      ? "https://developer.github.com"
      : "https://developer.github.com",
  LOCAL_API_URL: "localhost:developer.github.com",
  STAGING_API_URL: "developer.github.com"
};
