import { Agents } from "./Agents.js"
import { getBusinesses } from "./database.js"

const agentSearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener(
        "keypress",
        keyPressEvent => {
            if (keyPressEvent.charCode === 13) {

                const enteredString = keyPressEvent.target.value.toLowerCase()

                const businesses = getBusinesses()

                const foundAgentBusiness = businesses.find(business =>
                    business.purchasingAgent.nameLast.toLowerCase().includes(enteredString) ||
                    business.purchasingAgent.nameFirst.toLowerCase().includes(enteredString) ||
                    (business.purchasingAgent.nameFirst + ' ' + business.purchasingAgent.nameLast).toLocaleLowerCase().includes(enteredString))

                const foundAgent = (foundAgentsList(foundAgentBusiness))

                const agentInfo = Agents(foundAgent)

                agentSearchResultArticle.innerHTML = agentInfo

            }
        });

export const foundAgentsList = (agentsBusiness) => {
    return {
        fullName: `${agentsBusiness.purchasingAgent.nameFirst} ${agentsBusiness.purchasingAgent.nameLast}`,
        company: agentsBusiness.companyName,
        phoneNumber: agentsBusiness.phoneWork
    }


}