import { elementCreation } from "./list";

const body = document.querySelector('body');
const popUpWrapper = document.querySelector('.popup-wrapper');
const popUpField = document.querySelector('.popup-field');
const button = document.querySelector('.button');

export const showTripDetails = (previewImage, previewDescription, title, oldprice, price, days, countries, accomodation, meals, groupSize, team, description, detailsImage, daysSchedule) => {
    popUpWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
    popUpWrapper.scrollTo(0, 0);

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

    const priceOld = elementCreation('span', 'trip-description-price', 'trip-description-price-old');
    priceOld.innerText = 'Price ' + oldprice;
    const priceNew = elementCreation('span', 'trip-description-price', );
    priceNew.innerText = 'Price ' + price;

    headerContent.append(headerTitle, ratingField, priceOld, priceNew);
    header.append(headerImage, headerContent);

    const tripDetailsSection = elementCreation('section', 'main-section', 'trip-details-section');
    const tripDetailsWrapper = elementCreation('div', 'trip-details-wrapper');
    const contentWrapper = elementCreation('div', 'content-wrapper');
    const tripDetailsContentTitle = elementCreation('span', 'trip-details-content-title');
    tripDetailsContentTitle.innerText = previewDescription;
    const tripDetailsList = elementCreation('ul', 'trip-details__list');

    const daysSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <path fill="#101010" d="M16 25.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm6.7 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm0-5.3a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7ZM16 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm9.3-16H24V2.7a1.3 1.3 0 0 0-2.7 0V4H10.7V2.7a1.3 1.3 0 1 0-2.7 0V4H6.7a4 4 0 0 0-4 4v18.7a4 4 0 0 0 4 4h18.6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm1.4 22.7a1.3 1.3 0 0 1-1.4 1.3H6.7a1.3 1.3 0 0 1-1.4-1.3v-12h21.4v12Zm0-14.7H5.3V8a1.3 1.3 0 0 1 1.4-1.3H8V8a1.3 1.3 0 0 0 2.7 0V6.7h10.6V8A1.3 1.3 0 0 0 24 8V6.7h1.3A1.3 1.3 0 0 1 26.7 8v4ZM9.3 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm0 5.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/>
    <path fill="#000" fill-opacity=".2" d="M16 25.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm6.7 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm0-5.3a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7ZM16 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm9.3-16H24V2.7a1.3 1.3 0 0 0-2.7 0V4H10.7V2.7a1.3 1.3 0 1 0-2.7 0V4H6.7a4 4 0 0 0-4 4v18.7a4 4 0 0 0 4 4h18.6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm1.4 22.7a1.3 1.3 0 0 1-1.4 1.3H6.7a1.3 1.3 0 0 1-1.4-1.3v-12h21.4v12Zm0-14.7H5.3V8a1.3 1.3 0 0 1 1.4-1.3H8V8a1.3 1.3 0 0 0 2.7 0V6.7h10.6V8A1.3 1.3 0 0 0 24 8V6.7h1.3A1.3 1.3 0 0 1 26.7 8v4ZM9.3 20a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7Zm0 5.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z"/>
    </svg>`;
    const accommodationSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path stroke="#101010" stroke-width="3" d="M9.2 16.7v13.8c0 1 0 1.4.3 1.7.3.3.7.3 1.7.3h17.6c1 0 1.4 0 1.7-.3.3-.3.3-.8.3-1.7V16.7"/>
    <path stroke="#000" stroke-opacity=".2" stroke-width="3" d="M9.2 16.7v13.8c0 1 0 1.4.3 1.7.3.3.7.3 1.7.3h17.6c1 0 1.4 0 1.7-.3.3-.3.3-.8.3-1.7V16.7"/>
    <path stroke="#101010" stroke-linecap="round" stroke-width="3" d="M34.2 19.2 20.6 9.6a1 1 0 0 0-1.2 0L5.8 19.2"/>
    <path stroke="#000" stroke-linecap="round" stroke-opacity=".2" stroke-width="3" d="M34.2 19.2 20.6 9.6a1 1 0 0 0-1.2 0L5.8 19.2"/>
    <path stroke="#101010" stroke-linejoin="round" stroke-width="3" d="M24.2 31.7v-8a2 2 0 0 0-2-2h-4.4a2 2 0 0 0-2 2v8"/>
    <path stroke="#000" stroke-linejoin="round" stroke-opacity=".2" stroke-width="3" d="M24.2 31.7v-8a2 2 0 0 0-2-2h-4.4a2 2 0 0 0-2 2v8"/>
    <path stroke="#101010" stroke-linecap="round" stroke-width="3" d="M29.2 15V9.2"/>
    <path stroke="#000" stroke-linecap="round" stroke-opacity=".2" stroke-width="3" d="M29.2 15V9.2"/>
    </svg>`;
    const mealsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <path fill="#000" d="M20.7 18.8a1.3 1.3 0 1 0-1.9 2l8.3 8.2a1.3 1.3 0 1 0 1.8-2l-8.2-8.2Zm1.6-3.3c1.1 0 2.1-.4 2.9-1.2l3.7-3.7a1.3 1.3 0 1 0-1.8-2l-3.8 3.9a1.3 1.3 0 0 1-1.9 0l4.7-4.8A1.3 1.3 0 1 0 24.2 6l-4.7 4.7a1.3 1.3 0 0 1 0-2L23.3 5A1.3 1.3 0 1 0 21.4 3l-3.8 3.8a4 4 0 0 0 0 5.7L16 14l-2-2a5.5 5.5 0 0 0-1-6.7c-2-2-7-4-9.3-1.7C1.3 6.1 3.5 11 5.3 13c1 1 2.5 1.6 4 1.7h.1c1 0 1.8-.3 2.6-.8l2 2.1L3 27a1.3 1.3 0 1 0 2 2l12-12 2.5-2.6a4 4 0 0 0 2.8 1.1Zm-11-4.2a2.6 2.6 0 0 1-2 .7 3 3 0 0 1-2-1C5.8 9.7 4.8 6.5 5.6 5.7c.2-.2.6-.3.9-.3 1.7.2 3.3.9 4.6 2a2.8 2.8 0 0 1 .1 4Z"/>
    </svg>`;
    const transportSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <path fill="#000" d="M11.3 22.7a1.3 1.3 0 0 0 1.4-1.4v-.2l-.1-.3-.1-.2-.2-.2-.4-.3-.8-.1h-.3l-.2.2-.2.2-.2.2v.2l-.2.2v.3a1.3 1.3 0 0 0 1.4 1.3Zm10.7 0a1.3 1.3 0 0 0 1.3-1.4v-.5l-.2-.2-.1-.2-.5-.3h-1l-.4.3-.2.2-.1.2v.5a1.3 1.3 0 0 0 1.2 1.4Zm-4-16h-2.7a1.3 1.3 0 1 0 0 2.6H18a1.3 1.3 0 0 0 0-2.6Zm6.7-4h-16a4 4 0 0 0-4 4v16a4 4 0 0 0 2.6 3.7V28a1.3 1.3 0 1 0 2.7 0v-1.3h13.3V28a1.3 1.3 0 0 0 2.7 0v-1.6a4 4 0 0 0 2.7-3.7v-16a4 4 0 0 0-4-4Zm1.3 20a1.3 1.3 0 0 1-1.3 1.3h-16a1.3 1.3 0 0 1-1.4-1.3v-4H26v4Zm0-6.7H7.3V6.7a1.3 1.3 0 0 1 1.4-1.4h16A1.3 1.3 0 0 1 26 6.7V16Z"/>
    </svg>`;
    const groupSizeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="none">
    <path stroke="#222" stroke-linecap="round" stroke-width="2" d="M19.4 6.5c0 2.6-1.9 4.5-4 4.5-2 0-4-2-4-4.5 0-2.6 2-4.5 4-4.5 2.1 0 4 2 4 4.5Z"/>
    <path stroke="#222" stroke-width="2" d="M18 3.8c.3-.6.9-1.1 1.6-1.4a4.5 4.5 0 0 1 4.5.5c.6.5 1 1 1.2 1.7a3 3 0 0 1 0 2A4.3 4.3 0 0 1 21.7 9c-1 0-1.7-.1-2.4-.5M11 3.7c-.3-.6-.8-1-1.3-1.4-.5-.3-1-.4-1.6-.3-.6.1-1.2.4-1.6.8-.5.5-.8 1-1 1.8a4 4 0 0 0 .1 2c.2.7.6 1.3 1 1.7.5.4 1 .7 1.6.7.6 0 1.2-.1 1.7-.4"/>
    <path stroke="#222" stroke-linecap="round" stroke-width="2" d="M15 13c7.7 0 9.1 7.3 9.4 10 0 .6-.4 1-1 1h-17a1 1 0 0 1-1-1c.4-2.7 1.8-10 9.5-10Z"/>
    <path fill="#222" d="m28 20-1 .2 1-.2Zm-11.1-5.7-.7-.7-1.3 1.4 1.8.3.2-1Zm7.2 6.8-1 .3.2.7h.8v-1Zm-3-7.7c2 0 3.3 1 4.2 2.5a13 13 0 0 1 1.7 4.3l2-.4a15 15 0 0 0-2-5 6.8 6.8 0 0 0-5.9-3.4v2Zm-3.5 1.5c.9-.9 2-1.5 3.5-1.5v-2c-2.1 0-3.8 1-5 2.2l1.5 1.3Zm-.9.4c4 .6 5.7 3.6 6.4 6.1l2-.5c-.9-3-3-6.8-8-7.6l-.4 2ZM27 20h-3v2h3v-2Zm0 .1v2a2 2 0 0 0 2-2.4l-2 .4Z"/>
    <path fill="#222" d="m13 14.3.2 1 1.9-.3-1.3-1.4-.7.7ZM2 20l-1-.2 1 .2Zm4 1.1v1h.7l.2-.7-1-.3Zm2.9-7.7c1.5 0 2.6.6 3.4 1.5l1.5-1.3a6.5 6.5 0 0 0-5-2.2v2ZM3 20.2A13 13 0 0 1 4.7 16c.9-1.5 2.2-2.5 4.2-2.5v-2a6.8 6.8 0 0 0-6 3.4 15 15 0 0 0-1.9 5l2 .4Zm0 0-2-.4a2 2 0 0 0 2 2.3v-2Zm3 0H3v2h3v-2Zm.9 1.2c.7-2.5 2.4-5.5 6.3-6.1l-.3-2C8 14 5.8 18 5 20.9l2 .5Z"/>
    </svg>`;
    const teamSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <path fill="#000" d="M16.4 16.3a6.6 6.6 0 0 0 .3-9.7A6.7 6.7 0 0 0 6 14.1c.4.8 1 1.6 1.7 2.2A10.7 10.7 0 0 0 1.3 26 1.3 1.3 0 1 0 4 26a8 8 0 0 1 16 0 1.3 1.3 0 1 0 2.7 0 10.7 10.7 0 0 0-6.3-9.7Zm-4.4-1a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm13 .5a6.7 6.7 0 0 0-5-11.1 1.3 1.3 0 0 0 0 2.6 4 4 0 0 1 2 7.5 1.3 1.3 0 0 0 0 2.3l.5.3h.1A9.3 9.3 0 0 1 28 26a1.3 1.3 0 1 0 2.6 0A12 12 0 0 0 25 15.8Z"/>
    </svg>`;

    tripDetailsList.append(
        descriptionListElementCreation(daysSvg, 'Days', days, countries),
        descriptionListElementCreation(accommodationSvg, 'Accommodation', accomodation),
        descriptionListElementCreation(mealsSvg, 'Meals', meals),
        descriptionListElementCreation(transportSvg, 'Transport', 'Bus'),
        descriptionListElementCreation(groupSizeSvg, 'Group size', groupSize),
        descriptionListElementCreation(teamSvg, 'Team', team)
    );

    const tripDetailsImageField = elementCreation('div', 'trip-details-image-field');
    const tripDetailsImage = elementCreation('img');
    tripDetailsImage.src = detailsImage;
    tripDetailsImageField.append(tripDetailsImage);

    const tripDetailsMainDescription = elementCreation('span', 'trip-details-main-description');
    tripDetailsMainDescription.innerText = description;

    contentWrapper.append(tripDetailsContentTitle, tripDetailsList, tripDetailsMainDescription)
    tripDetailsWrapper.append(contentWrapper, tripDetailsImageField);
    tripDetailsSection.append(tripDetailsWrapper);

    const tripScheduleSection = elementCreation('section', 'trip-schedule-section');
    const tripScheduleWrapper = elementCreation('div', 'trip-schedule-wrapper');
    const tripScheduleList = elementCreation('ul', 'trip-schedule__list');
    
    daysSchedule.forEach((el) => {
        tripScheduleList.append(daysScheduleListElementCreation(el));
    });

    tripScheduleWrapper.append(tripScheduleList);
    tripScheduleSection.append(tripScheduleWrapper);

    const confidenceSection = elementCreation('section', 'confidence-section');
    const confidenceWrapper = elementCreation('div', 'confidence-wrapper');
    const confidenceHeader = elementCreation('span', 'confidence-header');
    confidenceHeader.innerText = `Book with confidence`;
    const confidenceDescription = elementCreation('span', 'confidence-description');
    confidenceDescription.innerText = `Our thoughtful team of knowledgeable experts are here to take care of every need, from the second you contact us to when you return`;
    const confidenceList = elementCreation('ul', 'confidence__list');

    const depositSvgBlack = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="none">
    <circle cx="62.5" cy="62.5" r="62.5" fill="#101010"/>
    <circle cx="62.5" cy="62.5" r="62.5" fill="#000" fill-opacity=".2"/>
    <path fill="#BCFD49" d="M80.7 49.7H78V47a8 8 0 0 0-8-8H43.3a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h37.4a8 8 0 0 0 8-8V57.7a8 8 0 0 0-8-8Zm-37.4-5.4H70a2.7 2.7 0 0 1 2.7 2.7v2.7H43.3a2.7 2.7 0 0 1 0-5.4Zm40 26.7h-2.6a2.7 2.7 0 0 1 0-5.3h2.6V71Zm0-10.7h-2.6a8 8 0 0 0 0 16h2.6V79a2.7 2.7 0 0 1-2.6 2.7H43.3a2.7 2.7 0 0 1-2.6-2.7V54.5a8 8 0 0 0 2.6.5h37.4a2.7 2.7 0 0 1 2.6 2.7v2.6Z"/>
    </svg>`;
    const transportationSvgBlack = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="none">
    <circle cx="62.5" cy="62.5" r="62.5" fill="#101010"/>
    <circle cx="62.5" cy="62.5" r="62.5" fill="#000" fill-opacity=".2"/>
    <path fill="#BCFD49" d="M80.3 35.3h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 5.4 7.6V86a2.7 2.7 0 1 0 5.3 0v-2.7h26.7V86a2.7 2.7 0 1 0 5.3 0v-3.1a8 8 0 0 0 5.3-7.6v-32a8 8 0 0 0-8-8Zm-34.6 16h16V62h-16V51.3Zm37.3 24a2.7 2.7 0 0 1-2.7 2.7h-32a2.7 2.7 0 0 1-2.6-2.7v-8H83v8ZM83 62H67V51.3h16V62Zm0-16H45.7v-2.7a2.7 2.7 0 0 1 2.6-2.6h32a2.7 2.7 0 0 1 2.7 2.6V46Zm-9 29.1c.3.2.7.2 1 .2a2.7 2.7 0 0 0 2.7-2.6V72l-.2-.4a2 2 0 0 0-.2-.5l-.4-.4-.4-.3a2 2 0 0 0-.4-.3l-.6-.2a2.7 2.7 0 0 0-2.7 1.1 2 2 0 0 0-.3.5l-.1.5v.5c0 .7.3 1.4.8 1.9.2.2.5.5.8.6Zm-21.3 0c.3.2.6.2 1 .2a2.7 2.7 0 0 0 2.6-2.6V72l-.1-.4a2 2 0 0 0-.3-.5c0-.2-.2-.3-.3-.4l-.4-.3-.5-.3-.5-.2a2.7 2.7 0 0 0-2.7 1.1 2 2 0 0 0-.3.5l-.1.5v.5c0 .7.2 1.4.7 1.9.3.2.5.5.9.6Z"/>
    </svg>`;
    const accommodationSvgBlack = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="none">
    <circle cx="62.5" cy="62.5" r="62.5" fill="#101010"/>
    <circle cx="62.5" cy="62.5" r="62.5" fill="#000" fill-opacity=".2"/>
    <path fill="#BCFD49" d="M68.3 52.3H71a2.7 2.7 0 0 0 0-5.3h-2.7a2.7 2.7 0 1 0 0 5.3Zm0 10.7H71a2.7 2.7 0 0 0 0-5.3h-2.7a2.7 2.7 0 0 0 0 5.3ZM55 52.3h2.7a2.7 2.7 0 0 0 0-5.3H55a2.7 2.7 0 1 0 0 5.3ZM55 63h2.7a2.7 2.7 0 0 0 0-5.3H55a2.7 2.7 0 0 0 0 5.3Zm32 21.3h-2.7V39a2.7 2.7 0 0 0-2.6-2.7H44.3a2.7 2.7 0 0 0-2.6 2.7v45.3H39a2.7 2.7 0 1 0 0 5.4h48a2.7 2.7 0 1 0 0-5.4Zm-21.3 0h-5.4V73.7h5.4v10.6Zm13.3 0h-8V71a2.7 2.7 0 0 0-2.7-2.7H57.7A2.7 2.7 0 0 0 55 71v13.3h-8V41.7h32v42.6Z"/>
    </svg>`;
    const planningSvgBlack = `<svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" fill="none">
    <circle cx="62.5" cy="62.5" r="62.5" fill="#101010"/>
    <circle cx="62.5" cy="62.5" r="62.5" fill="#000" fill-opacity=".2"/>
    <path stroke="#BCFD49" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M79 80.7V78c0-5.9-4.8-10.7-10.7-10.7H57.7c-6 0-10.7 4.8-10.7 10.7v2.7m45.3 0V78c0-5.9-4.7-10.7-10.6-10.7h-1.4M33.7 80.7V78c0-5.9 4.7-10.7 10.6-10.7h1.4m30.6-8a8 8 0 1 0 0-16m-26.6 16a8 8 0 0 1 0-16m21.3 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/>
    </svg>`;

    confidenceList.append(
        confidenceListElementCreation(depositSvgBlack, 'Only $100 deposit to book', 'Reserve your space now with a deposit, pay the rest 45 days before departure'),
        confidenceListElementCreation(transportationSvgBlack, 'Transportation', 'Whether you are travelling through Air, Sea or Land, We can arrange transportation according to'),
        confidenceListElementCreation(accommodationSvgBlack, 'Accommodation', 'No matter where you are travelling, We are here to help you get the best deals in Hotels around the world'),
        confidenceListElementCreation(planningSvgBlack, 'Expert Trip Planning', 'Our Talented and Expert Trip Planning Team can make itinerary that suits our clients the best. We will make your travel')
    );

    confidenceWrapper.append(confidenceHeader, confidenceDescription, confidenceList);
    confidenceSection.append(confidenceWrapper);

    popUpField.append(header, tripDetailsSection, tripScheduleSection, confidenceSection);
}

const confidenceListElementCreation = (svg, title, description) => {
    const listElement = elementCreation('li', 'confidence-list-element');
    const listElementSvg = elementCreation('div', 'confidence-list-element-svg');
    listElementSvg.innerHTML = svg;
    const listElementTitle = elementCreation('span', 'confidence-list-element-header');
    listElementTitle.innerText = title;
    const listElementDescription = elementCreation('span', 'confidence-list-element-description');
    listElementDescription.innerText = description;
    listElement.append(listElementSvg, listElementTitle, listElementDescription);

    return listElement;
}

const descriptionListElementCreation = (svg, title, firstConstant, secondConstant) => {
    const listElement = elementCreation('li', 'trip-details-list-element');
    const listElementHeader = elementCreation('div', 'trip-details-list-element-header');
    listElementHeader.innerHTML = svg;
    const listElementTitle = elementCreation('span', 'trip-details-list-element-title');
    listElementTitle.innerText = title;
    const listElementDescription = elementCreation('span', 'trip-details-list-element-description');
    listElementDescription.innerText = firstConstant + (secondConstant ? ', ' + secondConstant : '');
    listElementHeader.append(listElementTitle);
    listElement.append(listElementHeader, listElementDescription);

    return listElement;
}

const daysScheduleListElementCreation = (el) => {
    const listElement = elementCreation('li', 'trip-schedule-list-element');
    const headerWrapper = elementCreation('div', 'trip-schedule-header-wrapper');
    const day = elementCreation('div', 'day-order');
    day.innerText = el.dayOrder;
    const listElementTitle = elementCreation('span', 'trip-schedule-list-element-title');
    listElementTitle.innerText = el.dayTitle;
    const arrowField = elementCreation('div', 'arrow-field');
    arrowField.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="none">
    <path fill="#000" d="M13.5 2a1.5 1.5 0 0 0-3 0h3Zm-2.6 25c.6.6 1.6.6 2.2 0l9.5-9.5a1.5 1.5 0 1 0-2.1-2.1L12 23.9l-8.5-8.5a1.5 1.5 0 1 0-2.1 2.1l9.5 9.6Zm-.4-25v24h3V2h-3Z"/>
    </svg>`;
    headerWrapper.append(day, listElementTitle, arrowField);
    const dayDescription = elementCreation('span', 'trip-schedule-list-element-description');
    dayDescription.innerText = el.dayDescription;
    listElement.append(headerWrapper, dayDescription);

    let counter = 0;
    headerWrapper.addEventListener('click', () => {
        if(counter === 0) {
            dayDescription.classList.add('active');
            arrowField.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="none">
            <path fill="#000" d="M10.5 26a1.5 1.5 0 0 0 3 0h-3Zm2.6-25c-.6-.6-1.6-.6-2.2 0l-9.5 9.5a1.5 1.5 0 1 0 2.1 2.1L12 4.1l8.5 8.5a1.5 1.5 0 1 0 2.1-2.1L13.1.9Zm.4 25V2h-3v24h3Z"/>
            </svg>`;
            counter = 1;
        } else {
            dayDescription.classList.remove('active');
            arrowField.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="none">
            <path fill="#000" d="M13.5 2a1.5 1.5 0 0 0-3 0h3Zm-2.6 25c.6.6 1.6.6 2.2 0l9.5-9.5a1.5 1.5 0 1 0-2.1-2.1L12 23.9l-8.5-8.5a1.5 1.5 0 1 0-2.1 2.1l9.5 9.6Zm-.4-25v24h3V2h-3Z"/>
            </svg>`;
            counter = 0;
        }
    })

    return listElement;
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
});