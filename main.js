import { getData } from "./data.service.js";
import { getValuesForCards } from "./generate-cards.js";

const $ = (selector) => document.querySelector(selector);

const $spinnerWrapper = $(".spinner-wrapper");
const $btnDaily = $(".report__nav--daily");
const $btnWeekly = $(".report__nav--weekly");
const $btnMonthly = $(".report__nav--monthly");
const listButtons = [$btnDaily, $btnWeekly, $btnMonthly];

(async () => {
  const data = await getData();

  const buttonClick = (evt) => {
    evt.preventDefault();

    const property = evt.target.dataset.property;
    const values = getValuesForCards(data, property);
    listButtons.forEach((btn) => btn.classList.remove("color-white"));

    values.forEach(({ className, current, previous, previousText }) => {
      const $cardWrapper = $(`.${className}`);

      $cardWrapper.querySelector(".card__time").textContent = `${current}hrs`;
      $cardWrapper.querySelector(
        ".card__previous"
      ).textContent = `${previousText} - ${previous}hrs`;
    });

    evt.target.classList.add("color-white");
  };

  $btnDaily.addEventListener("click", buttonClick);
  $btnWeekly.addEventListener("click", buttonClick);
  $btnMonthly.addEventListener("click", buttonClick);

  $btnDaily.click();

  $spinnerWrapper.classList.add("hidden");
})();
