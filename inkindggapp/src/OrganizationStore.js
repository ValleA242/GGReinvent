import p4clogo from './assets/p4clogo.png';

const organizationArray = [
    {
        id: '1',
        img: p4clogo,
        orgName: 'Paws 4 A Cause',
        location: 'Raleigh, NC',
        cause: 'Animals',
        askAmounts: [25, 50, 100]

    },

    {
        id: '2',
        img: p4clogo,
        orgName: 'WTCC',
        location: 'Raleigh, NC',
        cause: 'Education',
        askAmounts: [25, 60, 100]

    },

    {
        id: '3',
        img: p4clogo,
        orgName: 'Red Cross NC',
        location: 'Raleigh, NC',
        cause: 'Disaster Relief',
        askAmounts: [30, 70, 100]
    }
]

function getOrganizationData(id) {
    let organizationData = organizationArray.find(organization => organization.id === id)

    if (organizationData === undefined) {
        console.log('Organization not found');
        return undefined;
    }

    return organizationData;
}

export { organizationArray, getOrganizationData }