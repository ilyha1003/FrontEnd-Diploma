const elementCreation = (elementName, className, additionalClassName) => {
    const element = document.createElement(elementName);
    if(className) {
        element.classList.add(className);
    }
    if(additionalClassName) {
        element.classList.add(additionalClassName);
    }

    return element;
}

const listElementCreation = (el) => {
    const listElement = elementCreation('li', 'trips-list__item');

    const tripsPreview = elementCreation('div', 'recently-trips-preview', 'trip-preview-field');

    const previewImage = elementCreation('img', 'trip-preview-image');
    previewImage.src = el.previewImage;

    const price = elementCreation('div', 'recently-trips-preview-price');
    price.innerText = "From " + el.price;

    tripsPreview.append(previewImage, price);

    const tripsContent = elementCreation('div', 'recently-trips-list-item-wrapper');

    const tripHeader = elementCreation('span', 'recently-trips-list-item-header');
    tripHeader.innerText = el.title;

    const ratingField = elementCreation('div', 'recently-trips-rating-field');

    const ratingList = elementCreation('ul', 'recently-trips-rating-field-stars');

    for(let i = 0; i < 5; i++) {
        const ratingListElement = elementCreation('li');
        ratingListElement.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20.942 9.675-5.95-.865-2.661-5.393a.753.753 0 0 0-1.345 0L8.326 8.81l-5.951.865a.749.749 0 0 0-.415 1.28l4.305 4.197-1.017 5.928a.749.749 0 0 0 1.088.79l5.322-2.799 5.323 2.798a.749.749 0 0 0 1.088-.79l-1.018-5.927 4.306-4.197a.749.749 0 0 0 .218-.43.747.747 0 0 0-.633-.85Z" fill="#7483BD"></path></svg>`;
        ratingList.append(ratingListElement);
    }

    const ratingNumber = elementCreation('span', 'recently-trips-rating-field-number');
    ratingNumber.innerText = '5.0';

    ratingField.append(ratingList, ratingNumber);

    const descriptionField = elementCreation('div', 'recently-trips-description-field');

    const daysDescription = elementCreation('div', 'recently-trips-description');
    daysDescription.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path fill="#6C7072" d="M12 19a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm5 0a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm0-4a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm-5 0a1 1 0 0 0 .5556-.1685c.1644-.1099.2926-.2661.3683-.4488a.99982.99982 0 0 0 .0569-.5778.99946.99946 0 0 0-.2737-.512.99946.99946 0 0 0-.512-.2737.99982.99982 0 0 0-.5778.0569 1.00065 1.00065 0 0 0-.4488.3683 1.0001 1.0001 0 0 0 .1244 1.2627c.1875.1875.4419.2929.7071.2929Zm7-12h-1V2a.99997.99997 0 0 0-1.7071-.70711A1.00017 1.00017 0 0 0 16 2v1H8V2a1.00003 1.00003 0 0 0-1-1 1.00003 1.00003 0 0 0-1 1v1H5a3 3 0 0 0-3 3v14a3.00002 3.00002 0 0 0 3 3h14a3.00008 3.00008 0 0 0 3-3V6a3.00006 3.00006 0 0 0-3-3Zm1 17c0 .2652-.1054.5196-.2929.7071A1.0001 1.0001 0 0 1 19 21H5a.99997.99997 0 0 1-1-1v-9h16v9Zm0-11H4V6a1.00003 1.00003 0 0 1 1-1h1v1a1.00003 1.00003 0 0 0 1 1 1.00003 1.00003 0 0 0 1-1V5h8v1a.99997.99997 0 0 0 1.7071.70711A1.00017 1.00017 0 0 0 18 6V5h1a.99997.99997 0 0 1 1 1v3ZM7 15a.99983.99983 0 0 0 .92388-.6173 1.00008 1.00008 0 0 0 .05691-.5778.99973.99973 0 0 0-.27368-.512.99984.99984 0 0 0-.51202-.2737.99976.99976 0 0 0-.57777.0569 1.00036 1.00036 0 0 0-.44879.3683A1.00018 1.00018 0 0 0 6 14a.99997.99997 0 0 0 1 1Zm0 4a.99983.99983 0 0 0 .92388-.6173 1.00008 1.00008 0 0 0 .05691-.5778.99973.99973 0 0 0-.27368-.512.99984.99984 0 0 0-.51202-.2737.99976.99976 0 0 0-.57777.0569 1.00036 1.00036 0 0 0-.44879.3683A1.00018 1.00018 0 0 0 6 18a.99997.99997 0 0 0 1 1Z"></path>
        </svg>`;

    const daysDescriptionContent = elementCreation('span', 'recently-trips-description-content');
    daysDescriptionContent.innerText = el.days;
    daysDescription.append(daysDescriptionContent);

    const placesDescription = elementCreation('div', 'recently-trips-description');
    placesDescription.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path stroke="#6C7072" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0 7-9 13-9 13s-9-6-9-13c0-2.38695.94821-4.67613 2.63604-6.36396S9.61305 1 12 1c2.3869 0 4.6761.94821 6.364 2.63604C20.0518 5.32387 21 7.61305 21 10Z"></path>
        <path stroke="#6C7072" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13c1.6569 0 3-1.3431 3-3 0-1.65685-1.3431-3-3-3s-3 1.34315-3 3c0 1.6569 1.3431 3 3 3Z"></path>
        </svg>`;

    const placesDescriptionContent = elementCreation('span', 'recently-trips-description-content');
    placesDescriptionContent.innerText = el.places;
    placesDescription.append(placesDescriptionContent);

    const countriesDescription = elementCreation('div', 'recently-trips-description');
    countriesDescription.innerHTML = `<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM2 12h20" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

    const countriesDescriptionContent = elementCreation('span', 'recently-trips-description-content');
    countriesDescriptionContent.innerText = el.countries;
    countriesDescription.append(countriesDescriptionContent);

    descriptionField.append(daysDescription, placesDescription, countriesDescription);

    const tripDescription = elementCreation('span', 'recently-trips-content');
    tripDescription.innerText = el.previewDescription;

    tripsContent.append(tripHeader, ratingField, descriptionField, tripDescription);

    const tripDetails = elementCreation('a', 'hero-go-button', 'recently-trips-small-button');
    tripDetails.innerText = 'View details';

    listElement.append(tripsPreview, tripsContent, tripDetails);

    return listElement;
}

const errorField = () => {
    const noMatches = elementCreation('span', 'section-header', 'error-title');
    noMatches.innerText = 'No Matches Found';

    return noMatches;
}

export const errorImage = (visibilityStyle) => {
    const errorImage = document.querySelector('.error-image');
    errorImage.style.display = visibilityStyle;
}

const fillTripsList = (apiData, regionInputValue, countryInputValue) => {
    const tripsField = document.querySelector('.trips-wrapper');
    const tripsList = document.createElement('ul');
    tripsList.classList.add('trips__list');
    tripsList.classList.add('json-trips__list');

    // if(regionInputValue) {
    //     apiData.forEach((el) => {
    //         if(regionInputValue.toLowerCase() === el.region.toLowerCase()) {
    //             tripsField.innerHTML = '';
    //             tripsList.append(listElementCreation(el));
    //             tripsField.append(tripsList);
    //             errorImage('none');
    //         } else {
    //             if(!tripsList.children.length) {
    //                 tripsField.innerHTML = '';
    //                 tripsField.append(errorField());
    //                 errorImage('block');
    //             }
    //         }
    //     });
    //     return;
    // }

    // if(countryInputValue) {
    //     apiData.forEach((el) => {
    //         if(el.keyword.includes(countryInputValue.toLowerCase())) {
    //             tripsField.innerHTML = '';
    //             tripsList.append(listElementCreation(el));
    //             tripsField.append(tripsList);
    //             errorImage('none');
    //         } else {
    //             if(!tripsList.children.length) {
    //                 tripsField.innerHTML = '';
    //                 tripsField.append(errorField());
    //                 errorImage('block');
    //             }
    //         }
    //     });
    //     return;
    // } 

    if(regionInputValue || countryInputValue) {
        if(regionInputValue && !countryInputValue) {
            apiData.forEach((el) => {
                if(regionInputValue.toLowerCase() === el.region.toLowerCase()) {
                    tripsField.innerHTML = '';
                    tripsList.append(listElementCreation(el));
                    tripsField.append(tripsList);
                    errorImage('none');
                } else {
                    if(!tripsList.children.length) {
                        tripsField.innerHTML = '';
                        tripsField.append(errorField());
                        errorImage('block');
                    }
                }
            });
        } 

        if(countryInputValue && !regionInputValue) {
            apiData.forEach((el) => {
                if(el.keyword.includes(countryInputValue.toLowerCase())) {
                    tripsField.innerHTML = '';
                    tripsList.append(listElementCreation(el));
                    tripsField.append(tripsList);
                    errorImage('none');
                } else {
                    if(!tripsList.children.length) {
                        tripsField.innerHTML = '';
                        tripsField.append(errorField());
                        errorImage('block');
                    }
                }
            })
        }

        if(regionInputValue && countryInputValue) {
            apiData.forEach((el) => {
                if(regionInputValue.toLowerCase() === el.region.toLowerCase() && el.keyword.includes(countryInputValue.toLowerCase())) {
                    tripsField.innerHTML = '';
                    tripsList.append(listElementCreation(el));
                    tripsField.append(tripsList);
                    errorImage('none');
                } else {
                    if(!tripsList.children.length) {
                        tripsField.innerHTML = '';
                        tripsField.append(errorField());
                        errorImage('block');
                    }
                }
            })
        }
    } else {
        tripsField.innerHTML = '';
        apiData.forEach((el) => {
            tripsList.append(listElementCreation(el));
            errorImage('none');
        });
        tripsField.append(tripsList);
    }
}

export default fillTripsList;