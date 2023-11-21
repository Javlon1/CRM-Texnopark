import * as React from 'react'
import './DragAndDrop.scss'
import { useEffect, useState } from 'react'
import Header from '../../../layout/Header/Header'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { DragDropData } from '../../../../Data/Data'
import { Link } from 'react-router-dom'
import { Context } from '../../../../Context/Context'


export default function DragAndDrop() {
    const { lan } = React.useContext(Context)
    const [reg, setReg] = useState(false)
    const [list, setList] = useState(false)

    const [stores, setStores] = useState([]);

    useEffect(() => {
        const getCounteries = async () => {
            await fetch("https://63c2c490b0c286fbe5f347e9.mockapi.io/drag")
                .then(res => res.json())
                .then(data => setStores(DragDropData))
                .catch(error => console.error(error.message))
        }
        getCounteries()
    }, [])


    const handleDragAndDrop = (results) => {
        const { source, destination, type } = results;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        if (type === "group") {
            const reorderedStores = [...stores];

            const storeSourceIndex = source.index;
            const storeDestinatonIndex = destination.index;

            const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
            reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

            return setStores(reorderedStores);
        }
        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const storeSourceIndex = stores.findIndex(
            (store) => store.id === source.droppableId
        );
        const storeDestinationIndex = stores.findIndex(
            (store) => store.id === destination.droppableId
        );

        const newSourceItems = [...stores[storeSourceIndex].items];
        const newDestinationItems =
            source.droppableId !== destination.droppableId
                ? [...stores[storeDestinationIndex].items]
                : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newStores = [...stores];

        newStores[storeSourceIndex] = {
            ...stores[storeSourceIndex],
            items: newSourceItems,
        };
        newStores[storeDestinationIndex] = {
            ...stores[storeDestinationIndex],
            items: newDestinationItems,
        };

        setStores(newStores);
    };


    return (
        <section className='dragAndDrop'>
            <Header />
            <div className="dragAndDrop__left"></div>
            <div className="dragAndDrop__right">
                <div className="dragAndDrop__right__container">
                    <div className="dragAndDrop__right__container__register">
                        <ul className={list ? "dragAndDrop__right__container__register__list activList" : "dragAndDrop__right__container__register__list"}>
                            <button onClick={() => {
                                setList(!list)
                            }}>
                                <i className="bi bi-arrow-left-right"></i>
                            </button>
                            <li className='dragAndDrop__right__container__register__list__item'>
                                hh
                            </li>
                            <p onClick={() => {
                                setList(!list)
                            }}>
                                <i className="bi bi-x-lg"></i>
                            </p>
                        </ul>
                        <button onClick={() => {
                            setReg(!reg)
                        }} className="dragAndDrop__right__container__register__btn">
                            + Yangi mijoz qo‘shish
                        </button>
                        <div className={reg ? "dragAndDrop__right__container__register__user activRegister" : "dragAndDrop__right__container__register__user"}>
                            <div className='dragAndDrop__right__container__register__user__title'>
                                <p>Yangi hodim qo‘shish</p>
                                <b onClick={() => {
                                    setReg(false)
                                }}>
                                    <i className="bi bi-x-lg"></i>
                                </b>
                            </div>
                            <form className='dragAndDrop__right__container__register__user__form' action="">
                                <div className='dragAndDrop__right__container__register__user__form__div'>
                                    <span>name</span>
                                    <input type="text" required />
                                </div>
                                <div className='dragAndDrop__right__container__register__user__form__div'>
                                    <span>surname</span>
                                    <input type="text" required />
                                </div>
                                <div className='dragAndDrop__right__container__register__user__form__div'>
                                    <span>phone</span>
                                    <input type="text" required />
                                </div>
                                <button type='submit'>Yuborish</button>
                            </form>
                        </div>
                    </div>
                    <div className='list'>
                        <DragDropContext onDragEnd={handleDragAndDrop}>
                            {
                                stores?.map((e, i) => (
                                    <Droppable droppableId={e.id}>
                                        {(provided) => (
                                            <div className='list__item' {...provided.droppableProps} ref={provided.innerRef}>
                                                <div className="list__item__title">
                                                    <h3>{e[`title_${lan}`]}</h3>
                                                </div>
                                                <div className="list__item__list">
                                                    {
                                                        e.items?.map((item, index) => (
                                                            <div className='list__item__list__item'>
                                                                <Draggable draggableId={item.id} index={index} key={item.id}>
                                                                    {(provided) => (
                                                                        <div
                                                                            className="item-container"
                                                                            {...provided.dragHandleProps}
                                                                            {...provided.draggableProps}
                                                                            ref={provided.innerRef}
                                                                        >
                                                                            <h4>{item.name}</h4>
                                                                            <Link
                                                                                to={`tel:${item.phone}`}
                                                                            >
                                                                                {item.phone}
                                                                            </Link>
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            </div>
                                                        ))
                                                    }
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        )}
                                    </Droppable>
                                ))
                            }
                        </DragDropContext>
                    </div>
                </div>
            </div>
        </section>
    )
}