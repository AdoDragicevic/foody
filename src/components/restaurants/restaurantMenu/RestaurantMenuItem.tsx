import { useState } from "react";
import { RestaurantMenuItemProps } from "../../../models/props";
import Modal from "../../layout/Modal";


const RestaurantMenuItem = ({ item }: RestaurantMenuItemProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <p>hello world</p>
        </Modal>
      )}
      <article className="restaurant-menu-item" onClick={openModal}>
        <h5 className="restaurant-menu-item__name">{item.name}</h5>
        <p className="restaurant-menu-item__description">{item.description}</p>
        <p className="restaurant-menu-item__price"> &euro; {item.price.toFixed(2)} </p>
        <button className="restaurant-menu-item__btn btn"> +  </button>
      </article>
    </>
  )
};

export default RestaurantMenuItem;