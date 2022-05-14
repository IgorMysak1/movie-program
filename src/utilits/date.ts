export const createStringfDate = (date: Date) =>
  `${date?.getFullYear()}-${String(date?.getMonth() + 1).padStart(
    2,
    "0"
  )}-${date?.getDate()}`;
