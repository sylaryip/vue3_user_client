export interface DataItem {
  id: number;
  name: string;
  age: number;
  children?: DataItem[];
}

export var data: DataItem[] = [
  {
    id: 1,
    name: 'Mike',
    age: 76,
    children: [
      {
        id: 2,
        name: 'Jack',
        age: 40,
      },
      {
        id: 3,
        name: 'Rose',
        age: 35,
        children: [
          {
            id: 4,
            name: 'Crystal',
            age: 10,
          },
          {
            id: 5,
            name: 'Joe',
            age: 5,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Sam',
    age: 45,
    children: [
      {
        id: 7,
        name: 'James',
        age: 22,
        children: [
          {
            id: 8,
            name: 'Belly',
            age: 1,
          },
        ],
      },
    ],
  },
];
