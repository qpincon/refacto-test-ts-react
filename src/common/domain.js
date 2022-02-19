
const domainRegex = /([A-Z]{2})_([A-Z]{2})-([A-Z]{3})/;

function decomposeDomains(domains) {
    const parts = {
        countries: [],
        classifications: [],
        subClassifications: []
    };

    for(let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        const matchDecompose = domain.match(domainRegex);
        if (matchDecompose === null) continue;
        if (parts.countries.indexOf(domain.substring(0,2)) <= 0) {
            parts.countries.push(domain.substring(0,2))
        }
        parts.classifications.push(domain.substring(3,5));
        let flag = false;
        for(let j = 0; j < parts.subClassifications.length; j++) {
            if (parts.subClassifications[j] === domain.substring(6)) {
                flag = true
                break;
            }
        }
        if (!flag) {
            parts.subClassifications.push(domain.substring(6));
        }
    }
    return parts;
}

export {decomposeDomains};