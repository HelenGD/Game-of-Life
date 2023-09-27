export const registerServiceWorker = async () => {
  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    await registration.update();
  } catch (error) {
    console.error(`Registration failed with ${error}`);
  }
};
