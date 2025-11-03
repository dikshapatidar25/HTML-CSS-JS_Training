// // ------Question 1--------
// let i = 1

// let timer = setInterval(function() 
// {
//   console.log(i)
//   i++

//   if (i === 10) 
//     {    
//     clearInterval(timer)
//     console.log("Done!")
//     }

  
// }, i *2000)

// setTimeout(function() {
//   clearInterval(timer)
//   console.log("Stopped!")
// }, 20000)

// ---------Question 2---------

// function Numbers() 
// {
//   for (let i = 1; i <= 10; i++) 
//     {
//     setTimeout(function() 
//     {
//       console.log(i)
//       if (i === 10) 
//         {
//         console.log("Done!")
//       }
//     }, i * 2000)
//   }
// }
// Numbers()



// ---------Scenario based question--------

let contacts = [
  { name: "Khushi", phone: "9876543210", email: "khushi@gmail.com" },
  { name: "Diksha", phone: "9002345680", email: "diksha@gmail.com" },
  { name: "Anjali", phone: "8188776655", email: "anjali@gmail.com" },
  { name: "Payal", phone:  "7788775855", email: "payal@gmail.com" }
];

// ---------------------------------------------
function showContact(contactList, index) 
{
  if (!(contactList instanceof Array)) 
    {
    console.log(" contact list must be an array!")
    return
    }

  if (index < 0 || index >= contactList.length)
     {
    console.log("invalid contact index!")
    return
    }

  let contact = contactList[index]
  console.log(`Contact:${index + 1}`)
  console.log(`Name: ${contact.name}`)
  console.log(`Phone: ${contact.phone}`)
  console.log(`Email: ${contact.email}`)
  console.log("---------------------------")
}



function showAllContacts(contactList) 
{
  if (!(contactList instanceof Array))
  {
    console.log("contact list must be an array!")
    return
  }

  console.log(" All Contacts:")
  

  for (let i = 0; i < contactList.length; i++) 
    {
    let c = contactList[i]
    console.log(`${i + 1}. ${c.name} - ${c.phone} - ${c.email}`)
    } 
}
 console.log("---------------------------")

function addNewContact(contactList, name, phone, email) 
{
    if (!(contactList instanceof Array))
      {
      console.log(" contact list must be an array!")
      return
      }

  if (!name || !phone || !email)
    {
    console.log(" please provide name, phone, and email!")
    return
    }

  let newContact = { name: name, phone: phone, email: email }


  contactList.push(newContact)
  console.log(`New contact added: ${name}`)
}


showAllContacts(contacts)
 console.log("---------------------------")


console.log("Adding a new contact...")
addNewContact(contacts, "Ekta", "9090909090", "Ekta@gmail.com")
 console.log("---------------------------")

console.log("Updated Contact List:")
showAllContacts(contacts)
console.log("---------------------------")

console.log("Show Contact at Index 3:")
showContact(contacts, 3)
