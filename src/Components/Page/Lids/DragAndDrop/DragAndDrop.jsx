import * as React from 'react'
import './DragAndDrop.scss'
import { useEffect, useState } from 'react'
import Header from '../../../layout/Header/Header'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { DragDropData } from '../../../../Data/Data'

export default function DragAndDrop() {
    const [reg, setReg] = useState(false)
    const [list, setList] = useState(false)
    const [dragData, setDragData] = useState([])

    useEffect(() => {
        const getCounteries = async () => {
            await fetch("https://63c2c490b0c286fbe5f347e9.mockapi.io/drag")
                .then(res => res.json())
                .then(data => setDragData(data))
                .catch(error => console.error(error.message))
        }
        getCounteries()
    }, [])

    // const [currentCrad, setCurrentCrad] = useState(null)

    const headlerDragDrop = (results) => {

        const { source, destination, type } = results;

        if (!destination) {
            return;
        }
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }
        if (type === "group") {

            const reorderedDragData = [...dragData];

            const sourceIndex = source.index;
            const destinationIndex = destination.index;

            const [removedDragData] = reorderedDragData.splice(sourceIndex, 1)
            reorderedDragData.splice(destinationIndex, 0, removedDragData)
            return setDragData(reorderedDragData)
        }
    }

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
                    <DragDropContext onDragEnd={headlerDragDrop}>
                        <div>
                            <Droppable
                                droppableId='ROOT'
                                type='group'
                            >
                                {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef} className='dragAndDrop__right__container__list'>
                                        <div>
                                            {
                                                dragData?.map((card, index) => (
                                                    <Draggable draggableId={card.id} key={card.id} index={index}>
                                                        {(provided) => (
                                                            <div
                                                                {...provided.dragHandleProps}
                                                                {...provided.draggableProps}
                                                                ref={provided.innerRef}
                                                            >
                                                                <h3>{card.name}</h3>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </section>
    )
}