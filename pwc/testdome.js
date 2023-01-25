//create a function that converts mm/dd/yyyy to yyyymmdd

function formatDate(userDate) {
    let userData = new Date(userDate);
    let y = userData.getFullYear().toString();
    let m = userData.getMonth() + (1).toString();
    let d = userData.getDate().toString();

    if (m.length === 1) (m = '0' + m);
    else if (d.length === 1) (d = '0' + d);
    return (y + m + d);
}

console.log(formatDate("12/31/2014"));