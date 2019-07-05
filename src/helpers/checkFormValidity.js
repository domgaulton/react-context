export default form => {
  let fields = form.current.querySelectorAll(".input-field *[required]");
  for (var input of fields.values()) {
    if (!input.validity.valid) {
      return false;
    }
  }
  return true;
};
