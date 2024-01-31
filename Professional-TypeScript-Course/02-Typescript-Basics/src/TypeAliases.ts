type Address = {
  name: string;
  street: string;
  city: string;
  pin: number;
};

function showData(obj: Address) {
  console.log(obj.name, obj.street, obj.city, obj.pin);
}

showData({ name: "Ameya", street: "Station Road", city: "Thane", pin: 400708 });
