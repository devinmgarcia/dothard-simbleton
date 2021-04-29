import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"


const contentTarget = document.querySelector(".businessList--newYork")

export const NewYorkList = () => {
    const businesses = getBusinesses()
    const NewYorkBusinesses = businesses.filter(business => business.addressStateCode === "NY")
    contentTarget.innerHTML = "<h1> New York Businesses </h1>"

    NewYorkBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
}