export const formatDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 16);
  }
  return date;
};
export const formatDateForInput = (date: Date | string): string => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
export const formatDateForDisplay = (date: Date | string): [string, string] => {
  const d = new Date(date);
  const formattedDate = `${d.toLocaleString("en-US", {
    month: "short",
  })}.${d.getDate()}.${d.getFullYear()}`;
  const formattedTime = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return [formattedDate, formattedTime];
};
export const formatDateForDisplayWithTime = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const calculateDuration = (
  startDate: Date | string,
  endDate: Date | string
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Invalid date(s)";
  }

  const diffMs = end.getTime() - start.getTime(); // Difference in milliseconds
  if (diffMs < 0) {
    return "End date is before start date";
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  const parts = [];
  if (diffDays > 0) parts.push(`${diffDays} day${diffDays > 1 ? "s" : ""}`);
  if (diffHours > 0) parts.push(`${diffHours} hour${diffHours > 1 ? "s" : ""}`);
  if (diffMinutes > 0)
    parts.push(`${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`);

  return parts.join(", ") || "0 minutes";
};
