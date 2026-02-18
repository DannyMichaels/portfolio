// export const getSortedProjects = (projects) => {
//   const sortedProjects = projects.sort((recordA, recordB) => {
//     const date1 = new Date(recordA.createdTime).getTime();
//     const date2 = new Date(recordB.createdTime).getTime();

//     if (date1 < date2) {
//       return -1;
//     } else if (date1 > date2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   return sortedProjects;
// };

const getDateFromString = (dateStr) => {
  if (!dateStr) {
    throw new Error('Date string is undefined or empty');
  }

  const cleanedDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  return new Date(cleanedDateStr);
};

export const getSortedProjects = (projects) => {
  const sortedProjects = projects.sort((recordA, recordB) => {
    const date1 = getDateFromString(recordA.fields.date).getTime();
    const date2 = getDateFromString(recordB.fields.date).getTime();

    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedProjects;
};
