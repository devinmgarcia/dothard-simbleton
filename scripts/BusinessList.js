import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener(
        "keypress",
        keyPressEvent => {
            if (keyPressEvent.charCode === 13) {

                const enteredString = keyPressEvent.target.value.toLowerCase()

                const businesses = getBusinesses()

                const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(enteredString))

                companySearchResultArticle.innerHTML = Business(foundBusiness)
            }
        });

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const businesses = getBusinesses()
    contentTarget.innerHTML = "<h1> Active Businesses </h1>"

    businesses.forEach(business => contentTarget.innerHTML += Business(business))
}