function checkFirstName() {
  let firstname = document.getElementById("firstname").value;
  let firstnameRegEx = new RegExp(/^[a-zA-z]+$/);
  if (firstnameRegEx.test(firstname)) {
    document.getElementById("firstname").className = "form-control is-valid";
  } else {
    document.getElementById("firstname").className = "form-control is-invalid";
  }
}

function checkLastName() {
  let lastname = document.getElementById("lastname").value;
  let lastnameRegEx = new RegExp(/^[a-zA-z]+$/);
  if (lastnameRegEx.test(lastname)) {
    document.getElementById("lastname").className = "form-control is-valid";
  } else {
    document.getElementById("lastname").className = "form-control is-invalid";
  }
}

function checkPhone() {
  let phone = document.getElementById("phone").value;
  let phoneRegEx = new RegExp(/^(([0-9]{9})|([0-9]{3}[-\s]){2}[0-9]{3})$/i);
  if (phoneRegEx.test(phone)) {
    document.getElementById("phone").className = "form-control is-valid";
  } else {
    document.getElementById("phone").className = "form-control is-invalid";
    document.getElementById("phone_feedback").className = "invalid-feedback";
    document.getElementById("phone_feedback").innerText =
      "Niepoprawny numer telefonu";
  }
}

function checkEmail() {
  let email = document.reservation_form.email.value;
  let emailRegEx = new RegExp(/^[0-9a-z_.-]+@([0-9a-z-]+\.){1,}[a-z]{2,3}$/i);
  if (emailRegEx.test(email)) {
    document.getElementById("email").className = "form-control is-valid";
  } else {
    document.getElementById("email").className = "form-control is-invalid";
    document.getElementById("email_feedback").className = "invalid-feedback";
    document.getElementById("email_feedback").innerText =
      "Niepoprawny adres email";
  }
}

function checkDate() {
  let date = document.getElementById("date").value;
  let inpDate = new Date(date);
  let currDate = new Date();

  if (inpDate.setHours(0, 0, 0, 0) <= currDate.setHours(0, 0, 0, 0)) {
    document.getElementById("date").className = "form-control is-invalid";
    document.getElementById("date_feedback").className = "invalid-feedback";
    document.getElementById("date_feedback").innerText =
      "Wybierz datę późniejszą niż dzisiaj";
  } else {
    document.getElementById("date").className = "form-control is-valid";
  }
}

function checkTime() {
  let time = document.getElementById("time").value;
  let timeRegEx = new RegExp(/^((1[0-9]|20):([0-5][0-9])|(21:00))$/);
  console.log(time);

  if (timeRegEx.test(time)) {
    document.getElementById("time").className = "form-control is-valid";
  } else {
    document.getElementById("time").className = "form-control is-invalid";
    document.getElementById("time_feedback").className = "invalid-feedback";
    document.getElementById("time_feedback").innerText =
      "Rezerwacja może być w godzinach 10-21.";
  }
}

function checkQuantity() {
  let quantity = document.forms["reservation_form"]["quantity"].value;
  let quantityRegEx = new RegExp(/^[^0-9]+$/);

// if (quantity.match(quantityRegEx)) {
//   alert("Jest ok.")
// }

  if (quantity > 10) {
    document.getElementById("quantity").className = "form-control is-invalid";
    document.getElementById("quantity_feedback").className = "invalid-feedback";
    document.getElementById("quantity_feedback").innerText =
      "Maksymalna liczba osób to 10.";
  } else if (quantity < 1) {
    document.getElementById("quantity").className = "form-control is-invalid";
    document.getElementById("quantity_feedback").className = "invalid-feedback";
    document.getElementById("quantity_feedback").innerText =
      "Minimalna liczba osób to 1.";
  } else {
    document.getElementById("quantity").className = "form-control is-valid";
  }
}
