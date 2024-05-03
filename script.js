let expenses = [];
let totalamount =0;

const categoryselect = document.getElementById("category-select");
const  amountinput = document.getElementById("amount-input");
const dateinput = document.getElementById("date-input");
const addbtn = document.getElementById("add-btn");
const expensestablebody = document.getElementById("expenses-table-body");
const totalamountcell = document.getElementById("total-amount");

addbtn.addEventListener("click", function(){
    const category = categoryselect.value ;
    const amount = Number(amountinput.value);
    const date = dateinput.value ;

    if(category === ''){
        alert('Please select a category');
        return;
    }
    if(isNaN(amount) || amount<0){
        alert('Please enter a valid amount');
        return;
    }
    if(date === ''){
        alert('Please select a date');
        return;
    }
    expenses.push({category,amount,date});

    totalamount += amount;
    totalamountcell.textContent= totalamount;

    const newrow = expensestablebody.insertRow();

    const categorycell = newrow.insertCell();
    const amountcell = newrow.insertCell();
    const datecell = newrow.insertCell();
    const  deletecell = newrow.insertCell();
    const deletebutton = document.createElement('button');
    
    deletebutton.textContent = 'Delete';
    deletebutton.classList.add('delete-btn');
    deletebutton.addEventListener("click", function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalamount -= expense.amount;
        totalamountcell.textContent= totalamount;

        expensestablebody.removeChild(newrow);
    });
    const expense = expenses[expenses.length-1];
    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    datecell.textContent = expense.date;
    deletecell.appendChild(deletebutton);

});

for (const expense of expenses){
    totalamount += expense.amount;
    totalamountcell.textContent = totalamount;
    const newrow = expensestablebody.insertRow();
    const categorycell = newrow.insertCell();
    const amountcell = newrow.insertCell();
    const datecell = newrow.insertCell();
    const  deletecell = newrow.insertCell();
    const deletebutton = document.createElement('button');
    deletebutton.addEventListener("click", function(){
        expenses.splice(expenses.indexOf(expenses),1);

        totalamount -= expense.amount;
        totalamountcell.textContent= totalamount;

        expensestablebody.removeChild(newrow);
    });
    categorycell.textContent = expense.category;
    amountcell.textContent = expense.amount;
    deletecell.textContent = expense.date;
    deletecell.appendChild(deletebutton);


}