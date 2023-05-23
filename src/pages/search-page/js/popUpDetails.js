import { elementCreation } from "./list";


const body = document.querySelector('body');
const popUpWrapper = document.querySelector('.popup-wrapper');
const popUpField = document.querySelector('.popup-field');
const button = document.querySelector('.button');

export const showTripDetails = (previewImage, title, oldprice, price, days, accomodation, meals, groupSize, team, description, daysSchedule) => {
    popUpWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';

    const header = elementCreation('div', 'trip-description-header-field');
    const headerImage = elementCreation('img', 'trip-description-header-image');
    headerImage.src = previewImage;
    const headerContent = elementCreation('div', 'trip-description-header-content');
    const headerTitle = elementCreation('span', 'trip-description-header');
    headerTitle.innerText = title;
    const ratingField = elementCreation('div', 'recently-trips-rating-field');
    const ratingList = elementCreation('ul', 'recently-trips-rating-field-stars');
    for(let i = 0; i < 5; i++) {
        const ratingListElement = elementCreation('li');
        ratingListElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" fill="none">
        <path fill="#7483BD" d="m28.5402 10.1094-8.6783-1.26124L15.9825.98341a1.08704 1.08704 0 0 0-.4956-.4956c-.54-.2666-1.1963-.04444-1.4663.4956l-3.8794 7.86475-8.67819 1.26124c-.23926.0342-.45801.147-.62549.3179a1.09529 1.09529 0 0 0-.3102.7784 1.0955 1.0955 0 0 0 .3307.7699l6.27882 6.1216-1.4834 8.644a1.09211 1.09211 0 0 0 .43431 1.0698c.16512.1199.36053.1911.56408.2057a1.09202 1.09202 0 0 0 .58755-.1236l7.76222-4.0811 7.7622 4.0811c.2119.1128.458.1504.6938.1094.5948-.1026.9947-.6665.8921-1.2613l-1.4834-8.644 6.2788-6.1216c.1709-.1675.2837-.3862.3179-.6255.0923-.5981-.3247-1.1518-.9228-1.2407Z"/>
        </svg>`;
        ratingList.append(ratingListElement);
    };
    const ratingNumber = elementCreation('span', 'recently-trips-rating-field-number', 'trip-description-rating-number');
    ratingNumber.innerText = '5.0';
    ratingField.append(ratingList, ratingNumber);

    const priceOld = elementCreation('span', 'trip-descroption-price', 'trip-description-price-old');
    priceOld.innerText = 'Price ' + oldprice;
    const priceNew = elementCreation('span', 'trip-descroption-price', );
    priceNew.innerText = 'Price ' + price;

    headerContent.append(headerTitle, ratingField, priceOld, priceNew);
    header.append(headerImage, headerContent);
    popUpField.append(header);
}

const hideTripDetails = () => {
    popUpWrapper.style.display = 'none';
    popUpField.innerHTML = '';
    body.style.overflow = '';
}

button.addEventListener('click', hideTripDetails);

popUpWrapper.addEventListener('click', (e) => {
    if(e.target === popUpWrapper) {
        hideTripDetails();
    }
})

