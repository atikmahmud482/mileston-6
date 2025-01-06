// console.log("phone hunting");
const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json()
    // console.log(data.data);
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones => {
    // console.log(phones)
    // 1. Get the elementId.
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    //display show all button of there are more than 12 phone
    const showAllButton = document.getElementById('show-all-container')
    if (phones.length > 12) {
        showAllButton.classList.remove('hidden')
    }
    else {
        showAllButton.classList.add('hidden')
    }

    //display only 12 phones
    phones = phones.slice(0, 12)

    phones.forEach(phone => {
        console.log(phone);

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
                <h2 class="card-title">${phone.phone_name
            }</h2>
                <p>${phone.slug}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        // 4. Append Child
        phoneContainer.appendChild(phoneCard)

    })
}


//handel search button
const handelSearch = () => {
    // console.log('dfjjf')
    const searchFiend = document.getElementById('search-field');
    const searchText = searchFiend.value;
    // console.log(searchText);
    loadPhone(searchText)


}

const handelSearch2 = () => {
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadPhone(searchText)
}

// loadPhone()
