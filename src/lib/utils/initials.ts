export const getInitials = (name) => {
  const words = name.split(' ');
  if (words.length > 1) {
    return `${words[0].charAt(0)}${words[words.length - 1].charAt(0)}`;
  } else {
    return words[0].charAt(0);
  }
};
