import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
};

console.log(keycloakConfig);

const keycloak = new Keycloak(keycloakConfig);

export const initKeycloak = async () => {
  console.log("initialing...", keycloak);

  const authenticated = await keycloak.init({ onLoad: "login-required" });

  console.log(authenticated, keycloak);

  if (!authenticated) throw new Error("401");

  localStorage.setItem("token", keycloak.token);
};

export const getToken = () => localStorage.getItem("token");

export const logout = () => keycloak.logout();
