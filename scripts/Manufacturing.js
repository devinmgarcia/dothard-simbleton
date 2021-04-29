import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"


const contentTarget = document.querySelector(".businessList--manufacturing")

export const ManufacturingList = () => {
    const businesses = getBusinesses()
    const ManufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")
    contentTarget.innerHTML = "<h1> Manufacturing Businesses </h1>"

    ManufacturingBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
}