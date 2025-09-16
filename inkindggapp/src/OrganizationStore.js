import p4clogo from './assets/p4clogo.png';

const organizationArray = [
    {
        id: '1',
        img: p4clogo,
        orgName: 'Paws 4 a Cause',
        location: 'Raleigh, NC'
    },

    {
        id: '2',
        img: p4clogo,
        orgName: 'Paws 4 the Cause',
        location: 'Raleigh, NC'
    },

    {
        id: '3',
        img: p4clogo,
        orgName: 'Paws 4 the Cause',
        location: 'Raleigh, NC'
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