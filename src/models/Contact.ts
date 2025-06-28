import * as Enums from "../utilities/enums/ContactEnums";
class ClassContact {
  id: number;
  type: Enums.TypeContact;
  name: string;
  email: string;
  lastName: string;
  phoneNumber: number;
  favorite: boolean;

  constructor(
    id: number,
    type: Enums.TypeContact,
    name: string,
    email: string,
    lastName: string,
    phoneNumber: number,
    favorite: boolean
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.email = email;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.favorite = favorite;
  }
}

export default ClassContact;
