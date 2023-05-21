const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(
        `Success: contact with id ${id} removed! `,
        removedContact
      );
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log("Success: new contact added!", newContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
