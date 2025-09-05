import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

type MyDateTimePickerProps = {
  label?: string;
  value?: PickerValue;
  className?: string;
};
export function MyDateTimePicker({ label, value, className }: MyDateTimePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker label={label} value={value} className={className} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
