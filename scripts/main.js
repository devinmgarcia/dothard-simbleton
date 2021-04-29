import { AgentsList } from "./AgentsList.js";
import { BusinessList } from "./BusinessList.js";
import { getBusinesses } from "./database.js";
import { ManufacturingList } from "./Manufacturing.js";
import { NewYorkList } from "./NewYorkList.js";

const businessesList = getBusinesses()


BusinessList()
NewYorkList()
ManufacturingList()
AgentsList(businessesList)