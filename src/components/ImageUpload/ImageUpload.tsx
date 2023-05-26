import { FlexCenter, Typography } from "@sun-river/components";
import { forwardRef } from "react";
import { IMAGE_EXTENSIONS } from "./ImageUpload.constants";
import { useImageUpload } from "./ImageUpload.hooks";
import * as Styled from "./ImageUpload.styles";
import { ImageUploadProps } from "./ImageUpload.types";

export const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ width, height, ...props }, ref) => {
    const app = useImageUpload(props);

    return (
      <Styled.Label width={width} height={height}>
        <Styled.Input
          ref={ref}
          {...props}
          type="file"
          accept={IMAGE_EXTENSIONS.join(",")}
          onChange={app.onChangeHandler}
        />

        {app.selectedImage ? (
          <Styled.PreviewImage src={app.selectedImage} alt="선택된 이미지" />
        ) : (
          <FlexCenter direction="column">
            <Styled.CloudIcon />

            <Typography color="white">이미지를 업로드 해주세요</Typography>
          </FlexCenter>
        )}
      </Styled.Label>
    );
  }
);
