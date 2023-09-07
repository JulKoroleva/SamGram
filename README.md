

<div align="center">
  <h1>SamGram 🦴</h1>
  <h3>Personal Photo Publishing Project</h3>
</div>

Welcome to SamGram! This is a simple example of a user's personal webpage designed for sharing and showcasing photographs. You can customize this page by changing your name, personal information, and updating your avatar. The page features a stunning photo gallery, each image complemented by a short description. Photos are effortlessly added using direct links to online images. Please note that since this project doesn't utilize an API, all changes and uploaded data will revert to default upon page refresh.

## Features
- **Personalization**: Customize your page to reflect your identity. Edit your name, add a bio, and update your avatar image.

- **Photo Gallery**: Display your cherished moments in a photo gallery. Each photo can be accompanied by a brief caption.

- **Simple Photo Management**: Easily add or delete photos using direct links to online images. No need for complex uploads or storage systems.

- **Responsive Design**: Enjoy a seamless experience across various devices. SamGram is designed to adapt to different screen sizes.

## Getting Started
### Option 1: Webpack
1.  Clone this repository to your local machine.
   
    `git clone https://github.com/JulKoroleva/SamGram.git` 
    
2.  Navigate to the project directory.
  
    `cd SamGram`
    
3.  Install the required dependencies using npm or yarn.
    
	 `npm install` **or** `yarn install`.
    
4.  Start the development server using the provided npm script.

	 `npm run dev`.
5. Open your web browser and go to `http://localhost:8080` to access the SamGram app.

  ### Option 2: Docker

1.  Install Docker on your system by following the instructions provided on the [Docker website](https://docs.docker.com/get-docker/).
    
2.  Clone this repository to your local machine.

	  `git clone https://github.com/JulKoroleva/SamGram.git` 
  
3. Navigate to the project directory.
 
    `cd SamGram`
   
4. Build the Docker image for the SamGram.

  
   `docker build -t samgram-app .`


5.  Run the Docker container with the built image.

	   `docker run -p 8080:8080 --name samgram-container samgram-app`

6. Open your web browser and go to `http://localhost:8080` to access the SamGram app.


## Limitations

Please be aware of the following limitations:

-   No data is saved or stored on a server or database.
-   Any changes made to the page will be lost upon page refresh.

## Browser Compatibility
The SamGram is designed to work across a wide range of modern web browsers. It dynamically adapts its language to match your browser's settings, making it accessible and user-friendly.

## Feedback and Contributions
If you have any suggestions, feedback, or would like to contribute to this project, please feel free to [open an issue](https://github.com/JulKoroleva/CaesarCipher/issues) or [submit a pull request](https://github.com/JulKoroleva/CaesarCipher/pulls). I appreciate your input!

*Thank you for checking out the Caesar Cipher App! We hope you find it useful and enjoy experimenting with this classic encryption technique. If you have any questions, feel free to reach out to me.*
