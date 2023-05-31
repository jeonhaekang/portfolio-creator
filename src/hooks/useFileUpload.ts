import { useCallback } from "react";
import { uploadFile } from "~/state/server/file";

export const useFileUpload = () => {
  const upload = useCallback(async (obj: Record<string, any>) => {
    const entries = Object.entries(obj);

    const result = await entries.reduce(async (acc, [key, value]) => {
      const _acc = await acc;

      if (value instanceof File) {
        const downloadUrl = await uploadFile({ file: value, route: "images" });

        _acc[key] = downloadUrl;
      } else if (Array.isArray(value)) {
        _acc[key] = await Promise.all(value.map(item => upload(item)));
      } else if (typeof value === "object" && value !== null) {
        _acc[key] = await upload(value);
      } else {
        _acc[key] = value;
      }

      return _acc;
    }, Promise.resolve({} as typeof obj));

    return result;
  }, []);

  return { upload };
};
