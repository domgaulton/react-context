export default event => {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;
  const keyObject = {
    name,
    value
  };

  return keyObject;
};
