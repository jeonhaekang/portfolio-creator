import { useDialog } from "@sun-river/components";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IMAGE_EXTENSIONS } from "./ImageUpload.constants";
import { ImageUploadProps } from "./ImageUpload.types";

export const useImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const { alert } = useDialog();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const setSelectedImageToUrl = useCallback((file: string | File) => {
    let _file = file;

    if (_file instanceof File) {
      _file = URL.createObjectURL(_file);
    }

    setSelectedImage(_file);
  }, []);

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

      setSelectedImageToUrl(files[0]);

      onChange && onChange(event);
    },
    [alert, onChange, setSelectedImageToUrl]
  );

  useEffect(() => {
    value ? setSelectedImageToUrl(value) : setSelectedImage(null);
  }, [value, setSelectedImageToUrl]);

  return {
    selectedImage,
    onChangeHandler
  };
};
