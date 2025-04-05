// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpYqvXOURt0FYYzU2dvVCFPtLtr05hIPI",
  authDomain: "tracking-system-b3beb.firebaseapp.com",
  projectId: "tracking-system-b3beb",
  storageBucket: "tracking-system-b3beb.firebasestorage.app",
  messagingSenderId: "941974193928",
  appId: "1:941974193928:web:0f1bdcf5b2454cfc9acebd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// DOM elements
const addExpenseButton = document.getElementById('addExpense');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categorySelect = document.getElementById('category');
const expensesList = document.getElementById('expenses');
const expenseChartCanvas = document.getElementById('expenseChart').getContext('2d');

// Function to Add Expense
addExpenseButton.addEventListener('click', async () => {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;

    if (description && amount) {
        // Add to Firestore
        try {
            await addDoc(collection(db, 'expenses'), {
                description,
                amount,
                category,
                timestamp: new Date().toISOString()
            });

            // Clear input fields
            descriptionInput.value = '';
            amountInput.value = '';

            // Refresh the expenses and chart
            loadExpenses();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
});

// Function to load expenses from Firestore
async function loadExpenses() {
    const querySnapshot = await getDocs(collection(db, 'expenses'));
    const expenses = querySnapshot.docs.map(doc => doc.data());

    // Clear the list
    expensesList.innerHTML = '';

    // Add each expense to the list
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.description}: $${expense.amount} (${expense.category})`;
        expensesList.appendChild(li);
    });

    // Update the chart with the latest data
    updateChart(expenses);
}

// Function to update the chart
function updateChart(expenses) {
    const categories = ['Groceries', 'Entertainment', 'Rent', 'Utilities'];
    const categoryTotals = categories.map(category => 
        expenses.filter(exp => exp.category === category).reduce((acc, curr) => acc + curr.amount, 0)
    );

    const chartData = {
        labels: categories,
        datasets: [{
            label: 'Expenses',
            data: categoryTotals,
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
            borderColor: '#000',
            borderWidth: 1
        }]
    };

    // Render the chart
    const chart = new Chart(expenseChartCanvas, {
        type: 'bar',
        data: chartData
    });
}

// Initial load of expenses
loadExpenses();
