export default function GeneratePassword() {
  let lenght = 12,
    charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()_-+={[}]|:;<,>.?/",
    value = "";

  for (var i = 0, n = charset.length; i < lenght; i++) {
    value += charset.charAt(Math.floor(Math.random() * n));
  }

  return value;
}
