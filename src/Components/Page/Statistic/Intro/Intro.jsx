import { Context } from '../../../../Context/Context'
import { chartsData } from '../../../../Data/Data'
import Header from '../../../layout/Header/Header';
import './Intro.scss'

import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function Intro() {

    const { lan } = React.useContext(Context)
    const [dan, setDan] = useState(1)
    const [gacha, setGacha] = useState(1)

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, i }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const danChange = (e) => {
        setDan(e.target.value)
    };

    const gachaChange = (e) => {
        setGacha(e.target.value)
    };

    return (
        <section className='intro'>
            <Header />
            <div className="intro__left"></div>
            <div className="intro__right">
                <div className="intro__right__container">
                    <div className='jcsb'>

                        {
                            chartsData?.map((e, i) => (
                                <div key={i} className="intro__right__container__items">
                                    <h2 className='intro__right__container__items__title'>{e[`title_${lan}`]}</h2>
                                    <p className='intro__right__container__items__text'>{e[`text_${lan}`]}</p>
                                    <div className='intro__right__container__items__date'>
                                        <div className='select'>
                                            <select name="" id="" defaultValue={dan} onChange={danChange}>
                                                {
                                                    e.dan?.map((j) => (
                                                        <option key={j.id} value={j.date}>{j.date}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className='select'>
                                            <select name="" id="" defaultValue={gacha} onChange={gachaChange}>
                                                {
                                                    e.gacha?.map((j) => (
                                                        <option key={j.id} value={j.date}>{j.date}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className='intro__right__container__items__chart'>
                                        <PieChart className='piechart' width={200} height={200}>
                                            <Pie
                                                className='pie'
                                                data={e.product}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={renderCustomizedLabel}
                                                outerRadius={100}
                                            >
                                                {
                                                    e.product?.map((e, i) => (
                                                        <Cell key={`cell-${i}`} fill={e.color} />
                                                    ))
                                                }
                                            </Pie>
                                        </PieChart>
                                        <ul className='list'>
                                            {
                                                e.product?.map((e, i) => (
                                                    <li className='list__item' key={i}>
                                                        <p style={{ backgroundColor: e.color }}></p>
                                                        <span className='list__item__text'>
                                                            {e[`name_${lan}`]}
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}