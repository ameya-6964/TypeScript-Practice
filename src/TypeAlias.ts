type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Ameya",
  retire: (date: Date) => {
    console.log(date);
  },
};
