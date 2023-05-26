import { useDialog } from "@sun-river/components";
import { ChangeEvent, useCallback, useState } from "react";
import { IMAGE_EXTENSIONS } from "./ImageUpload.constants";
import { ImageUploadProps } from "./ImageUpload.types";

export const useImageUpload = ({ onChange }: ImageUploadProps) => {
  const { alert } = useDialog();

  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;

      const hasFiles = files && files[0];

      if (!hasFiles) {
        setSelectedImage(null);
        return;
      }

      if (!IMAGE_EXTENSIONS.includes(files[0].type)) {
        alert({ message: "이미지만 업로드 가능합니다." });
        return;
      }

      const fileUrl = URL.createObjectURL(files[0]);
      setSelectedImage(fileUrl);

      onChange && onChange(event);
    },
    [alert, onChange]
  );

  return {
    selectedImage,
    onChangeHandler
  };
};
