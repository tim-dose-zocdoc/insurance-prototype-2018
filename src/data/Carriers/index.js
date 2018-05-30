import rawCarriers from './carriers.json';

const carriers = rawCarriers.map((raw) => {
    return {
        id: raw.InsuranceID,
        name: raw['Carrier Name'],
        carrierDisplay: raw['Carrier Name'],
        requests: raw.Requests,
        isBCBS: raw.isBCBS
    }
});

export default carriers;


