// console.log("phone hunting");
const loadPhone = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json()
    console.log(data.data);

}
loadPhone()
