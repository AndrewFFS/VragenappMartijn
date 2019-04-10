$(document).on('click', "#emailOpvragen", function () {
    // variable answer with answer from user
    var inputtedEmail = $(this).parent().find('#emailInput').val();

    console.log(inputtedEmail);
    // variable with id from answered question
    var Opleiding_Id = localStorage.getItem('gekozenOpleiding');
    console.log(Opleiding_Id);
    // variable datastring with data to send to server
    var dataString = "email=" + inputtedEmail + "&opleidingID=" + Opleiding_Id;
    // ajax function
    $.ajax({
        // url to send data to
        url: "http://arranji330.330.axc.nl/Vragenapp_Versie_2.1/emailpagina/",
        // type post because it sends data
        type: 'POST',
        // allow to send data to a other domain
        crossDomain: true,
        // data om te verzenden
        data: dataString,
        // on succes of the ajax function fill localStorage with data
        success: function () {
            alert("Email toegevoegd");
            location.reload();
        }
    });
});