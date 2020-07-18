// Importing style.css from css folder located in assests folder which is again 
// one level backwards that of current directory

import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';
