import { Agents } from "./Agents.js"
import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"
import { foundAgentsList } from "./FoundAgentsList.js"

const businesses = getBusinesses()

const contentTarget = document.querySelector(".agents")

export const AgentsList = () => {
    const agents = businesses.map((business) => {
            return {
                fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
                company: business.companyName,
                phoneNumber: business.phoneWork

            }
        }

    )

    contentTarget.innerHTML = '<h1>Purchasing Agents</h1>'

    agents.forEach(agent => contentTarget.innerHTML += Agents(agent))

}