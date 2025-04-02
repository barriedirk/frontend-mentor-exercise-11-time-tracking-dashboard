export const getValuesForCards = (data, property) => {
  const previousProperty = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };
  const cardList = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"];
  const cardClass = [
    "card--work",
    "card--play",
    "card--study",
    "card--exercise",
    "card--social",
    "card--self-care",
  ];

  return data.map((card) => {
    const { title, timeframes } = card;
    const { current, previous } = timeframes[property];
    const idx = cardList.findIndex((item) => item === title);
    const className = cardClass[idx];
    const obj = {
      className,
      title: title,
      current,
      previous,
      previousText: previousProperty[property],
    };

    return obj;
  });
};
