function InfoTooltip({isOpen, onClose, image, allert}) {
    return(
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
            <div className='popup__container popup__container-registration'>
                <img className=' popup__registration' alt='Уведомление' src={image}></img>
                <p className='popup__allert'>{allert}</p>
            <button 
                type='button'
                className='button popup__button-close'
                onClick={onClose}> 
            </button>

            </div>
        </div>
    )    
}

export default InfoTooltip;