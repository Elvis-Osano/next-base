import * as React from "react";
import ListItem from "./ListItem";
import { User } from "../interfaces";

type Props = {
  items: User[];
};

const List = ({ items }: Props) => (
  <ul className="flex flex-col container mx-auto  ">
    {items.map((item) => (
      <li className="text-red-700" key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
