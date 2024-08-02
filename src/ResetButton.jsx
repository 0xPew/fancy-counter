import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  return (
    <button className="reset-btn">
      <ResetIcon
        onClick={() => {
          setCount(0);
        }}
        className="reset-btn-icon"
      />
    </button>
  );
}
