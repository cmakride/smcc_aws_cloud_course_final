import { Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

export default function NumberInputConnectedToForm<T extends FieldValues>({
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
            type="number"
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
