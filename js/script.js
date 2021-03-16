const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
  const request = await fetch("registrations.json");
  const data = await request.json();
  displayContactList(data);
};

const displayContactList = function (data) {
  for (const student of data) {
    if (student.registered === "no") {
      const li = document.createElement("li");
      li.innerText = student.name;
      notRegistered.append(li);
    }
  }
};

getRegistrationData();
