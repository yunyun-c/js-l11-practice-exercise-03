const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {

  const request = await fetch("https://gist.githubusercontent.com/redrambles/f37dba0e86bd77cacd11ba1054c3e7b5/raw/0cf279738447cc8aa9559cce953f693abb5c06bd/fieldtrip.json");
  const data = await request.json();
  console.log(data);
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
