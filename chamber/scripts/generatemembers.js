async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    return data;
};

