let sales = 0;
let purchases = 0;
let expenses = 0;

function updateDashboard() {

    document.getElementById("sales").innerText =
        sales + " DA";

    document.getElementById("purchases").innerText =
        purchases + " DA";

    document.getElementById("expenses").innerText =
        expenses + " DA";

    let profit = sales - purchases - expenses;

    document.getElementById("profit").innerText =
        profit + " DA";
}

updateDashboard();
