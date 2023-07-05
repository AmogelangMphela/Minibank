class Account{
  constructor(name, surname, accNum){
    this.name = name;
    this.surname = surname;
    this.accNum = accNum;
    this.balance = 0;
  }

  static deposit(amount){
   return this.balance = this.balance + amount;
  }

  static withdraw(amount){
    return this.balance = this.balance - amount;
  }
}

let accList = [];
let theAcc = new Account('tt','ll',63859);

const savedAccList = JSON.parse(localStorage.getItem('accList'));
if(Array.isArray(savedAccList)){
  accList = savedAccList;
}

function saveAccList(){
  localStorage.setItem('accList',JSON.stringify(accList));
}

const getAccount = (accNum, accList) =>{
  let acc;
  accList.forEach(nn => {
    if(Number(nn.accNum) === Number(accNum)){
      acc = nn
    }
  })
  return acc
}

const deleteAccount = () =>{
  accList.forEach(nn => {
    if(Number(nn.accNum) === Number(theAcc.accNum)){
      accList.pop()
    }
  })
  saveAccList()
  document.getElementById('display2').innerHTML = '';
  document.getElementById('display2').innerHTML += '<p>Account Succesfully Deleted<p>'
  document.getElementById('display2').innerHTML += '<a href = "sign-in.html">Sign into Account</a>';
  document.getElementById('display2').innerHTML += '<a href = "index.html">Create Account</a>';
  console.log(accList);   
}

const showMessage = () => {
  document.getElementById('display2').innerHTML = '';
  document.getElementById('display2').innerHTML += '<p>Are you sure you want to delete Accoun?<p>'
  document.getElementById('display2').innerHTML += '<a onclick = "deleteAccount()">Delete Account</a>';
}

const createAccount = () => {
  const name = document.getElementById('firstname').value
  const surname = document.getElementById('surname').value
  const accNum = document.getElementById('accountNum').value

  if(name.length > 0 && surname.length > 0 && accNum.length > 0){
    const firstAcc = new Account(name,surname,accNum)
    document.getElementById('display').innerHTML += '<a href = "sign-in.html">Sign into Account</a>';
    document.getElementById('details').innerText = "Account Succesfully created"
    document.getElementById('firstname').value = ''
    document.getElementById('surname').value = ''
    document.getElementById('accountNum').value = ''
    accList.push(firstAcc)
    saveAccList()
  }
  else{
    document.getElementById('display').innerHTML += '';
    document.getElementById('details').innerText = "Error in creating account"
  }
}

const log = () => {
  const accNum = document.getElementById('accountNum2').value
  const nn = getAccount(accNum,accList);
  theAcc = nn;
  document.getElementById('infoDiv').innerHTML = '';
  document.getElementById('infoDiv').innerHTML += '<p class="text">FNB BANK</p>'
  document.getElementById('infoDiv').innerHTML += '<input class = "accountNum" type = "text" placeholder="R" id="money">'
  document.getElementById('infoDiv').innerHTML += '<div><button class="Butt1" onclick = "bb()">Deposit</button><button class="Butt2" onclick = "cc()">Withdraw</button></div>'
  document.getElementById('infoDiv').innerHTML +=  `<button class="signup-button" id="signup-button3" onclick = "deleteAccount()">Delete Account</button>`
  document.getElementById('details2').innerText = 'Details'
  document.getElementById('nameOfUser').innerText = `Name : ${nn.name}`
  document.getElementById('surnameOfUser').innerText = `Surname : ${nn.surname}`
  document.getElementById('balance').innerText = `Balance : R ${nn.balance}`
}

const bb = () => {
  const inp = document.getElementById('money')
  theAcc.balance = theAcc.balance + Number(inp.value)
  document.getElementById('balance').innerText = `Balance : R ${theAcc.balance}`
  saveAccList()
}

const cc = () => {
  const inp = document.getElementById('money')
  theAcc.balance = theAcc.balance - Number(inp.value)
  document.getElementById('balance').innerText = `Balance : R ${theAcc.balance}`
  saveAccList()
}


