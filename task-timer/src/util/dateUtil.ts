export const formatDate = (date: Date | string) => {
    if (date instanceof Date) {
      return date.toISOString().slice(0, 16);;
    }
    return date;
  };
  