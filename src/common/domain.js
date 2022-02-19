
function decomposeDomains(domains) {
    const parts = {
        countries: [],
        classifications: [],
        subClassifications: []
    };

    for(let i = 0; i < domains.length; i++) {
        if (parts.countries.indexOf(domains[i].substring(0,2)) <= 0) {
            parts.countries.push(domains[i].substring(0,2))
        }
        parts.classifications.push(domains[i].substring(3,5));
        let flag = false;
        for(let j = 0; j < parts.subClassifications.length; j++) {
            if (parts.subClassifications[j] === domains[i].substring(6)) {
                flag = true
                break;
            }
        }
        if (!flag) {
            parts.subClassifications.push(domains[i].substring(6));
        }
    }
    return parts;
}

export {decomposeDomains};