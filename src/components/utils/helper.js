export const getUserInfoList = (userList) => {
  if (!userList) return;
  const requiredList = userList.map((user, index) => ({
    index: index + 1,
    name: getName(user.name),
    location: user.location && user.location.country,
    email: user.email,
    dob: user.dob.date,
  }));
  return requiredList;
};

export const getName = (name) => {
  if (!name) return;
  const requiredName = `${name.title || ""} ${name.first || ""} ${
    name.last || ""
  }`;
  return requiredName;
};

export const getDate = (date) => {
  if (!date) return;
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}/${formattedDate.getMonth()}/${formattedDate.getDate()}`;
};
