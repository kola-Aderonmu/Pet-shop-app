import React from "react";
import Navbar from "../../components/Navbar";
import PetList from "../../components/PetList";
import Filters from "../../components/Filters";
import { useFilterPets } from "../../hooks/useFilterPets";

function MarketPlace() {
  const [filterState, setFilterState] = React.useState({
    value: "all",
    filterType: "",
  });
  const [adoptPet, setAdoptPet] = React.useState("");
  const { pets } = useFilterPets({
    value: filterState.value,
    filterType: filterState.filterType,
  });

  console.log("app rerendered");

  return (
    <>
      <Filters setFilterState={setFilterState} />

      <PetList pets={pets} setAdoptPet={setAdoptPet} />
    </>
  );
}
export default MarketPlace;
