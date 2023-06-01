import { useEffect } from "react";
import { useForm } from "~/hooks";
import { EditorProps } from "../../Template.types";
import { DESC_EDITOR_FORM_INIT } from "./DescEditor.constants";
import { DescEditorFrom } from "./DescEditor.types";

export const useDescEditor = ({
  id,
  defaultValue,
  onChange
}: EditorProps<DescEditorFrom>) => {
  const descForm = useForm({ ...DESC_EDITOR_FORM_INIT, ...defaultValue });

  useEffect(() => {
    onChange(id, descForm.data);
  }, [id, descForm.data, onChange]);

  return {
    descForm
  };
};
