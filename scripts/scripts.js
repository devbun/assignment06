const TODAY = new Date().toISOString().split("T")[0];

document.getElementById('date').min = TODAY;
document.getElementById('date').value = TODAY;

function toggleVis(pw_id, btn_id) {
    const DIV_TO_TOGGLE = document.getElementById(pw_id)
    const BTN_TO_TOGGLE = document.getElementById(btn_id)

    if (DIV_TO_TOGGLE.type == "password") {
        DIV_TO_TOGGLE.type = "text";
        BTN_TO_TOGGLE.textContent = "Hide"
    } else {
        DIV_TO_TOGGLE.type = "password";
        BTN_TO_TOGGLE.textContent = "Show"
    }
};

document.getElementById("form-course").addEventListener("submit", function(event)) {
    event.preventDefault(); 
    var error_message = "";

    const NEEDS_VALUE = {'fname': 'First Name', 'lname': 'Last Name', 'sid' : 'Student ID', 'pword' : 'Password'};

        for (const [key, value] of Object.entries(NEEDS_VALUE)) {
        return error_message += (documnent.getElementById(key).value.trim == "") ? value + ' needed \n' : '';
}

    document.getElementById('error-message').textContent = error_message
}