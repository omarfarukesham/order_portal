export default function getFormattedDate(dateString, withTime, options = {}) {
  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };
  if (withTime) {
    dateOptions.hour = 'numeric';
    dateOptions.minute = 'numeric';
    dateOptions.second = 'numeric';
  }
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', dateOptions);
}
