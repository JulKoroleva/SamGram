export class UserInfo { 

  constructor({ profileName, profileDescription, profileAvatar}) { 
    this._profileName = profileName; 
    this._profileDescription = profileDescription; 
    this._profileAvatar = profileAvatar; 
  } 

  getUserInfo() { 
    const data = { 
      name: this._profileName.textContent, 
      description: this._profileDescription.textContent,
      avatar: this._profileAvatar.textContent 
    } 
    return data; 
  } 

  setUserInfo(item) { 
    this._profileName.textContent = item.name; 
    this._profileDescription.textContent = item.description ;   
  } 

  setUseAvatar(item) { 
    this._profileAvatar.src = item.avatar;
  } 
  } 