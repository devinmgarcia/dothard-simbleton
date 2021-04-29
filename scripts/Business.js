export const Business = (businessObject) => {
    return `
    <h2>${businessObject.companyName}</h2>
    <div class="company-address">
        <div>${businessObject.addressFullStreet}</div>
        <div>${businessObject.addressCity}, ${businessObject.addressStateCode}${businessObject.addressZipCode}</div>
    </div>
    <hr>
    `
}