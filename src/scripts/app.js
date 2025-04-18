// JavaScript logic for the age calculator application

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const dobInput = document.getElementById('dob');
    const calculateButton = document.getElementById('calculate');
    const resultMessage = document.getElementById('result');

    calculateButton.addEventListener('click', function() {
        const name = nameInput.value;
        const dob = new Date(dobInput.value);
        const age = calculateAge(dob);

        if (name && !isNaN(age)) {
            resultMessage.textContent = `Hello ${name}, you are ${age} years old.`;
            resultMessage.style.display = 'block';

            setTimeout(() => {
                resultMessage.style.display = 'none';
            }, 60000); // Message disappears after 1 minute
        } else {
            resultMessage.textContent = 'Please enter a valid name and date of birth.';
            resultMessage.style.display = 'block';
        }
    });

    function calculateAge(dob) {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
});