

export default () => {
  const date = new Date();
  const timeOfDay = date.getHours();

  if (timeOfDay < 12) {
    return "Good morning!"
  }

  if (timeOfDay >= 12 && timeOfDay <= 17) {
    return "Good afternoon!"
  }

  if (timeOfDay >= 17 && timeOfDay <= 24) {
    return "Good evening!"
  }
}