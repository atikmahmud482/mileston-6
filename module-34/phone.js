// console.log("phone hunting");
const loadPhone = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json()
    // console.log(data.data);
    const phones = data.data;
    displayPhones(phones)

}
const displayPhones = phones => {
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone);
        // 1. Get the elementId.
        const phoneContainer = document.getElementById('phone-container');
        // 2. Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`
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


loadPhone()
