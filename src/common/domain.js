
const domainRegex = /([A-Z]{2})_([A-Z]{2})-([A-Z]{3})/;

function decomposeDomains(domains) {
    
    const countries = new Set();
    const classifications = new Set();
    const subClassifications = new Set();

    for(let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        const matchDecompose = domain.match(domainRegex);
        if (matchDecompose === null) continue;
        countries.add(matchDecompose[1]);
        classifications.add(matchDecompose[2]);
        subClassifications.add(matchDecompose[3]);   
    }
    
    return {
        countries: [...countries],
        classifications: [...classifications],
        subClassifications: [...subClassifications],
    };
}

export {decomposeDomains};