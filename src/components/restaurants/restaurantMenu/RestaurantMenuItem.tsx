import { useState } from "react";
import { RestaurantMenuItemProps } from "../../../models/props";
import Modal from "../../layout/Modal";
import RestaurantMenuForm from "./restaurantMenuForm/RestaurantMenuForm";


const RestaurantMenuItem = ({ item , extras }: RestaurantMenuItemProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RestaurantMenuForm item={item} extras={extras} onClose={closeModal} />
        </Modal>
      )}
      <article className="restaurant-menu-item" onClick={openModal}>
        <h5 className="h-tertiary">{item.name}</h5>
        <p className="restaurant-menu-item__description">{item.description}</p>
        <footer className="restaurant-menu-item__footer">
          <span className="restaurant-menu-item__price"> &euro; {item.price.toFixed(2)} </span>
          <button className="restaurant-menu-item__btn btn"> +  </button>
        </footer>
      </article>
    </>
  )
};

export default RestaurantMenuItem;