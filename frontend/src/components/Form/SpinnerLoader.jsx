export default function SpinnerLoader({
  size = 40,
  color = "#7c3aed"
}) {
  return (
    <span
      className="spinner"
      style={{
        width: size,
        height: size,
        borderTopColor: color
      }}
    />
  );
}