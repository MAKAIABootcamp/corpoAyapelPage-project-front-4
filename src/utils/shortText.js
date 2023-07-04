export const truncateText = (text, maxLength) => {
  return text.length <= maxLength ? text : text.substring(0, maxLength) + "...";
};
