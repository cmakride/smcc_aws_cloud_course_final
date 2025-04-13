import { Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

export default function TextInputConnectedToForm<T extends FieldValues>({
  name,
  label,
}: {
  name: Path<T>;
  label: string;
}) {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message}
            label={label}
          />
        </FormControl>
      )}
    />
  );
}
