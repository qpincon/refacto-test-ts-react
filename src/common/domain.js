
const domainRegex = /([A-Z]{2})_([A-Z]{2})-([A-Z]{3})/;

function decomposeDomains(domains) {
    
    const countries = new Set();
    const classifications = new Set();
    const subClassifications = new Set();

    for(let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        const matchDecompose = domain.match(domainRegex);
        if (matchDecompose === null) continue;
        countries.add(domain.substring(0,2));
        classifications.add(domain.substring(3,5));
        subClassifications.add(domain.substring(6));   
    }
    
    return {
        countries: [...countries],
        classifications: [...classifications],
        subClassifications: [...subClassifications],
    };
}

export {decomposeDomains};