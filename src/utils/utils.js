
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
export const profileAvatar = document.querySelector('.profile__image'); 




//////массивы

export const initialCards = [
    {
      name: 'Я дома ❤️',
      link: 'https://i.postimg.cc/9MtjTkG9/7sgAP5O.jpg'
    },
    {
      name: 'Первый раз в садах!',
      link: 'https://i.postimg.cc/TYPXLChy/GfBJ26w.jpg'
    },
    {
      name: 'Красота 😍',
      link: 'https://i.postimg.cc/Kj0Spgpv/c2wSJYl.jpg'
    },
    {
      name: 'Сколько тебе лет? Мне п... один лет...год ',
      link: 'https://i.postimg.cc/WpWHKjb3/wAcZWbL.jpg'
    },
    {
      name: 'Ковер 😵',
      link: 'https://i.postimg.cc/BZp0ndZ9/zqeCLNm.jpg'
    },
    {
      name: '🦇',
      link: 'https://i.postimg.cc/pX1MDzns/oF0fhOQ.jpg'
    },
    {
      name: 'HB',
      link: 'https://i.postimg.cc/YCGK806M/U8PNrQl.jpg'
    },
    {
      name: 'Ищу подарки...',
      link: 'https://i.postimg.cc/85G21bqz/uZGZDvH.jpg'
    },
    {
      name: '🎂',
      link: 'https://i.postimg.cc/0yTg4vnm/Rm4qy15.jpg'
    },
    {
      name: ':(',
      link: 'https://i.postimg.cc/hG1C0R5K/MFoe60f.jpg'
    },
    {
      name: '❤️❤️❤️',
      link: 'https://i.postimg.cc/9f5SppXY/weHPmB8.jpg'
    },
    {
      name: '... --- ... ',
      link: 'https://i.postimg.cc/XqHmk6Xr/4lXc5Ed.jpg'
    },
    {
      name: 'Кайфушечки',
      link: 'https://i.postimg.cc/8cpgbbH0/jWw8sqo.jpg'
    },
    {
      name: 'А вообще у меня много талантов!',
      link: 'https://i.postimg.cc/m2k02k6C/6Qhqocf.jpg'
    },
    {
      name: '🌸',
      link: 'https://i.postimg.cc/vBGKRZV1/5FIrHhd.jpg'
    },
    {
      name: 'Ку-ку',
      link: 'https://i.postimg.cc/W37Qtkv6/1fA1F7S.jpg'
    },
    {
      name: 'В бабушкиных розочках',
      link: 'https://i.postimg.cc/0jQHQXZP/UeqzZIp.jpg'
    },
    {
      name: 'Крутость этого фото зашкаливает',
      link: 'https://i.postimg.cc/15bYmHF1/q6hyAhG.jpg'
    },
    {
      name: 'Ронни',
      link: 'https://i.postimg.cc/sDLbBzt8/TBgcPxu.jpg'
    },
    {
      name: 'Приветики!',
      link: 'https://i.postimg.cc/85kZKX2M/56c0742.jpg'
    },
    {
      name: 'L`académie de magie Beauxbâtons',
      link: 'https://i.postimg.cc/rmgPq21f/fkP8VhZ.jpg'
    },
    {
      name: '🧡',
      link: 'https://i.postimg.cc/nzd06Yx5/vkKHFv1.jpg'
    },
    {
      name: 'Как то так',
      link: 'https://i.postimg.cc/GtVzpLHx/EOcpXAi.jpg'
    },
    {
      name: '👅',
      link: 'https://i.postimg.cc/8cjtDJPC/DM5Kntz.jpg'
    },
    ,
    {
      name: 'white always',
      link: 'https://i.postimg.cc/SKhT8xVZ/SBjYUo9.jpg'
    },
    {
      name: 'Ронни в гости приехал!',
      link: 'https://i.postimg.cc/nL4WwDCb/cpvfPk9.jpg'
    },
    {
      name: 'Совместное фото',
      link: 'https://i.postimg.cc/fR0pmFsb/HlvLNpV.jpg'
    },
    {
      name: 'Ну какава красота',
      link: 'https://i.postimg.cc/fRXqJ97t/pyVqk3o.jpg'
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