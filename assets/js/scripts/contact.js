//Sending emails

function sendEnquiry(enquiryForm) {
    emailjs.send("cgpalmer91_gmail_com", "pokemon_template", {
        "from_name": enquiryForm.userName.value,
        "from_email": enquiryForm.userEmail.value,
        "from_consent": enquiryForm.ageConsent.value,
        "from_enquiry": enquiryForm.reasonForEnquiry.value
    })
    .then(
        function(response) {
            $("#sendButton").html("Sent!");  
            $("#successModal").css("display", "block").addClass("in").addClass("show");
            $("#contact").addClass("modal-open");    
        },
        function(error){
            alert("Something has gone wrong. Please refresh the page and try again.")
        });
    return false;
}

