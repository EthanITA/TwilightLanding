export const initVercelAnalytics = () => {
  import('@vercel/analytics').then(({ inject }) => inject());
  import('@vercel/speed-insights').then(({ injectSpeedInsights }) => injectSpeedInsights());
};
export default defineNuxtPlugin(() => {
  if (import.meta.env.PROD) initVercelAnalytics();
});
