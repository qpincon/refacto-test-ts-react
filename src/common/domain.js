
const domainRegex = /([A-Z]{2})_([A-Z]{2})-([A-Z]{3})/;

function decomposeDomains(domains) {
    
    const countries = new Set();
    const classifications = new Set();
    const subClassifications = new Set();

    for(let i = 0; i < domains.length; i++) {
        const decomposed = decomposeDomain(domains[i]);
        if (decomposed === null) continue;
        countries.add(decomposed.country);
        classifications.add(decomposed.classification);
        subClassifications.add(decomposed.subClassification);
    }
    
    return {
        countries: [...countries],
        classifications: [...classifications],
        subClassifications: [...subClassifications],
    };
}

function decomposeDomain(domain) {
    const matchDecompose = domain.match(domainRegex);
    if (matchDecompose === null) return null;
    return {
        country: matchDecompose[1],
        classification: matchDecompose[2],
        subClassification: matchDecompose[3],  
    }
}

export {decomposeDomains};