export const Agents = (AgentsObject) => {
    return `
    <h2>${AgentsObject.fullName}</h2>
    <div class="agent-info">
        <div>${AgentsObject.company}</div>
        <div>${AgentsObject.phoneNumber}</div>
    </div>
    <hr>
    `
}