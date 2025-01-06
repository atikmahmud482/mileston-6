// console.log("phone hunting");
const loadPhone = async (searchText = '13', isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json()
    // console.log(data.data);
    const phones = data.data;
    displayPhones(phones, isShowAll);
}
const displayPhones = (phones, isShowAll) => {
    // console.log(phones)
    // 1. Get the elementId.
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    //display show all button of there are more than 12 phone
    const showAllButton = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllButton.classList.remove('hidden')
    }
    else {
        showAllButton.classList.add('hidden')
    }

    //display only 12 phones if not show all
    if (!isShowAll) {
        phones = phones.slice(0, 12)
    }

    phones.forEach(phone => {
        // console.log(phone);

        // 2. Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`
        // 3. Set inner HTML
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
                <img src="${phone.image}"
                    class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-black">${phone.phone_name
            }</h2>
                <p class="text-black">Brand New Edition</p>
                <div class="card-actions">
                    <button onclick="handleShowClick('${phone.slug}')" class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `
        // 4. Append Child
        phoneContainer.appendChild(phoneCard)

    })
    toggleLoadingSpinner(false)
}

const handleShowClick = async (id) => {
    //      load data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
    console.log(phone);
    const phoneName = document.getElementById('phone-name')
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container')
    showDetailContainer.innerHTML = ` 
    <img src="${phone.image}" alt=""/>
    <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
    <p><span>GPS:</span>${phone?.others?.GPS
        }</p>
    <p><span>Display Size:</span>${phone?.mainFeatures?.displaySize}</p>
    <p><span>Chipset:</span>${phone?.mainFeatures
            ?.chipSet}</p>
    <p><span></span></p>
    
    
    `

    show_details_modal.showModal()
}

//handel search button
const handelSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchFiend = document.getElementById('search-field');
    const searchText = searchFiend.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll)


}
//handle search recap
// const handelSearch2 = () => {
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText)
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-dot')
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden')
    }
}

const handleShowAll = () => {
    handelSearch(true)
}

loadPhone()
