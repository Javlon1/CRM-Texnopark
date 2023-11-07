import './Lid.scss'
import Header from '../../layout/Header/Header'
import { useEffect, useState } from 'react'


export default function Lid() {

    const [dragData, setDragData] = useState()

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


    return (
        <section className='lid'>
            <Header />
            <div className="lid__left"></div>
            <div className="lid__right">
                <div className="lid__right__container">
                    {
                        dragData?.map((card) => (
                            <div key={card.id}>
                                lid
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
