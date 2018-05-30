import rawData from './insurance_data.json';

const plans = rawData.map((raw) => {
    return {
        id: raw.PlanType_ID,
        carrier: {
            name: raw.Carrier
        },
        name: raw.Plan.toString().replace(raw.Carrier + ' ', ''),
        requests: raw.Requests
    }
});

export default plans;