import { useEffect } from "react";
import { useForm } from "~/hooks";
import { EditorProps, MainEditorFrom } from "../..";
import { MAIN_EDITOR_FORM_INIT } from "./MainEditor.constants";

export const useMainEditor = ({
  id,
  defaultValue,
  onChange
}: EditorProps<MainEditorFrom>) => {
  const mainForm = useForm({ ...MAIN_EDITOR_FORM_INIT, ...defaultValue });

  useEffect(() => {
    onChange(id, mainForm.data);
  }, [id, mainForm.data, onChange]);

  return {
    mainForm
  };
};
