import useSorts from "../Hooks/useSorts";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Sort } from "../Hooks/useSorts";



interface Props {
  onSelectSort: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const { data, error } = useSorts();
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} value={order.value} onClick={() => onSelectSort(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
