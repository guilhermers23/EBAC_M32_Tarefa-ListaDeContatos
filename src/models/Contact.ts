import * as Enums from "../utilities/enums/ContactEnums";
class ClassContact {
  id: number;
  typeContact: Enums.TypeContact;
  name: string;
  email: string;
  phoneNumber: number;
  favorite: boolean;

  constructor(
    id: number,
    typeContact: Enums.TypeContact,
    name: string,
    email: string,
    phoneNumber: number,
    favorite: boolean
  ) {
    this.id = id;
    this.typeContact = typeContact;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.favorite = favorite;
  }
}

export default ClassContact;
