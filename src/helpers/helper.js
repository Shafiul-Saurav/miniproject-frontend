const getYears = (startYear) => {
    let currentYear = new Date().getFullYear();
    let years = [];


    for (let index = startYear; index <= currentYear; index++) {
        years.push(String(index));
    }

    return years;
}

const getMonths = () => {
    const months = [];
    for (let index = 0; index < 12; index++) {
        months.push(new Date(0, index).toLocaleString('en-US', { month: 'long' }));
    }
    return months;
};

export {
    getYears,
    getMonths
}