import config from "~/config";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-09-04";

export const dataset = assertValue(
  config.sanity.dataSet,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  config.sanity.projectId,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
