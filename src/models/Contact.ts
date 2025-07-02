import * as Enums from "../utilities/enums/ContactEnums";
class ClassContact {
  id: number;
  typeContact: Enums.TypeContact;
  name: string;
  email: string;
  phoneNumber: string;

  constructor(
    id: number,
    typeContact: Enums.TypeContact,
    name: string,
    email: string,
    phoneNumber: string
  ) {
    this.id = id;
    this.typeContact = typeContact;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

export default ClassContact;
