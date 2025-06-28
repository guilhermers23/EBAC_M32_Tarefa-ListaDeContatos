class Contact {
  id: number;
  type: string;
  name: string;
  email: string;
  contact: string;
  phoneNumber: number;
  favorite: boolean;

  constructor(
    id: number,
    type: string,
    name: string,
    email: string,
    contact: string,
    phoneNumber: number,
    favorite: boolean
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.phoneNumber = phoneNumber;
    this.favorite = favorite;
  }
}

export default Contact;
