import React, {useState, useEffect} from 'react'
import '../styles.css'
import customArrow from '../assets/images/dropdown_arrow.svg'

const options = ["Русский", "Английский", "Китайский", "Испанский"]

const CustomSelect = ({ form }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const toggling = () => setIsOpen(prev => !prev)

    const onOptionClicked = value => () => {
        setSelectedOption(value)
        toggling()
        form.mutators.mutatorLang(value)
    }

    return (
        <div className='custom__dropdown__menu'>
            <div className={(!isOpen ? 'dropdown__container' : 'dropdown__container__active')}>
                {(
                    <div className={((isOpen || selectedOption) ? 'dropdown__header' : 'dropdown__header__default')}
                         onClick={toggling}>
                         {selectedOption || "Язык"}
                    </div>
                )}

                {isOpen && (
                    <div className='dropdown__list__container'>
                        <div className='dropdown__list'>
                            {options.map(option => (
                                <li className='list__item' onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </li>
                            ))}
                        </div>
                    </div>
                )}
                <img className='custom__arrow' src={customArrow} />
            </div>
        </div>
    )
}

export default CustomSelect