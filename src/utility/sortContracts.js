export default function(sortBy, contracts) {
    let sortedContracts = contracts

    switch(sortBy){
        case 'dateAsc':
            sortedContracts.sort((a, b) => a.starting - b.starting)
            break
        case 'nameDesc':
            sortedContracts.sort((a, b) => {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            })
            break
        case 'nameAsc':
            sortedContracts.sort((a, b) => {
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                // names must be equal
                return 0;
            })
            break
        case 'quantityDesc':
            sortedContracts.sort((a, b) => b.quantity - a.quantity)
            break
        case 'quantityAsc':
            sortedContracts.sort((a, b) => a.quantity - b.quantity)
            break
        case 'busDesc':
            sortedContracts.sort((a, b) => {
                var businessA = a.business.toUpperCase();
                var businessB = b.business.toUpperCase();
                if (businessA < businessB) {
                    return -1;
                }
                if (businessA > businessB) {
                    return 1;
                }
                return 0;
            })
            break
        case 'busAsc':
            sortedContracts.sort((a, b) => {
                var businessA = a.business.toUpperCase();
                var businessB = b.business.toUpperCase();
                if (businessA < businessB) {
                    return 1;
                }
                if (businessA > businessB) {
                    return -1;
                }
                return 0;
            })
            break
        default:
            sortedContracts.sort((a, b) => b.starting - a.starting)
            break
    }
    return sortedContracts
}