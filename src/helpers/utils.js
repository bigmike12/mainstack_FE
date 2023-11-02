export const formatDate = (inputDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateParts = inputDate.split(",");
  if (dateParts.length === 3) {
    const day = parseInt(dateParts[0], 10);
    const monthIndex = parseInt(dateParts[1], 10) - 1; // Month index starts from 0
    const year = parseInt(dateParts[2], 10);

    if (!isNaN(day) && !isNaN(monthIndex) && !isNaN(year)) {
      const monthName = months[monthIndex];
      return `${day} ${monthName} ${year}`;
    }
  }

  // Return the original date if the input format is invalid
  return inputDate;
};

/**
 * Ensure that a given string matches the character count and ellipsized at that point
 * @param {String} text Target text
 * @param {Number} numChars Number of characters needed
 * @returns {String} Truncated text
 */
export const truncateMultilineText = (text, numChars) => {
    if (!text) return "";

    // Because '...' will be appended to long strings,
    // this ensures that the entire character count is as specified
    const maxStringLength = numChars - 3;

    return maxStringLength > text.length
        ? text
        : `${text.trim().substring(0, maxStringLength)}...`;
};