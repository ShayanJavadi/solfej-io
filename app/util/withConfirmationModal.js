export default async (
  onConfirm,
  title = "Confirm",
  message = "Are you sure you'd like to press the red button?"
) => {
  const value = window.confirm(`${title}\n\n${message}`);

  if (value === true) {
    onConfirm();
  }
};
