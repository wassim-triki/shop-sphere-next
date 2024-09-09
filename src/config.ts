const config = {
  appName: "ShopSphere",
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  stripe: { key: process.env.NEXT_PUBLIC_STRIPE_KEY! },
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataSet: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};

export default config;
