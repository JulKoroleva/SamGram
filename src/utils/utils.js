
//Задание темплейта и формы карточки 
export const elements = '.elements'; 

/////Поля для заполнения
export const cardNameInput           = document.querySelector       ('.popup__input_place'                            );
export const cardLinkInput           = document.querySelector       ('.popup__input_image'                            );
export const cardName                = document.querySelector  ('.element__title'                                );
export const cardLink                = document.querySelector  ('.element__image'                                );


////
export const profileEditorPopup = document.querySelector('.popup_type_edit-profile'); 
export const addCardPopup = document.querySelector('.popup_type_edit-card'); 
export const imagePopup = document.querySelector('.popup_type_image'); 


export const profileEditButton       = document.querySelector      ('.profile__edit-button'                          ); 
export const profileEditCloseButton  = document.querySelector      ('.popup__close-button'                           ); 
export const profileEditSaveButton   = document.querySelector      ('.popup__submit-button'                          ); 
export const profileEditorWindow     = document.querySelector      ('.popup'                                         ); 

export let nameInput                 = document.querySelector      ('.popup__input_name'                             ); 
export let jobInput                  = document.querySelector      ('.popup__input_description'                       ); 
export let profileName               = document.querySelector      ('.profile__name'                                 ); 
export let profileDescription         = document.querySelector      ('.profile__name_info'                            ); 

export const container               = document.querySelector      ('.elements'                                      );
export const elementTampl            = document.querySelector      ('#element').content.querySelector('.element'     ); 
export const cardSelector = document.querySelector('.card-template');

export const additor                 = document.querySelector      ('.additor'                                       );
export const additorOpenButton       = document.querySelector      ('.profile__add-button'                           );
export const additorCloseButton      = document.querySelector       ('.additor__close-button'                         );
export const additorSaveButton       = document.querySelector       ('.popup__submit-button'                          );  


export const imageTitle              = imagePopup.querySelector    ('.popup__image-title'                            ); 
export const imageSrc                = imagePopup.querySelector    ('.popup__image'                                  ); 
export const imageCloseButton        = imagePopup.querySelector    ('.popup__close-button'                         );


export const avatarEditPopup = document.querySelector('.popup_type_edit-avatar'); 
export const editAvatar = document.querySelector('.profile__edit-avatar-button-container'); 
export const editAvatarSaveButton = avatarEditPopup.querySelector('.popup__submit-button') 
export const profileAvatar = document.querySelector('.profile__image-container'); 




//////массивы

export const initialCards = [
    {
      name: 'Я дома ❤️',
      link: 'https://i.imgur.com/7sgAP5O.jpg'
    },
    {
      name: 'Первый раз в садах!',
      link: 'https://i.imgur.com/GfBJ26w.jpg'
    },
    {
      name: 'Красота 😍',
      link: 'https://i.imgur.com/c2wSJYl.jpg'
    },
    {
      name: 'Сколько тебе лет? Мне п... один лет...год ',
      link: 'https://i.imgur.com/wAcZWbL.jpg'
    },
    {
      name: 'Ковер 😵',
      link: 'https://i.imgur.com/zqeCLNm.jpg'
    },
    {
      name: '🦇',
      link: 'https://i.imgur.com/oF0fhOQ.jpg'
    },
    {
      name: 'HB',
      link: 'https://i.imgur.com/U8PNrQl.jpg'
    },
    {
      name: 'Ищу подарки...',
      link: 'https://i.imgur.com/uZGZDvH.jpg'
    },
    {
      name: '🎂',
      link: 'https://i.imgur.com/Rm4qy15.jpg'
    },
    {
      name: ':(',
      link: 'https://i.imgur.com/MFoe60f.jpg'
    },
    {
      name: '❤️❤️❤️',
      link: 'https://i.imgur.com/weHPmB8.jpg'
    },
    {
      name: '... --- ... ',
      link: 'https://i.imgur.com/4lXc5Ed.jpg'
    },
    {
      name: 'Кайфушечки',
      link: 'https://i.imgur.com/jWw8sqo.jpg'
    },
    {
      name: 'А вообще у меня много талантов!',
      link: 'https://i.imgur.com/6Qhqocf.jpg'
    },
    {
      name: '🌸',
      link: 'https://i.imgur.com/5FIrHhd.jpg'
    },
    {
      name: 'Ку-ку',
      link: 'https://i.imgur.com/1fA1F7S.jpg'
    },
    {
      name: 'В бабушкиных розочках',
      link: 'https://i.imgur.com/UeqzZIp.jpg'
    },
    {
      name: 'Крутость этого фото зашкаливает',
      link: 'https://i.imgur.com/q6hyAhG.jpg'
    },
    {
      name: 'Ронни',
      link: 'https://i.imgur.com/TBgcPxu.jpgg'
    },
    {
      name: 'Приветики!',
      link: 'https://i.imgur.com/56c0742.jpg'
    },
    {
      name: 'L`académie de magie Beauxbâtons',
      link: 'https://i.imgur.com/fkP8VhZ.jpg'
    },
    {
      name: '🧡',
      link: 'https://i.imgur.com/vkKHFv1.jpg'
    },
    {
      name: 'Как то так',
      link: 'https://i.imgur.com/EOcpXAi.jpg'
    },
    {
      name: '👅',
      link: 'https://i.imgur.com/DM5Kntz.jpg'
    },
    ,
    {
      name: 'white always',
      link: 'https://i.imgur.com/SBjYUo9.jpg'
    },
    {
      name: 'Ронни в гости приехал!',
      link: 'https://i.imgur.com/cpvfPk9.jpg'
    },
    {
      name: 'Совместное фото',
      link: 'https://i.imgur.com/HlvLNpV.jpg'
    },
    {
      name: 'Ну какава красота',
      link: 'https://i.imgur.com/pyVqk3o.jpg'
    },
    
  ];


export const validateData = { 
    formSelector:           '.popup__form', 
    formProfileSelector:    '.popup__form_profile', 
    formCardSelector:       '.additor__form', 
    inputSelector:          '.popup__input', 
    inputValidClass:        'popup__input_valid', 
    inputErrorClass:        'popup__input_invalid', 
    submitButtonSelector:   '.popup__submit-button', 
    activeButtonSelector:   'popup__submit-button_active', 
    disabledButtonSelector: 'popup__submit-button_disabled', 
    errorClass:             'popup__error_visible' 
  } 

  ////создали массив
  export const forms = Array.from(document.querySelectorAll(validateData.formSelector)) 