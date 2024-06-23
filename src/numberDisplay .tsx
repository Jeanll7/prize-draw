
interface NumberDisplayProps {
  value: string;
}

export function NumberDisplay({ value }: NumberDisplayProps) {
  return (
    <div className="py-4 bg-gray-300 mb-2 rounded-md shadow border border-gray-400">
      {value}
    </div>
  );
}
